import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { join } from 'path';
import { AppModule } from './app.module';
import secureSession from 'fastify-secure-session';

async function bootstrap() {
  const IP = String(process.env.IP) || 'localhost'
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bodyParser: true }
    );

  // Временная шляпа, дабы работало ГЫ
  app.useStaticAssets({
    root: join(__dirname, '..', 'src', 'public'),
    prefix: '/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'src', 'views'),
  });

  app.register(secureSession, {
    secret: 'averylogphrasebiggerthanthirtytwochars', // Поменять обязательно
    salt: 'mq9hDxBVDbspDR6n',
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 60 * 24
    }
  });

  // app.useGlobalInterceptors(new TokenInterceptor())

  await app.listen(PORT, () => console.log(`Server started on adress = ${IP}:${PORT}`));

}

bootstrap();
