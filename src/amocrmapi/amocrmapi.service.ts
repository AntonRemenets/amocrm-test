import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'
import { LeadModel } from './models/lead.model'
import { UserModel } from './models/user.model'
import { PipelineStatusModel } from './models/pipeline-status.model'

@Injectable()
export class AmoCrmApiService {
  constructor(
    private readonly httpService: HttpService,
    private config: ConfigService,
  ) {}

  async getLeads(): Promise<LeadModel[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.config.get<string>('AMO_URI')}/api/v4/leads`,
        {
          headers: {
            Authorization: `Bearer ${this.config.get<string>('ACCESS_TOKEN')}`,
          },
        },
      ),
    )
    return data._embedded.leads
  }

  async getUserById(id: number): Promise<UserModel> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.config.get<string>('AMO_URI')}/api/v4/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.config.get<string>('ACCESS_TOKEN')}`,
          },
        },
      ),
    )
    return data
  }

  async getStatus(pipeline_id, status_id): Promise<PipelineStatusModel> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.config.get<string>('AMO_URI')}/api/v4/leads/pipelines/${pipeline_id}/statuses/${status_id}`,
        {
          headers: {
            Authorization: `Bearer ${this.config.get<string>('ACCESS_TOKEN')}`,
          },
        },
      ),
    )
    return data
  }
}
