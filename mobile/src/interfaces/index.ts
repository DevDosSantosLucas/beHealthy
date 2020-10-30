export interface ISignInProps {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  kilograms: number;
  quantityThatYouDrinked: number;
  quantityThatYouNeedToDrink: number;
}
