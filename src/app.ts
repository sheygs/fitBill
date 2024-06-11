import { INestApplication, RequestMethod, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';

export const middlewares = (app: INestApplication) => {
  app.useGlobalPipes(
    // remove additional properites not defined in the DTO
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.setGlobalPrefix('api/v1', {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });

  app.enableCors();
  app.use(helmet());
  app.use(compression());

  const options = new DocumentBuilder()
    .setTitle('iFitness-backend')
    .setDescription('A RESTful service for managing gym memberships and billing structures.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
};
