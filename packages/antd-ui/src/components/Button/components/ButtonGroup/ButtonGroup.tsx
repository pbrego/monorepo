import AntButtonGroup from "antd/lib/button/button-group";
import { FC } from "react";
import { ButtonGroupProps } from "./ButtonGroup.props";

export const ButtonGroup: FC<ButtonGroupProps> = (props) => <AntButtonGroup {...props} />;
