import { Controller, Get, Query } from '@nestjs/common'

@Controller('api')
export class BffController {
  @Get('leads')
  getHello(@Query() query: string): void {
    console.log(query)
  }
}
