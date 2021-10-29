import { BaseModel } from "../base.model";

export class LoginRequestModel {
  email: string;
  contrasena: string;

  constructor(email: string, contrasena: string) {
    this.email = email;
    this.contrasena = contrasena;
  }
}

export interface LoginResponseModel {
  idUsuario: string;
  respuesta: BaseModel;
}
