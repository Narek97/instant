// import axios from 'axios'
// import { API_BASE_URL } from '@/constants/env'

export async function GET(request: Request) {
  // const authHeader = request.headers.get('Authorization')
  const body = await request.json()

  const { data } = body
  console.log(data, 'data')
  // const configs = {
  //   headers: {
  //     Authorization: authHeader,
  //   },
  // }

  return Response.json(data)

  // return axios
  //   .post(`${API_BASE_URL}`, configs)
  //   .then((response) => Response.json(response.data))
  //   .catch((error) => {
  //     throw new Error(error)
  //   })
}
