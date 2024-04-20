import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { FC, memo, Ref } from "react";
import "./custom-Input.scss";
import Search from "@/assets/icons/search.svg";
import { ObjectKeysType } from "@/ts/types";

interface ICustomInput {
  inputType?: "primary" | "secondary";
  isIconInput?: boolean;
  maxLength?: number;
  minLength?: number;
  iconInput?: JSX.Element;
  sxStyles?: any;
  min?: number;
  max?: number;
  step?: number;
  inputRef?: Ref<HTMLInputElement>;
}

const CustomInput: FC<ICustomInput & TextFieldProps> = ({
  inputType = "primary",
  isIconInput = false,
  rows = 0,
  sxStyles,
  iconInput,
  maxLength,
  minLength,
  min,
  max,
  className,
  step,
  inputRef,
  ...inputRestParams
}) => {
  const style = {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottom: "none",
    ...sxStyles,
  };

  const customStyle: ObjectKeysType = {
    primary: {
      ...style,
      backgroundColor: "#F5F5F5",
    },
    secondary: {
      ...style,
    },
  };

  const endAdornment = () => {
    return isIconInput ? (
      <InputAdornment position={"start"}>
        {iconInput || <Search className={"custom-input--svg"} />}
      </InputAdornment>
    ) : (
      <></>
    );
  };

  return (
    <TextField
      {...inputRestParams}
      autoComplete="off"
      sx={customStyle[inputType]}
      variant="standard"
      className={`custom-input ${className || ""}`}
      rows={rows}
      inputProps={{ maxLength, minLength, min, max, step }}
      inputRef={inputRef}
      InputProps={{
        endAdornment: endAdornment(),
      }}
    />
  );
};

export default memo(CustomInput);
