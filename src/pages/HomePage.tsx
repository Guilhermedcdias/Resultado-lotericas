import Loading from "../components/Carregando/loading";
import Container from "../components/Container/container";
import Input from "../components/InputWithEnterSubmit/input";
import NumberColumn from "../components/ListNumbers/list";
import FundoInput from "../components/elements/fundoInput";
import usedata from "../hooks/useData";
import { useState } from "react";
import { CreateNumber } from "../services/BackendService";


function HomePage() {
    const { data, loading, setReload } = usedata();
    const [valor, setValor] = useState<string>("");
    const adicionaValor = async () => {
        // verificando se é mesmo um numero
        if (isNaN(Number(valor))) {
            alert("Valor inválido");
            setValor("");
            return;
        }
        await CreateNumber(valor);
        setValor("");
        setReload(true);
    }

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <Container>
            <FundoInput>
                <Input placeholder="Entre com um valor" onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        adicionaValor();
                    }
                }} value={valor} onChange={(e) => setValor(e.target.value)}></Input>
            </FundoInput>
            <NumberColumn numbers={data.numbers} sum={data.sum} />
        </Container>
    );
}

export default HomePage;