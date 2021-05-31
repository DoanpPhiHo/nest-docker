import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap () {
  const logger = new Logger('MainApp')
  logger.log('##############################################################')
  logger.log(`# 1.MYSQL_ROOT_PASSWORD_: ${process.env.MYSQL_ROOT_PASSWORD}${' '.repeat(35 - process.env.MYSQL_ROOT_PASSWORD.length)}#`)
  logger.log(`# 2.MYSQL_DATABASE______: ${process.env.MYSQL_DATABASE}${' '.repeat(35 - process.env.MYSQL_DATABASE.length)}#`)
  logger.log(`# 3.MYSQL_USER__________: ${process.env.MYSQL_USER}${' '.repeat(35 - process.env.MYSQL_USER.length)}#`)
  logger.log(`# 4.MYSQL_PASSWORD______: ${process.env.MYSQL_PASSWORD}${' '.repeat(35 - process.env.MYSQL_PASSWORD.length)}#`)
  logger.log(`# 5.PORT________________: ${process.env.PORT}${' '.repeat(35 - process.env.PORT.length)}#`)
  logger.log(`# 6.DB_HOST_____________: ${process.env.DB_HOST}${' '.repeat(35 - process.env.DB_HOST.length)}#`)
  logger.log(`# 7.DB_PORT_____________: ${process.env.DB_PORT}${' '.repeat(35 - process.env.DB_PORT.length)}#`)
  logger.log(`# 8.DB_USERNAME_________: ${process.env.DB_USERNAME}${' '.repeat(35 - process.env.DB_USERNAME.length)}#`)
  logger.log(`# 9.DB_PASSWORD_________: ${process.env.DB_PASSWORD}${' '.repeat(35 - process.env.DB_PASSWORD.length)}#`)
  logger.log(`# 10.DB_DATABASE________: ${process.env.DB_DATABASE}${' '.repeat(35 - process.env.DB_DATABASE.length)}#`)
  logger.log(`# 11.JWT_SECRET_________: ${process.env.JWT_SECRET}${' '.repeat(35 - process.env.JWT_SECRET.length)}#`)
  logger.log(`# 12.ENTITIES___________: ${process.env.ENTITIES}${' '.repeat(35 - process.env.ENTITIES.length)}#`)
  logger.log('##############################################################')
  logger.log(`# API PATH: http://localhost:${process.env.PORT}/api ${' '.repeat(27 - process.env.PORT.length)}#`)
  logger.log(`# API EXPLORER: http://localhost:${process.env.PORT}/explorer ${' '.repeat(18 - process.env.PORT.length)}#`)
  logger.log('##############################################################')
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  const options = new DocumentBuilder()
    .setTitle('API test')
    .setDescription('The API test')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('explorer', app, document)

  await app.listen(process.env.PORT)
}
bootstrap()
