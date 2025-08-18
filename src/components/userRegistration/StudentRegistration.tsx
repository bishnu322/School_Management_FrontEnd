import Input from "@mui/material/Input";
import DropDown from "../DropDown";
import { classesOption } from "../../types/global.type";
import type { FieldValues, UseFormRegister } from "react-hook-form";
import type { FC } from "react";

interface IInput {
  id: string;
  type: string;
  placeholder?: string;
  label: string;
  register: UseFormRegister<FieldValues>;
}
