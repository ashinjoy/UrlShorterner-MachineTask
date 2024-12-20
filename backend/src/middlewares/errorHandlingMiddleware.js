export class ErrorHandlingMiddleware {
  static ErrorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Server Error";
    res
      .status(statusCode)
      .json({
        success: false,
        error: { message: errorMessage, status: statusCode },
      });
  }
}
