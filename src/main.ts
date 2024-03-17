import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validationOptions } from './config/validation';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  await app.listen(3000);
}
bootstrap();
