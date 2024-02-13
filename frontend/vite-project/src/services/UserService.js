import axios from "axios";

class UserService {
  static signUpUser = (body) => axios.post("/auth/registration", body);
}
export default UserService;
