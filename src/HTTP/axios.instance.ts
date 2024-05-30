import axios from "axios";

export const http = axios.create({
  baseURL: 'https://api-onepiece.com/en/documentation',
});