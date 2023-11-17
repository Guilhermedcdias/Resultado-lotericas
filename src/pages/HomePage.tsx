import Loading from "../components/Carregando/loading";
import Principal from "../components/Principal/principal";
import useLottery from "../hooks/useLotery";

function HomePage() {
    const { data, loading } = useLottery();

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <Principal></Principal>
    );
}

export default HomePage;