import Cookies from 'js-cookie'
import { COOKIE_DOMAIN } from '@/constants/env'

export const setCookies = (name: string, value: string) => {
  return Cookies.set(name, value, {
    path: '/',
    domain: COOKIE_DOMAIN,
  })
}

export const getCookies = (name: string) => {
  return Cookies.get(name)
  // return 'eyJpc3MiOiJodHRwczovL3d3dy5xdWVzdGlvbnByby5jb20vIiwiZXhwIjoxNzEzNzkzMzg3LCJwYXlsb2FkIjoie1wiaXNQYXJ0bmVyXCI6ZmFsc2UsXCJmaXJzdE5hbWVcIjpcIkhlZ2hpbmVcIixcImxhc3ROYW1lXCI6XCJNa3J0Y2h5YW5cIixcImVtYWlsQWRkcmVzc1wiOlwiaGVnaGluZS5ta3J0Y2h5YW5AcXVlc3Rpb25wcm8uY29tXCIsXCJpbml0aWFsc1wiOlwiSE1cIixcInByb2ZpbGVQaWNcIjpcIlwiLFwiaXNBZG1pblwiOnRydWUsXCJsYW5ndWFnZUNvZGVcIjpcImVuXCIsXCJ1c2VySURcIjo1NjA1NjQ5LFwib3JnSURcIjo0OTU4NzcyLFwiZGVmYXVsdFByb2R1Y3RVcG9uTG9naW5cIjpcIkxhc3QgVXNlZFwifSIsImlhdCI6MTcxMzc5MDUwNywiYWxnIjoiSFMyNTYifQ.eyJpc3MiOiJodHRwczovL3d3dy5xdWVzdGlvbnByby5jb20vIn0.IB-jjEbLAwVdQ4RyvdUBZlyWOIIiIVDeHvkmP__JyTg'
}

export const removeCookies = (name: string) => {
  return Cookies.remove(name, {
    expires: 0,
    path: '/',
    domain: COOKIE_DOMAIN,
  })
}
