import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const IP = String(process.env.IP) || 'localhost'
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server started on adress = ${IP}:${PORT}`));
  
}

bootstrap();
