import styled from "styled-components";

// p tag
const Paragraph = styled.p`
    color:#00f;

    strong {
        font-size: 2em;
    }
`;

// 컴포넌트
const BigParagraph = styled(Paragraph)`
    font-size: 2em;

    strong {
        color: red;
    }
`;

function HelloWorld({ className }: React.HTMLAttributes<HTMLElement>){
    return(
        <BigParagraph className={className}>
            Hello, world
            <strong>!</strong>
        </BigParagraph>
    );
};

const SmallHelloWorld = styled(HelloWorld)`
    font-size: 0.1em;
`;

export default function Greeting(){
    return(
        <div>
            <Paragraph>
                Hello, world
                <strong>!</strong>
            </Paragraph>

            <BigParagraph>
                Hello, world
                <strong>!</strong>
            </BigParagraph>

            <SmallHelloWorld />
        </div>
    );
}