import axios from 'axios'
import { API_BASE_URL } from '@/constants/env'

export async function DELETE(request: Request) {
  const authHeader = request.headers.get('Authorization')

  const configs = {
    headers: {
      Authorization: authHeader,
    },
  }

  return axios
    .delete(`${API_BASE_URL}/api-errors`, configs)
    .then(() => Response.json('ok'))
    .catch((error) => {
      throw new Error(error)
    })
}
