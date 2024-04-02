import axios from "axios";
import { base_URL } from "./constants/constants";

const instance = axios.create ({
    baseURL : base_URL
});

export default instance;