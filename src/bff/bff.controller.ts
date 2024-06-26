import { Controller, Get, Query } from '@nestjs/common'
import { BffService } from './bff.service'
import { LeadsResultModel } from './models/leadsresult.model'

@Controller('api')
export class BffController {
  constructor(private service: BffService) {}

  @Get('leads')
  getAllLeads(
    @Query('query') query?: number | string,
  ): Promise<LeadsResultModel[]> {
    return this.service.getAll(query)
  }
}
