import axios from "axios";
import { API_BASE_URL } from "@/constants/env";

export async function GET(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const queryParams = new URLSearchParams(request.url.split("?")[1]);
  const key = queryParams.get("key");

  const configs = {
    headers: {
      Authorization: authHeader,
    },
  };

  return axios
    .get(`${API_BASE_URL}/metadata?key=${key}`, configs)
    .then((response) => Response.json(response.data))
    .catch((error) => {
      throw new Error(error);
    });
}
