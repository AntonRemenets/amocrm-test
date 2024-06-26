import { Module } from '@nestjs/common'
import { AmoCrmApiService } from './amocrmapi.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  //controllers: [AmoCrmApiController],
  providers: [AmoCrmApiService],
  exports: [AmoCrmApiModule],
})
export class AmoCrmApiModule {}
