import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
