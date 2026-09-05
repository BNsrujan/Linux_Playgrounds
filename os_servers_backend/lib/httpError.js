class HttpError extends Error {
  constructor(status, message, details) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.details = details;
  }
}

const badRequest = (message, details) => new HttpError(400, message, details);
const unauthorized = (message = "Authentication required") => new HttpError(401, message);
const forbidden = (message = "Not allowed") => new HttpError(403, message);
const notFound = (message = "Not found") => new HttpError(404, message);
const conflict = (message) => new HttpError(409, message);
const tooMany = (message) => new HttpError(429, message);
const serviceUnavailable = (message) => new HttpError(503, message);

module.exports = {
  HttpError,
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  conflict,
  tooMany,
  serviceUnavailable,
};
