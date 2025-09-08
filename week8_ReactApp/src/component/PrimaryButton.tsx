import styled, { css } from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.primary};
    color: #3d3d3d;

    ${(props) => props.active && css`
        background-color: ${props.theme.colors.primary};
        color: #fff;
    `}
`;

export default PrimaryButton;
