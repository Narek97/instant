import axios from 'axios'
import { API_BASE_URL } from '@/constants/env'

export async function PATCH(request: Request) {
  const authHeader = request.headers.get('Authorization')
  const body = await request.json()

  const { key, value } = body

  const configs = {
    headers: {
      Authorization: authHeader,
    },
  }

  return axios
    .patch(`${API_BASE_URL}/metadata`, { key, value }, configs)
    .then((response) => Response.json(response.data))
    .catch((error) => {
      throw new Error(error)
    })
}
