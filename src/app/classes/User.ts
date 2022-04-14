import { IUser } from "../Contracts/IUser";
export class User implements IUser {
  public id?: number;
  public username: string;
  public email: string;
  public avatar: string;

  constructor(
    id: number,
    username: string,
    email: string,
    avatar: string,
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.avatar = avatar;
  }
}
