import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: "http://localhost:5175"
})

export { CanceledError };