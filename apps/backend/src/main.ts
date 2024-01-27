/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';

import {join} from 'path';

import {AppModule} from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const globalPrefix = 'api';
  app.useStaticAssets(join(__dirname, 'assets'));
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
