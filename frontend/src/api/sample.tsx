import axios from "axios"
const serverUrl = process.env.REACT_APP_DEV_SERVER_URL;

class Sample {
  static get = (url : string) => {
    return axios.get(serverUrl + url)
  }
}
export default Sample;