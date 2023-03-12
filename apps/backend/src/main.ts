/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

import constants from '@opres/shared/data/constants';

import {AppModule} from './app/app.module';

async function bootstrap() {
  const globalPrefix = 'api';
  const swaggerPrefix = globalPrefix + '/swagger';
  const port = process.env.PORT || 3333;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
    .setTitle('Opres API')
    .setDescription('The opres.help public API endpoints.')
    .setVersion(constants.appVersion)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPrefix, app, document);

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
