import AntButton from "antd/lib/button/index";
import styled from "styled-components";

import { buttonTheme } from "../Theme/components/button";

export const ButtonStyled = styled(AntButton)`
    &.ant-btn {
        background: ${buttonTheme["primary-bg"]};
    }
`;
