import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import prisma from "../../../lib/prisma";
import { User } from ".prisma/client";

export type ResponseData = {
    message?: string
    user?: User
}



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     
    const saltRounds = 10;
    const { email,password } = req.body;
  // Create new user in the database 
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    //Check for existing email or phone number

    const emailExists = await prisma.user.findUnique({
        where: {email: email},
        select: { email: true }
    });

   
    if (emailExists) {
        res.status(422).json({ message: 'Email exists already!' });
        return;
    };
  

    const user = await prisma.user.create({
        data: {
            email: email,
            password: hash
        }
    });
        res.status(201).json(user)

}


