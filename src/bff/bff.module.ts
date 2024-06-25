import { Module } from '@nestjs/common'
import { BffController } from './bff.controller'
import { BffService } from './bff.service'
import { AmoCrmApiService } from '../amocrmapi/amocrmapi.service'
import { AmoCrmApiModule } from '../amocrmapi/amocrmapi.module'
import { ConfigService } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [AmoCrmApiModule, HttpModule],
  controllers: [BffController],
  providers: [BffService, AmoCrmApiService, ConfigService],
})
export class BffModule {}
