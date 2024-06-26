import { Controller, Get, Param, Query } from '@nestjs/common'
import { AmoCrmApiService } from './amocrmapi.service'

@Controller('amo')
export class AmoCrmApiController {
  constructor(private amoapi: AmoCrmApiService) {}

  @Get('leads')
  getAllLeads(@Query() query?: number | string) {
    return this.amoapi.getLeads(query)
  }

  @Get('user/:id')
  getUser(@Param('id') id: number) {
    return this.amoapi.getUserById(id)
  }

  @Get('status/:pipeline_id/statuses/:status_id')
  getPipelineStatus(
    @Param('pipeline_id') pipeline_id: number,
    @Param('status_id') status_id: number,
  ) {
    return this.amoapi.getStatus(pipeline_id, status_id)
  }
}
