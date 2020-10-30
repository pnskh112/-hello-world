import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config/config.service';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  const config = app.get(ConfigService);
  
  const viewsDirectory = config.get<string>('templates.path');
  const publicDirectory =  config.get<string>('public.path');
  app.setBaseViewsDir(viewsDirectory);
  app.useStaticAssets(publicDirectory);

  await app.listen(3000);
}
bootstrap();
