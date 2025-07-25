import { ResourceNotFoundError } from '@shared/errors/ResourceNotFoundError';

export class UserNotFoundError extends ResourceNotFoundError {
  constructor(message: string = 'User not found') {
    super('UserNotFoundError', message);
  }
}