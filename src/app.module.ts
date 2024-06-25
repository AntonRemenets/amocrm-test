import { Module } from '@nestjs/common'
import { BffModule } from './bff/bff.module'
import { ConfigModule } from '@nestjs/config'
import { AmoCrmApiModule } from './amocrmapi/amocrmapi.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BffModule,
    AmoCrmApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
