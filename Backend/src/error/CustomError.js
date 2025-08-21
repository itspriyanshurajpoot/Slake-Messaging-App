export class CustomError extends Error {
  constructor(message, ststusCode) {
    super(message);
    this.statusCode = this.statusCode;
    (this, (message = message));
    Error.captureStackTrace(error, this.constructor);
  }
}
