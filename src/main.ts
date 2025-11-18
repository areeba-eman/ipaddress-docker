import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors :true});
  // app.set('trust proxy', true)
  await app.listen(process.env.PORT ?? 3000);
  console.log("http://localhost:3000")
}
bootstrap();
