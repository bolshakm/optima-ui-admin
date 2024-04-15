export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmationPassword: string;
}
