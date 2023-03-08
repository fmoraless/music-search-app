import axios from "axios"
import { BASE_URL, CLIENT_ID, CLIENT_SECRET } from "../config.js"

export class SpotiAPI {
  static async getAccessToken() {
    const url = `${BASE_URL}/token`
    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }
    const headers = { "Content-Type": "application/x-www-form-urlencoded" }
    const response = await axios.post(url, params, { headers })
    // console.log({ FROMJSAPI: response.data.access_token })
    return response.data.access_token
  }
}
