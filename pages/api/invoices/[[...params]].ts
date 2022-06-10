import { Invoice, Status, Item} from '@prisma/client';
import { createHandler, Get, Post, Put, Delete, HttpCode, Query, Body, Param, ParseNumberPipe, NotFoundException } from '@storyofams/next-api-decorators';
//import { CustomInvoice } from '../../../lib/supabaseStore';
import prisma from '../../../lib/prisma';
import { Decimal } from '@prisma/client/runtime';



 type CustomInvoice = {
    id: number
     address: string
    email:string
    invoice_id: string
    amount: number
    status: Status
    date: string| Date
    name: string
    phone: string | number
    Item: Item[]
}
 
class InvoiceRouter {
   

    private getInvoiceStatus(amount: number, itemsTotal: number): Status {
        let status: Status = 'UNPAID';
        const balance = Number(amount) - itemsTotal; 
       

        // if(balance < 0 && amount === 0) status = 'UNPAID'
        if (balance < 0) status = 'PARTIAL_PAYMENT'
        if (balance == 0) status = 'FULL_PAYMENT'
        if(balance > 0 ) status = 'BALANCE'
        return status
    }

    //GET /api/invoices/email/:id
    @Get('/email/:id')
    public async sendInvoiceMail(@Param('id', ParseNumberPipe) id: number) {
      
        const invoice = await prisma.invoice.findFirst({ where: { id: id }, include: { Item: true } });
          console.log('Sending Email......' , invoice);
        return true; 
        }
     
     //GET /api/invoices/:id
    @Get('/:id')
    public async getInvoicById(@Param('id', ParseNumberPipe) id: number): Promise<Invoice> {

        const invoice = await prisma.invoice.findFirst({ where: { id: id }, include: { Item: true } });
        if (!invoice) {
            throw new NotFoundException
        } 
        return invoice  
    } 

    //GET  /api/invoices 
    @Get()
    async getAllInvoices() {
        const invoices = prisma.invoice.findMany({
            include: { Item: true },
            orderBy: {id : 'desc'}
        })
        return invoices;
    }
   
    //POST /api/invoices
    @Post()
    @HttpCode(201)
    async createInvoice(@Body() body: CustomInvoice) {
        
          const { invoice_id, phone, name, date, amount, address, Item , email } = body;
       
        const reducer = (previousValue: number | Decimal, currentValue: number | Decimal) => Number(previousValue) + Number(currentValue);
        //Get the total of the items in the invoice Items list
        const itemsTotal = Item.map(({amount}: {amount: number| Decimal}) => amount).reduce(reducer)
         const status:Status = amount != 0 ? this.getInvoiceStatus(amount, itemsTotal as number) : 'UNPAID'  
        const createInvoiceWithItems = await prisma.invoice.create({
            data: {
                invoice_id: invoice_id,
                phone: phone as string,
                name: name,
                email: email, 
                address: address,
                date: date as string,
                amount: amount ,
                status: status,
                Item: {
                    create: [
                        ...Item
                    ]
                }
            },
            include: {
                Item:true
            }
        });
        return createInvoiceWithItems 
    }

    //POST /api/invoices/:id
    @Delete('/:id')
    @HttpCode(204)
    async deleteInvoice(@Param('id', ParseNumberPipe) id: number) {
        const deleteItems = prisma.item.deleteMany({
            where: {
                invoiceId: id
            }
        });
        const deleteInvoice = prisma.invoice.delete({
            where: {
                id: id
            }
        });
        await prisma.$transaction([deleteItems, deleteInvoice]);

    }

    //PUT /api/invoices/:id
    @Put('/:id')
    async updateInvoiceStatus(@Param('id', ParseNumberPipe) id: number, @Body() body: { amount: number }): Promise<Invoice> {
        const { amount } = body;

        const invoice = await prisma.invoice.findFirst({ where: { id: id }, include: { Item: true } });
        
     const reducer = (previousValue: number | Decimal, currentValue: number | Decimal) => Number(previousValue) + Number(currentValue);
        //Get the total of the items in the invoice Items list
        const itemsTotal = invoice?.Item.map(({amount}: {amount: number| Decimal}) => amount).reduce(reducer)
        const status: Status = amount != 0 ? this.getInvoiceStatus(amount, itemsTotal as number) : 'UNPAID';

         const updatedInvoice = await prisma.invoice.update({
            where: { id: id },
            data: {
                amount: amount,
                status: status
            },
            include : {Item: true}
        });
        return updatedInvoice
    }
}

export default createHandler(InvoiceRouter)