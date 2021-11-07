import AntButton from "antd/lib/button";
import { ButtonProps } from "./Button.props";
import { ButtonGroup } from "./components/ButtonGroup";

export const Button = (props: ButtonProps): JSX.Element => <AntButton {...props} />;

Button.Group = ButtonGroup;
