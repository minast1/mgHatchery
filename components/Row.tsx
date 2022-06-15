import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Chip,
  Collapse,
  Box,
  Table,
  TableHead,
  Grid,
  Typography,
  TableFooter,
} from "@material-ui/core";
import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DoneIcon from "@material-ui/icons/Done";
import { dataStore, CustomInvoice, useStore } from "../lib/supabaseStore";
import { makeStyles } from "@material-ui/core/styles";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import PrintIcon from "@material-ui/icons/Print";
import { Decimal } from "@prisma/client/runtime";
import WarningIcon from "@material-ui/icons/Warning";
import UpdateIcon from "@material-ui/icons/Update";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import EmailIcon from "@material-ui/icons/Email";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row({ invoiceItem }: { invoiceItem: CustomInvoice }) {
  const [balance, setBalance] = React.useState<number | Decimal>(0);

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<{ amount: number; id: number }>();
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const state = useStore();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [amts, setArray] = React.useState<number[] | Decimal[]>([]);
  const [payment, triggerPayment] = React.useState<boolean>(false);
  const updateData = state.updateData; // dataStore(state => state.updateData);

  type ItemAmountType = {
    amount: number | Decimal;
  };

  type dataType = {
    amount: number;
  };

  const patchData = async (
    url: string,
    data: dataType
  ): Promise<CustomInvoice> => {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
  };

  function getBalance(invoice: CustomInvoice): number | Decimal {
    let arrayOfAmounts: number[] | Decimal[] = [0];
    //const { Item , amount } = invoice;
    invoice.Item.forEach(({ amount }: ItemAmountType) => {
      arrayOfAmounts = [...arrayOfAmounts, amount] as number[];
    });
    setArray(arrayOfAmounts);
    const reducer = (accumulator: number, currentValue: number) =>
      Number(accumulator) + Number(currentValue);
    const total = arrayOfAmounts.reduce(reducer);
    const balance = total - invoice.amount;
    return balance;
  }

  const onSubmit: SubmitHandler<{ amount: number; id: number }> = async (
    data
  ) => {
    setLoading(true);
    const { amount, id } = data;
    const newData = { amount: Number(amount) };

    const updatedStatus = await patchData(`/api/invoices/${id}`, newData);
    state.updateInvoiceStatus(updatedStatus);
    reset({ amount: 0 });
    setLoading(false);
    //postData('/api/invoices', body); */
  };

  React.useEffect(() => {
    const bal = getBalance(invoiceItem);
    setBalance(bal);
  }, [state.data]);

  const deleteInvoiceWithItems = (invoiceId: number) => {
    state.deleteData(invoiceId);
    fetch(`/api/invoices/${invoiceId}`, {
      method: "DELETE",
    });
  };

  const sendInvoiceMail = (invoiceId: number) => {
    fetch(`/api/invoices/email/${invoiceId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) =>
        toast.success(`${data.message}`, { position: "bottom-right" })
      );
  };
  //console.log(amts);
  return (
    <React.Fragment>
      <TableRow className={classes.root} hover>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {invoiceItem.name}
        </TableCell>

        <TableCell align="left">₵ {invoiceItem.amount}</TableCell>
        <TableCell align="left">{invoiceItem.phone}</TableCell>
        <TableCell align="left">
          {invoiceItem.status === "BALANCE" ? (
            <Chip
              style={{ backgroundColor: "#1976d2", padding: 6 }}
              size="small"
              label="Has Overpayed Balance"
              //color="secondary"
              icon={<WarningIcon style={{ color: "black" }} />}
            />
          ) : invoiceItem.status === "UNPAID" ? (
            <Chip
              style={{ backgroundColor: "red", padding: 6 }}
              size="small"
              label="Unpaid Invoice"
              //color="secondary"
              icon={<ErrorOutlineOutlinedIcon style={{ color: "black" }} />}
            />
          ) : invoiceItem.status === "PARTIAL_PAYMENT" ? (
            <Chip
              style={{ backgroundColor: "#ffa726", padding: 6 }}
              size="small"
              label="Has Unpaid Balance"
              //color="secondary"
              icon={<UpdateIcon style={{ color: "black" }} />}
            />
          ) : invoiceItem.status === "FULL_PAYMENT" ? (
            <Chip
              style={{ backgroundColor: "#00c853", padding: 6 }}
              size="small"
              label="Transaction Complete"
              //color="secondary"
              icon={<DoneIcon style={{ color: "black" }} />}
            />
          ) : null}
        </TableCell>
        <TableCell align="left">
          {
            <Grid container>
              <Grid item xs={4} sm={12} md={4}>
                <IconButton
                  href={`/Dashboard/${encodeURIComponent(invoiceItem.id)}`}
                  aria-label="print"
                  size="small"
                  onClick={(event) => {}}
                  color="primary"
                >
                  <PrintIcon />
                </IconButton>
              </Grid>
              <Grid item xs={5} sm={12} md={4}>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={(event) => deleteInvoiceWithItems(invoiceItem.id)}
                  style={{ color: "red" }}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={3} sm={12} md={3}>
                <IconButton
                  disabled={invoiceItem.email ? false : true}
                  aria-label="mail"
                  size="small"
                  onClick={(event) => sendInvoiceMail(invoiceItem.id)}
                  color="primary"
                  //style={{ color: "red" }}
                >
                  <EmailIcon />
                </IconButton>
              </Grid>
            </Grid>
          }
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} bgcolor="#f5f5f5">
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", paddingLeft: 15 }}
                gutterBottom
                component="div"
              >
                {`Tansaction date: ${format(new Date(invoiceItem.date), "PP")}`}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoiceItem.Item.map((itemRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {itemRow.description}
                      </TableCell>
                      <TableCell>₵ {itemRow.rate}</TableCell>
                      <TableCell align="right">{itemRow.quantity}</TableCell>
                      <TableCell align="right">₵ {itemRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            {invoiceItem.status === "PARTIAL_PAYMENT" ||
            invoiceItem.status === "UNPAID" ? (
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: 1 }}
                onClick={() => triggerPayment(!payment)}
              >
                Add Payment
              </Button>
            ) : invoiceItem.status === "BALANCE" ? (
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: 1 }}
                onClick={() => triggerPayment(!payment)}
              >
                Clear Balance
              </Button>
            ) : null}

            {payment && invoiceItem.status !== "FULL_PAYMENT" ? (
              <Box
                margin={2}
                bgcolor="#f5f5f5"
                padding={2}
                component="form"
                //autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Grid container spacing={1} direction="column">
                  <Grid item xs={3}>
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "bold" }}
                      component="div"
                    >
                      {`Available Balance : ₵ ${balance}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="id"
                      control={control}
                      defaultValue={invoiceItem.id}
                      render={({ field: { onChange } }) => (
                        <TextField
                          label="id"
                          defaultValue={invoiceItem.id}
                          type="number"
                          style={{ display: "none" }}
                        />
                      )}
                    />
                    <Controller
                      name="amount"
                      control={control}
                      defaultValue={invoiceItem.amount}
                      render={({ field: { value } }) => (
                        <TextField
                          fullWidth
                          // defaultValue={value}
                          {...register("amount", {
                            required: "This field is required",
                          })}
                          error={!!errors.amount}
                          helperText={errors.amount?.message}
                          label="Amount"
                          size="small"
                          // onChange={(event)=> setFormData({...formData, amount: event.target.value})}
                          required
                          type="number"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      size="small"
                    >
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : (
                        "Change Status"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ) : null}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
