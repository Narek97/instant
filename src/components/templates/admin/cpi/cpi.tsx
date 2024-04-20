import React, { useCallback, useState } from "react";
import "./cpi.scss";
import CustomButton from "@/components/ui/custom-button/custom-button";
import CustomInput from "@/components/ui/custom-input/custom-input";
import useSWR from "swr";
import { APP_URL } from "@/constants/env";
import { axiosGetFetcher, axiosPostFetcher } from "@/utils/swr-fetcher";
import CustomLoader from "@/components/ui/custom-loader/custom-loader";
import useSWRMutation from "swr/mutation";

const Cpi = () => {
  const [cpiValue, setCpiValue] = useState<number>(0);

  const { isLoading: isLoadingCpi, data: dataCpi } = useSWR(
    `${APP_URL}/api/metadata/get-metadata?key=OFFER_PRICE`,
    axiosGetFetcher,
    {
      onSuccess: (data) => {
        setCpiValue(data.value);
      },
    },
  );

  const { trigger: updateCpi, isMutating: isMutatingCpi } = useSWRMutation(
    `${APP_URL}/api/metadata/update-metadata`,
    axiosPostFetcher,
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpiValue(+event.target.value);
  };

  const onHandleUpdate = () => {
    updateCpi({
      method: "PATCH",
      key: "OFFER_PRICE",
      value: cpiValue,
    });
  };

  return (
    <div className={"cpi"}>
      {isLoadingCpi ? (
        <CustomLoader />
      ) : (
        <div className={"cpi--content"}>
          <CustomInput
            type={"number"}
            step={0.1}
            value={cpiValue ? cpiValue.toString() : dataCpi.value}
            onChange={onInputChange}
            disabled={isMutatingCpi}
          />

          <CustomButton onClick={onHandleUpdate} disabled={isMutatingCpi}>
            Update
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default Cpi;
