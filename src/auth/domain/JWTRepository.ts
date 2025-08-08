export interface JWTRepository {
  generateJWT(payload: object): Promise<string>;
}