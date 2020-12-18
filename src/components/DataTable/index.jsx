import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(sourcing, destinationZip, zones, rates) {
    return {sourcing, destinationZip, zones, rates};
}

const rows = [
    createData(123, 159, 6.0, 24, 4.0),
    createData(123424, 237, 9.0, 37, 4.3),
    createData(2345, 262, 16.0, 24, 6.0),
    createData(234424, 305, 3.7, 67, 4.3),
    createData(2434243, 356, 16.0, 49, 3.9)
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Sourcing</StyledTableCell>
                        <StyledTableCell align="right">Destination Zip</StyledTableCell>
                        <StyledTableCell align="right">Zones</StyledTableCell>
                        <StyledTableCell align="right">Rate $</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.sourcing}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.destinationZip}</StyledTableCell>
                            <StyledTableCell align="right">{row.zones}</StyledTableCell>
                            <StyledTableCell align="right">{row.rates}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
