import { ResourceNotFoundError } from '@shared/errors/domain/ResourceNotFoundError';

export class UserNotFoundError extends ResourceNotFoundError {
  constructor() {
    super('User');
  }
}