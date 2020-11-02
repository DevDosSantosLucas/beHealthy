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
interface IRegister {
  name: string;
  email: string;
  password: string;
  kilograms: number;

}

export async function signIn(data: IProps): Promise<Response> {
  const request = await api.post("/users/sessions", data);
  return request.data;
}

// export async function signUp(data: IRegister): Promise<Response> {
//   const request = await api.post("/users", data);
//   return request.data;
// }