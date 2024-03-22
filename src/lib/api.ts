import axios from "axios";
import Config from "../constants/config";

axios.defaults.baseURL = Config.apiBaseUrl;
axios.defaults.timeout = Config.requestTimeout

axios.defaults.headers.common["Content-Type"] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export default axios
