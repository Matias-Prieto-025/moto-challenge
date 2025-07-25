import { AuthUserDTO } from "./AuthUserDTO";

export interface AuthResultDTO {
  user: AuthUserDTO;
  token: string;
}