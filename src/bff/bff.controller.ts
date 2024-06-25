import { Controller, Get } from '@nestjs/common'
import { BffService } from './bff.service'

@Controller('api')
export class BffController {
  constructor(private service: BffService) {}

  @Get('leads')
  getAllLeads() {
    return this.service.getAll()
  }
}
