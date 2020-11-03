import api from "./api";
import { IUser } from "../interfaces";

interface Response {
  token: string;
  user: IUser;
}

interface IProps {
  email: string;
  password: string;
}

export async function signIn(data: IProps): Promise<Response> {
  const request = await api.post("/users/sessions", data);
  return request.data;
}
