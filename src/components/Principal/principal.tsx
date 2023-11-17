import useLottery from "../../hooks/useLotery";
import Loading from "../Carregando/loading";
import Card from "../elements/card";
import HrComponent from "../elements/hr";

interface IProps {
    children?: React.ReactNode;
}

function Principal(props: IProps) {
    const { loading } = useLottery();

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <Card height="100vh" width="100%">
            {props.children}
            <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem" />
        </Card>
    );
}

export default Principal;