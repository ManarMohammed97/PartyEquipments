import axios from "axios";

const Borrowing_REST_API_URL = "http://localhost:8080/api/getEquipment";

class BorrowingService {
  getEquipment() {
    return axios.get(Borrowing_REST_API_URL);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BorrowingService();
