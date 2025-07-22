export class ResourceNotFoundError extends Error {
  constructor(resourceName: string) {
    super(`${resourceName} not found`);
    this.name = this.constructor.name;
  }
} 