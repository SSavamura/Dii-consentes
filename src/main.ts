import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const IP = String(process.env.IP) || 'localhost'
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bodyParser: true });

  // Временная шляпа, дабы работало ГЫ
  app.useStaticAssets(join(__dirname, '..', 'src', 'style'), {prefix: '/style/'});
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
  app.setViewEngine('hbs');

  await app.listen(PORT, () => console.log(`Server started on adress = ${IP}:${PORT}`));

}

bootstrap();
