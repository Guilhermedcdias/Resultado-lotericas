import styled from "styled-components";
import { useEffect, useState } from 'react'


// Definindo o tipo para as props
type NumberGridProps = {
    numbers: string[];
};

// Estilização do componente
const NumberGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const NumberGridLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #4c556c;
    width: 100%;
`;

const NumberGridItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #930089;
    font-weight: bold;
    font-family: 'Roboto', 'sans-serif';
    font-size: 1.5rem;
    margin: 1rem;
`;

// The NumberGrid component that takes an array of numbers
const NumberGrid: React.FC<NumberGridProps> = ({ numbers }) => {
    const [numbersPrint, setNumbersPrint] = useState<string[][]>([]);

    const numbersCorrect = (numbers: string[]): string[][] => {
        let linha: string[] = [];
        let linhas: string[][] = [];

        // Percorre os números
        numbers.forEach((number, index) => {
            linha.push(number);

            // A cada múltiplo de 5 (e não na posição zero), adiciona a linha às linhas e reseta a linha
            if ((index + 1) % 5 === 0) {
                linhas.push(linha);
                linha = [];
            }
        });

        // Caso ainda existam elementos na última linha após o loop, adicioná-los às linhas
        if (linha.length > 0) {
            linhas.push(linha);
        }

        setNumbersPrint(linhas);
        return linhas;
    };

    useEffect(() => {
        numbersCorrect(numbers);
    }, [numbers])

    return (
        <NumberGridContainer>
            {numbersPrint.map((linha, index) => (
                <NumberGridLine key={index}>
                    {linha.map((number, index) => (
                        <NumberGridItem key={index}>{number}</NumberGridItem>
                    ))}
                </NumberGridLine>
            ))}
        </NumberGridContainer>
    );

};

export default NumberGrid;
