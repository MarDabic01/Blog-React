import UserLogin from "../entities/UserLogin";
import UserRegister from "../entities/UserRegister";
import apiClient from "./apiClient";

class UserService {
    createUser(newUser: UserRegister){
        return apiClient.post("/auth/register", newUser)
    }

    authenticateUser(user: UserLogin){
        return apiClient.post("auth/login", user)
    }
}

export default new UserService();