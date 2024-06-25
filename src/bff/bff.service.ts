import { Injectable } from '@nestjs/common'
import { AmoCrmApiService } from '../amocrmapi/amocrmapi.service'

@Injectable()
export class BffService {
  constructor(private amoApi: AmoCrmApiService) {}

  async getAll() {
    return this.amoApi.getLeads()
  }
}
