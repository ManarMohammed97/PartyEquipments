import React from "react";
import BorrowingService from "../services/BorrowingService";
import logo from "../logo.svg"; // import the logo image

class BorrowingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipments: [],
      search: "",
    };
  }

  componentDidMount() {
    BorrowingService.getEquipment().then((response) => {
      this.setState({ equipments: response.data });
    });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredEquipment = this.state.equipments.filter((borrowing) => {
      return (
        borrowing.equipmentName
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light navbar navbar-dark bg-dark">
          <div className="container-sm">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src={logo}
                alt="logo"
                width="30"
                height="30"
                className="me-2"
              />
              Event-Equipment / Party-Ausstattung
            </a>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
            </form>
          </div>
        </nav>

        <div className="container-sm my-3">
          <table className="table table-striped">
            <thead className="thead-light">
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
              {filteredEquipment.map((borrowing) => (
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BorrowingComponent;
