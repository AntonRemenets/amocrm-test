import { Injectable } from '@nestjs/common'
import { AmoCrmApiService } from '../amocrmapi/amocrmapi.service'
import { LeadModel } from '../amocrmapi/models/lead.model'
import { LeadsResultModel } from './models/leadsresult.model'
import { UserModel } from '../amocrmapi/models/user.model'

@Injectable()
export class BffService {
  constructor(private amoApi: AmoCrmApiService) {}

  async getAll(): Promise<LeadsResultModel[]> {
    const leads: Promise<LeadModel[]> = this.amoApi.getLeads()
    const leadsResult: LeadsResultModel[] = []

    for (const lead of await leads) {
      const obj: LeadsResultModel = {
        id: undefined,
        name: undefined,
        price: undefined,
        createdAt: undefined,
        user: undefined,
        status: undefined,
      }

      obj.id = lead.id
      obj.name = lead.name
      obj.price = lead.price
      obj.createdAt = lead.createdAt
      const user: UserModel = await this.amoApi.getUserById(
        lead.responsible_user_id,
      )
      obj.user = user.name
      const status = await this.amoApi.getStatus(
        lead.pipeline_id,
        lead.status_id,
      )
      obj.status = status.name

      leadsResult.push(obj)
    }

    return leadsResult
  }
}
