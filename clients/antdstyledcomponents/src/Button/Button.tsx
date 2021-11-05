import { FC } from "react";
import { ButtonProps } from "./Button.props";
import { ButtonStyled } from "./Button.styled";

export const Button: FC<ButtonProps> = (props) => <ButtonStyled {...props} />;
