import axios from "axios";

const Http = axios.create({
  // baseURL: process.env.REACT_APP_URL_API,
  baseURL: 'https://61eb6d5a7ec58900177cdc62.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export default Http