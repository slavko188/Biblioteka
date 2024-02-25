import axios from "axios";

class UserService {
  static signUpUser = (body) => axios.post("/auth", body);
}
export default UserService;
