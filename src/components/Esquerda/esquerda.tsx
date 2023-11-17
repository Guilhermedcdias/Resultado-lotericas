import Card from "../elements/card";

interface EsquerdaProps {
    children?: React.ReactNode;
}

function Esquerda(props: EsquerdaProps) {
    return (
        <Card width="50%" height="100%">
            {props.children}
        </Card>
    );
}

export default Esquerda;