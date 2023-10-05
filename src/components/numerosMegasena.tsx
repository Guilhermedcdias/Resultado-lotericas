import CirculoComponent from "./elements/circulo";
import Texto from "./elements/text";

interface MegasenaProps{
    numeros: number[];
}


function MegaSenaNumeros (props: MegasenaProps){
    return (
        <div className="megasena">
            {props.numeros.map((numero, index) => {
                return (
                    <CirculoComponent key={index} color="#209869" width="3rem" height="3rem" mt="1rem" mb="1rem" mr="1rem" ml="1rem">
                        <Texto color="#FFFFFF" size="1.5rem">{numero}</Texto>
                    </CirculoComponent>
                );
            })}
        </div>
    );
}

export default MegaSenaNumeros;