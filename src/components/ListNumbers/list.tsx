import React, { useContext } from 'react';
import styled from 'styled-components';
import { IData } from '../../types/Data';
import { DeleteById } from '../../services/BackendService';
import { DataContext } from '../../contexts/DataContext';
import useData from '../../hooks/useData';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const Div = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    `;


const H1 = styled.h1`
    font-size: 2rem;
    color: #000;
    width: 100%;
    text-align: right;
    `;




const NumberColumn = ({ numbers, sum }: IData) => {
    const { setReload } = useData();
    const deleteNumber = async (index: number) => {
        await DeleteById(String(index));
        setReload(true);
    }

    return (
        <Column>
            {numbers.map((number, index) => (
                <Div key={index} onClick={(e) => { deleteNumber(number.id) }}><H1>
                    {number.value}
                </H1>
                </Div>
            ))}

            <H1>Total: {sum}</H1>
        </Column>
    );
};

export default NumberColumn;
