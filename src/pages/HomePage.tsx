import Loading from "../components/Carregando/loading";
import useLottery from "../hooks/useLotery";

function HomePage() {
    const { data, loading } = useLottery();

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <></>
    );
}

export default HomePage;