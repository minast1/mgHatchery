import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Button,Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



  export default function CollapsibleTable() {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>ITEMS</TableCell>
            <TableCell>INVOICE ID</TableCell>
            <TableCell align="left">DATE</TableCell>
            <TableCell align="left">CUST. NAME</TableCell>
            <TableCell align="left">CONTACT</TableCell>
             <TableCell align="left">STATUS</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {'Nii Anang'}
        </TableCell>
        <TableCell>29-04-2021</TableCell>
        <TableCell>0265845930</TableCell>
        <TableCell>INV0004</TableCell>
        <TableCell>
          <Chip
        size="small"
            label="Done"
            color="secondary"
        deleteIcon={<DoneIcon />}
      /></TableCell>
        <TableCell align="right">
          <Button variant="contained" size="small" color="primary" style={{marginRight: 20}}>Print</Button>
           <Button variant="contained" size="small" color="secondary">Delete</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} bgcolor="lightgray">
            
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={6}>Description</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total Amount($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                
                    <TableRow>
                      <TableCell component="th" scope="row" colSpan={6}>
                       Piece White Cockerel
                      </TableCell>
                      <TableCell>5 GH</TableCell>
                      <TableCell align="right">50</TableCell>
                      <TableCell align="right">
                        250.00GH
                      </TableCell>
                    </TableRow>
              
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
