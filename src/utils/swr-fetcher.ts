import axios from "axios";
import { getCookies } from "@/utils/cookies";

export const axiosGetFetcher = async (url: string) => {
  const token = getCookies(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN || "instant-token",
  );

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Add the authorization token to the request
        "Content-Type": "application/json", // Set the appropriate content type
      },
    });
    return response.data;
  } catch (error: any) {
    throw { message: error.message };
  }
};

export const axiosPostFetcher = async (url: string, { arg }: { arg: any }) => {
  const isFormData = arg instanceof FormData;
  const token = getCookies(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN || "instant-token",
  );
  const method = isFormData ? arg.get("method") : arg.method;

  try {
    const response = await axios({
      url,
      data: arg,
      method: method || "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Add the authorization token to the request
        "Content-Type": isFormData ? "multipart/form-data" : "application/json", // Set the appropriate content type
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Network error";
  }
};
