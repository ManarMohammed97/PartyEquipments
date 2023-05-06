import React from "react";
import BorrowingService from "../services/BorrowingService";

class BorrowingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipments: [],
    };
  }

  componentDidMount() {
    BorrowingService.getEquipment().then((response) => {
      this.setState({ equipments: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center p-3 mb-2 bg-primary text-white">
          Event-Equipment / Party-Ausstattung
        </h1>
        <p></p>
        <p></p>

        <div></div>
        <table class="table table-striped">
          <thead class="thead-light">
            <tr>
              <th scope="col">
                <strong>Id</strong>
              </th>
              <th scope="col">
                <strong>Bezeichnung</strong>
              </th>
              <th scope="col">
                <strong>Status</strong>
              </th>
            </tr>
          </thead>

          <tbody>
            {this.state.equipments.map((borrowing) => (
              <tr key={borrowing.id}>
                <td>{borrowing.id}</td>
                <td>{borrowing.equipmentName}</td>
                <td
                  className={
                    borrowing.status === "AVAILABLE"
                      ? "text-success"
                      : borrowing.status === "BORROWED"
                      ? "text-danger"
                      : ""
                  }
                >
                  {borrowing.status}
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BorrowingComponent;
