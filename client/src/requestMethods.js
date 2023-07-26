import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWU0MjNjZGRhNzE5ZGQwNTk1NjRjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDg0MDk2OSwiZXhwIjoxNjg1MTAwMTY5fQ.XetpsEG3i-x2vRK_TthzaL8frsuKP7Mn0eTutZ7LRII";
export const publicRequest = axios.create({
baseURL : BASE_URL,
});



export const userRequest = axios.create({
baseURL : BASE_URL,
header:{token:`Bearer ${TOKEN}`}
});