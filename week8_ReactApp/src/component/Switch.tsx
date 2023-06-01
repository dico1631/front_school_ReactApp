import styled, { css } from "styled-components";
import { useBoolean } from "usehooks-ts";

type ButtonProps = {
    type?: 'button' | 'subnit' | 'reset'
    active?: boolean, 
};

function background(props: ButtonProps){
    return props.active ? '#FFF' : 'blue';
};

const Button = styled.button.attrs<ButtonProps>((props) => ({type: props.type ? props.type : 'button',}))<ButtonProps>`
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

const PrimaryButton = styled(Button)`
    background-color: greenyellow;
    color: #3d3d3d;

    ${(props) => props.active && css`
        background-color: red;
        color: #fff;
    `}
`;

export default function Switch(){

    const { value: active, toggle } = useBoolean();

    const handleClick = () => {

    };

    return(
        <div>
            <Button onClick={toggle} active={active}>on/off</Button>
            <Button type="submit" onClick={toggle} active={active}>on/off</Button>
            <PrimaryButton onClick={toggle} active={active}>on/off</PrimaryButton>
        </div>
    );
}