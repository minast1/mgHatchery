import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import "date-fns";
import logo from "../public/mgLogo2.jpg";
import Image from "next/image";
import SpanningTable from "./SpanningTable";
import { CustomInvoice, dataStore } from "../lib/supabaseStore";
import { Decimal } from "@prisma/client/runtime";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  divider: {
    background: "black",
    height: 1,
  },
  img: {
    border: 0,
  },
}));

type ItemAmountType = {
  amount: number | Decimal;
};

const InvoicePage = ({ invoiceData }: { invoiceData: CustomInvoice }) => {
  const classes = useStyles();

  function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
  }

  function getBalance(invoice: CustomInvoice): number {
    // let arrayOfAmounts: number[] | Decimal[]  = [0];
    //const { Item , amount } = invoice;
    const reducer = (accumulator: number, currentValue: number) =>
      Number(accumulator) + Number(currentValue);
    const total: number | Decimal = invoice.Item.map(({ amount }) =>
      Number(amount)
    ).reduce(reducer);
    // setArray(arrayOfAmounts)

    //const total = arrayOfAmounts.reduce(reducer)
    const balance: number = total - invoice.amount;
    return balance;
  }

  function getTodaysDate() {
    let today = new Date();
    const todaysDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return todaysDate;
  }

  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" mt={5}>
            <Box pr={4}>
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={200}
                className={classes.img}
                layout="intrinsic"
              />
            </Box>
            <Box flexDirection="column" flexGrow={1}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingBottom: 15 }}
              >
                MG - HATCHERY
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", letterSpacing: "1px" }}
              >
                BN080742012
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: "1px" }}>
                P.O.BOX MD 176, MADINA - ACCRA
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: "1px" }}>
                GPS:GM-003-0515 AGBOTUI AVE. MADINA
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: "1px" }}>
                0302507486, 0266245495
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: "1px" }}>
                mgventures1@outlook.com
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                style={{ paddingBottom: 10, letterSpacing: "1px" }}
              >
                INVOICE
              </Typography>
              <Typography
                variant="body2"
                style={{ paddingBottom: 10, letterSpacing: "1px" }}
              >
                {invoiceData.invoice_id}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontWeight: "bold", letterSpacing: "1px" }}
              >
                DATE
              </Typography>
              <Typography variant="body2">
                {format(new Date(invoiceData.date), "PP")}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontWeight: "bold", letterSpacing: "1px" }}
              >
                DUE
              </Typography>
              <Typography variant="body2" gutterBottom>
                On Reciept
              </Typography>
              <Typography
                variant="body2"
                style={{ fontWeight: "bold", letterSpacing: "1px" }}
              >
                BALANCE DUE
              </Typography>
              <Typography variant="body2" style={{ paddingBottom: 30 }}>
                GH??? {getBalance(invoiceData)}
              </Typography>
            </Box>
          </Box>
          <Divider classes={{ root: classes.divider }} />
        </Grid>
        <Grid item xs={12} container direction="column">
          <Grid item xs={4} style={{ paddingTop: 20 }}>
            <Typography
              gutterBottom
              variant="body2"
              style={{
                fontWeight: "bold",
                letterSpacing: "1px",
                paddingBottom: 10,
              }}
            >
              BILL TO
            </Typography>
            <Typography
              variant="body2"
              style={{ fontWeight: "bold", letterSpacing: "1px" }}
              gutterBottom
            >
              {invoiceData.name}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ letterSpacing: "1px" }}
            >
              {invoiceData.address}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ letterSpacing: "1px" }}
            >
              Accra
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ letterSpacing: "1px" }}
            >
              {invoiceData.phone}
            </Typography>
          </Grid>
          <Divider
            variant="fullWidth"
            light
            style={{ height: 1, background: " darkgray" }}
          />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 20 }}>
          <SpanningTable
            invoiceItems={invoiceData.Item}
            amount={invoiceData.amount}
          />
        </Grid>
        <Grid item style={{ marginTop: 100, marginLeft: "auto" }}>
          <Typography
            variant="body2"
            style={{ fontWeight: "bold", letterSpacing: "1px" }}
          >
            DATE SIGNED
          </Typography>
          <Typography variant="body2" style={{ letterSpacing: "1px" }}>
            {getTodaysDate()}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InvoicePage;
