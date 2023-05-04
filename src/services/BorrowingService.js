import axios from "axios";

const Borrowing_REST_API_URL = "http://localhost:8072/api/Borrowing";

class BorrowingService {
  getBorrowing() {
    return axios.get(Borrowing_REST_API_URL);
  }
}
// eslint-disable-next-line
export default new BorrowingService();
