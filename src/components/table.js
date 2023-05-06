import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorrowingService from "../services/BorrowingService";

class table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Borrowings: [],
    };
  }
  componentDidMount() {
    BorrowingService.getBorrowing().then((response) => {
      this.setState({ Borrowings: response.data });
    });
  }
}

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Party equipments">
        <TableHead>
          <TableRow>
            <TableCell>partyEquipment id (100g serving)</TableCell>
            <TableCell align="right">partyEquipment</TableCell>
            <TableCell align="right">customer id&nbsp;(g)</TableCell>
            <TableCell align="right">customer&nbsp;(g)</TableCell>
            <TableCell align="right">status&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.Borrowings.map((borrowing) => (
            <TableRow
              key={borrowing.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {borrowing.id}
              </TableCell>
              <TableCell align="right">
                {borrowing.partyEquipment.equipmentName}
              </TableCell>
              <TableCell align="right">{borrowing.customer.id}</TableCell>
              <TableCell align="right">
                {borrowing.customer.customerName}
              </TableCell>
              <TableCell align="right">
                {borrowing.partyEquipment.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
