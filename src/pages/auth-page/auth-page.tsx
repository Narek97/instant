"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import qs from "qs";
import { APP_URL, QP_OAUTH_TOKEN_URL } from "@/constants/env";
import CustomLoader from "@/components/ui/custom-loader/custom-loader";
import axios from "axios";
import { setCookies } from "@/utils/cookies";
import { TOKEN_NAME } from "@/constants";
import CustomError from "@/components/ui/custome-error/custome-error";
import useSWR from "swr";
import { axiosGetFetcher, axiosPostFetcher } from "@/utils/swr-fetcher";
import useSWRMutation from "swr/mutation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  const code = searchParams?.get("code") as string;

  const { isLoading, error } = useSWR(
    `${APP_URL}/api/generate-token?code=${code}`,
    axiosGetFetcher,
    {
      onSuccess: (data) => {
        setCookies(TOKEN_NAME, data.access_token);
        router.push("/surveys");
      },
      onError: () => {},
    },
  );

  if (isLoading) {
    return <CustomLoader />;
  }

  if (error) {
    return <CustomError error={error} />;
  }

  return <div></div>;
};

function AuthPage() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}

export default AuthPage;
