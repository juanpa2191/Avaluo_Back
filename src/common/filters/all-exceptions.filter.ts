import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { MongoError } from 'mongodb';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const responseObj = exceptionResponse as any;
        message = responseObj.message || message;
        error = responseObj.error || error;
      }
    } else if (exception instanceof MongoError) {
      // Manejo específico de errores de MongoDB
      switch (exception.code) {
        case 11000: // Duplicate key error
          status = HttpStatus.CONFLICT;
          message = 'El registro ya existe';
          error = 'Conflict';
          break;
        case 121: // Document validation error
          status = HttpStatus.BAD_REQUEST;
          message = 'Datos de entrada inválidos';
          error = 'Bad Request';
          break;
        default:
          status = HttpStatus.INTERNAL_SERVER_ERROR;
          message = 'Error en la base de datos';
          error = 'Database Error';
      }
    } else if (exception instanceof Error) {
      // Ignorar errores de rutas no encontradas para recursos estáticos comunes
      if (exception.message.includes('Cannot GET /favicon.ico') ||
          exception.message.includes('Cannot GET /robots.txt') ||
          exception.message.includes('Cannot GET /manifest.json')) {
        response.status(404).json({
          statusCode: 404,
          timestamp: new Date().toISOString(),
          path: request.url,
          method: request.method,
          error: 'Not Found',
          message: 'Resource not found',
        });
        return;
      }
      message = exception.message;
    }

    // Log del error
    this.logger.error(
      `HTTP ${status} Error: ${message}`,
      exception instanceof Error ? exception.stack : String(exception),
    );

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      error,
      message,
    });
  }
}