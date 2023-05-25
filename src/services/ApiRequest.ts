import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../config/api";

export default class ApiRequest {
    static headers = { 'x-rapidapi-key': API_KEY }
    static async get(url: string): Promise<AxiosResponse | null> {
        let result: any = null;
        await axios.get(url, { headers: this.headers })
            .then((resopnse) => {
                result = resopnse
            }).catch((err) => result = err.response)
        return result
    }
}