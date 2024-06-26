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
    try {
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
    } catch (e) {
      console.log(e)
    }
  }

  async getUserById(id: number): Promise<UserModel> {
    try {
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
    } catch (e) {
      console.log(e)
    }
  }

  async getStatus(
    pipeline_id: number,
    status_id: number,
  ): Promise<PipelineStatusModel> {
    try {
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
    } catch (e) {
      console.log(e)
    }
  }
}
