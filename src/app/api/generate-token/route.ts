import qs from 'qs'
import { QP_OAUTH_TOKEN_URL } from '@/constants/env'
import axios from 'axios'

export async function GET(request: Request) {
  const queryParams = new URLSearchParams(request.url.split('?')[1])
  const code = queryParams.get('code')

  const data = {
    grant_type: 'authorization_code',
    code,
    client_id: process.env.REACT_APP_QP_OAUTH_CLIENT_ID,
    client_secret: process.env.REACT_APP_QP_OAUTH_CLIENT_SECRET,
  }
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: QP_OAUTH_TOKEN_URL,
  }
  return axios(options).then((response) => Response.json(response.data))
}
