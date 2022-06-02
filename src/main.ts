import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000

const config = new DocumentBuilder()
.setTitle('Mazal Nest Project')
.setDescription('Mazal Nest')
.setVersion('1.0.0')
.addTag('Mazal Nest')
.build()
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`My Very Cool Server started on port: ${PORT}. Happy Hacking!!!`));
}
start();
