import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const expressLayouts = require('express-ejs-layouts');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(expressLayouts);

  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
  app.setViewEngine('ejs');
  app.set('layout', 'layouts/layout');
  app.use(expressLayouts);

  await app.listen(3000);
}
bootstrap();