import { AxiosResponse } from 'axios'

export interface Helper<P = Record<string, unknown>> {
  (bodyRequest: P): Promise<AxiosResponse>
}
