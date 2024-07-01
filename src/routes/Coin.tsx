//  Individual Coin Page
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
    coinId: string;
}

interface RouteState {  //  state가 어떻게 생겼는지 알려줘야 한다.
    name:string;
}

const Header = styled.div`
    height:15vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Loader = styled.span`
    text-align: center;
    display:block;
`;

const Title = styled.h1`
    font-size:48px;
    color:${(props) => props.theme.accentColor};
`;

const Container = styled.div`  
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
`;

function Coin() {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams<RouteParams>();  
    const {state} = useLocation<RouteState>();  
    const [info, setInfo] = useState({});
    const [priceInfo, setPriceInfo] = useState({});
    const getCoins = async() => {
        const infoData = await axios(`https://api.coinpaprika.com/v1/coins/${coinId}`);
        setInfo(infoData);
        const priceData = await axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
        setPriceInfo(priceData);
    }
    useEffect(() => {
        getCoins();
    }, []);
    return (
      <Container>
        <Header>
          <Title>{state?.name || "Loading..."}</Title>  
        </Header>
        {loading ? (<Loader>Loading...</Loader>) : null}
      </Container>
    );
}

export default Coin;