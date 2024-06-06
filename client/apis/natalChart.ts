import request from 'superagent'
import { NatalChart } from '../../models/natalChart.ts'
import { useQuery } from '@tanstack/react-query'
import { FormData } from '../../models/formData.ts'

export function useNatalChart(form: FormData) {
  return useQuery({
    queryKey: ['charts'],
    queryFn: async (): Promise<NatalChart> => {
      try {
        const data = await request.post('api/v1/chart/').send(form)
        return data.body
      } catch(err) {
        console.error(err)
        throw new Error
      }
    }
  })
}
