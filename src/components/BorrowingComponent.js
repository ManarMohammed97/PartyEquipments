import React from "react";
import BorrowingService from "../services/BorrowingService";

class BorrowingComponent extends React.Component {
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
  render() {
    return (
      <div>
        <h1 className="text-center">Borrowing List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Borrowing Id</td>
              <td>PartyEquipment</td>
              <td>Customer</td>
            </tr>
          </thead>

          <tbody>
            {this.state.Borrowings.map((borrowing) => (
              <tr key={borrowing.id}>
                <td>{borrowing.id}</td>
                <td>{borrowing.partyEquipment}</td>
                <td>{borrowing.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BorrowingComponent;
