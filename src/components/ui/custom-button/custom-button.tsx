"use client";
import React, { FC, memo } from "react";
import { Button, ButtonProps } from "@mui/material";
import { ObjectKeysType } from "@/ts/types";

interface ICustomButton {
  children: React.ReactNode;
  sxStyles?: any;
}

const CustomButton: FC<ICustomButton & ButtonProps> = ({
  children,
  sxStyles,
  variant = "contained",
  ...buttonRestParams
}) => {
  const style = {
    textTransform: "initial !important",
    minHeight: "32px",
    minWidth: "64px",
    padding: "7px 16px",
    lineHeight: "16px",
    borderRadius: "2px",
    boxSizing: "border-box",
    fontSize: "14px",
    gap: "8px",
    justifyContent: "center",
    "&.Mui-disabled": {
      background: "#60abec",
      borderColor: "#60abec",
      color: "#FFFFFF",
    },
    ...sxStyles,
  };
  const customStyle: ObjectKeysType = {
    text: {
      textTransform: "initial",
    },
    contained: {
      color: "#FFFFFF",
      backgroundColor: "#1B87E6",
      border: "1px solid #1B87E6",
      "&:hover": {
        background: "#54a5ec",
        border: "1px solid #54a5ec",
      },
      ...style,
    },
    outlined: {
      border: "1px solid #1B87E6",
      color: "#1B87E6",
      ...style,
    },
  };

  return (
    <Button {...buttonRestParams} sx={customStyle[variant]}>
      {children}
    </Button>
  );
};

export default memo(CustomButton);
