import Cookies from 'js-cookie'
import { COOKIE_DOMAIN } from '@/constants/env'

export const setCookies = (name: string, value: string) => {
  return Cookies.set(name, value, {
    path: '/',
    domain: COOKIE_DOMAIN,
  })
}

export const getCookies = (name: string) => {
  // return Cookies.get(name)
  return 'eyJpc3MiOiJodHRwczovL3d3dy5xdWVzdGlvbnByby5jb20vIiwiZXhwIjoxNzEzNzg0MzAzLCJwYXlsb2FkIjoie1wiaXNQYXJ0bmVyXCI6dHJ1ZSxcImZpcnN0TmFtZVwiOlwiMTFcIixcImxhc3ROYW1lXCI6XCIyMlwiLFwiZW1haWxBZGRyZXNzXCI6XCJhbm5pYmFkYWx5YW4rb3V0ZXJAZ21haWwuY29tXCIsXCJpbml0aWFsc1wiOlwiMTJcIixcInByb2ZpbGVQaWNcIjpcImh0dHBzOi8vd3d3LnF1ZXN0aW9ucHJvLmNvbS9xcF91c2VyaW1hZ2VzL3N1Yi00LzUyMTYyOTIvcGFzc3BvcnQtZGF2aWRlLXJ1Z2dlcm8tYm9ydG9uZS0xLS0tQ29waWEuanBnXCIsXCJpc0FkbWluXCI6ZmFsc2UsXCJsYW5ndWFnZUNvZGVcIjpcImVuXCIsXCJ1c2VySURcIjo1MjE2MjkyLFwib3JnSURcIjo1MDg3NjQ3LFwiZGVmYXVsdFByb2R1Y3RVcG9uTG9naW5cIjpcIkxhc3QgVXNlZFwifSIsImlhdCI6MTcxMzc4MTQyMywiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJodHRwczovL3d3dy5xdWVzdGlvbnByby5jb20vIn0.wka2Lk7Kar7D54AYQJF9-MkyX5AHMR0uYqaUUxiupps'
}

export const removeCookies = (name: string) => {
  return Cookies.remove(name, {
    expires: 0,
    path: '/',
    domain: COOKIE_DOMAIN,
  })
}
