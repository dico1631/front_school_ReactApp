import styled, { css } from 'styled-components';

type ButtonProps = {
    type?: 'button' | 'subnit' | 'reset'
    active?: boolean,
};

const Button = styled.button.attrs<ButtonProps>((props) => ({ type: props.type ? props.type : 'button' }))<ButtonProps>`
    width: 50px;
    height: 30px;
    background-color: ${(props) => (props.active ? '#FFF' : 'blue')};
    color: ${(props) => (props.active ? '#000' : '#fff')};
    border: 1px solid #888;

    ${(props) => props.active && css`
        background-color: red;
        color: #fff;
    `}
`;

export default Button;
