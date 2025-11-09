import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS para permitir conexiones desde Angular
  app.enableCors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  });

  // Aplicar filtro global de excepciones
  app.useGlobalFilters(new AllExceptionsFilter());

  // Manejar favicon.ico y otras rutas no encontradas de forma silenciosa
  app.use('/favicon.ico', (req, res) => {
    res.status(204).end(); // No Content
  });

  // Middleware para ignorar rutas no API
  app.use((req, res, next) => {
    if (req.path.startsWith('/api') || req.path === '/' || req.path.startsWith('/auth') || req.path.startsWith('/usuario') || req.path.startsWith('/avaluo')) {
      next();
    } else {
      res.status(404).json({
        statusCode: 404,
        message: 'Route not found',
        path: req.path
      });
    }
  });

  const config = new DocumentBuilder()
    .setTitle('Avalúos Inmobiliarios API')
    .setDescription('API para gestión de avaluos inmobiliarios')
    .setVersion('1.0')
    .addTag('avaluos')
    .addTag('usuarios')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3131, '0.0.0.0');
}
bootstrap();
