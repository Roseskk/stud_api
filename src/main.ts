import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Разрешить запросы только с этого домена
    methods: 'GET,PUT,POST,DELETE', // Разрешить только эти HTTP методы
    allowedHeaders: 'Content-Type, Authorization', // Разрешить только эти заголовки
  });

  const config = new DocumentBuilder()
      .setTitle('API Студенческий портал')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
