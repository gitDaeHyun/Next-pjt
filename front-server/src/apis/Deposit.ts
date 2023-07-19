import { AxiosResponse } from "axios";
import axios from 'axios';
import DepositType from "../types/getDepositType"


const depositApi = async () : Promise<AxiosResponse<DepositType[]>> => {
    const response: AxiosResponse<DepositType[]> = await axios.get('http://127.0.0.1:8000/finlife/deposit-products/');
    return response;
};

export default depositApi;