import useLottery from "../../hooks/useLotery";
import Loading from "../Carregando/loading";
import Navbar from "../Menu/navbar";
import Card from "../elements/card";
import HrComponent from "../elements/hr";
import React, { useEffect, useState } from "react";
import Navbarlk from "../elements/navbarLink";

interface IProps {
    children?: React.ReactNode;
}

function Principal(props: IProps) {


    const [pathActive, setPathActive] = useState<string>('/');
    const links = [
        {
            href: "/timemania",
            name: "TimeMania",
            cor: "#00ff48"
        },
        {
            href: "/megasena",
            name: "MegaSena",
            cor: "#209869"
        },
        {
            href: "/quina",
            name: "Quina",
            cor: "#260085"
        }
    ]

    // função que verifica o path name toda vez que a pagina é carregada ou a rota muda
    useEffect(() => {
        const path = window.location.pathname
        setPathActive(path)
    }, [window.location.pathname])
    const { loading } = useLottery();



    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <>
            <Navbar>
                {links.map((link, index) => {
                    return (
                        <Navbarlk color={link.cor} fsize={'1.5rem'} href={link.href} name={link.name} active={(link.href == pathActive) ? true : false} key={index} />
                    )
                })}
            </Navbar>
            <Card height="100vh" width="100%">
                {props.children}
                <HrComponent width="100%" height=".5px" color="#ddd" mt="0rem" mb="1rem" radios="4rem" />
            </Card>
        </>
    );
}

export default Principal;