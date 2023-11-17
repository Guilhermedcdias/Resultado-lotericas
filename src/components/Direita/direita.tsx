import Card from "../elements/card";

interface DireitaProps {
    children?: React.ReactNode;
}

function Direita(props: DireitaProps) {
    return (
        <Card width="50%" height="100%">
            {props.children}
        </Card>
    );
}

export default Direita;