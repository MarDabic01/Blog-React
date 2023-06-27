import UserRegister from "../entities/UserRegister";
import apiClient from "./apiClient";

class UserService {
    createUser(newUser: UserRegister){
        return apiClient.post("/auth/register", newUser)
    }
}

export default new UserService();