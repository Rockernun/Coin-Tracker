//  Coin List Page
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`  
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
`;

const Header = styled.div`
    b
    height:10vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const CoinsList = styled.ul`

`;

const Coin = styled.li`
    background-color:white;
    color:${props => props.theme.bgColor};
    margin-bottom:10px;
    border-radius:15px;
    a {
        transition:color 0.2s ease-in; 
        padding: 20px;
        display:block;  //  박스 자체에 마우스를 올리면 클릭되도록
    }
    &:hover {
        a {
          color:${(props) => props.theme.accentColor}
        }
    }
`;

const Title = styled.h1`
    background:linear-gradient(-45deg, #00f, #0f0, #ff0);
    -webkit-background-clip:text;
    font-size:48px;
    color:var(--bgColor);
    -webkit-text-stroke:3px transparent;
`;

const Loader = styled.span`
    text-align: center;
    display:block;
`;

//  코인 인터페이스
interface CoinInterface {
    "id": string,
    "name": string,
    "symbol": string,
    "rank": number,
    "total_supply": number,
    "max_supply": number,
    "beta_value": number,
    "first_data_at": string,
    "last_updated": string,
    "quotes": {
    "USD": {
        "price": number,
        "volume_24h": number,
        "volume_24h_change_24h": number,
        "market_cap": number,
        "market_cap_change_24h": number,
        "percent_change_15m": number,
        "percent_change_30m": number,
        "percent_change_1h": number,
        "percent_change_6h": number,
        "percent_change_12h": number,
        "percent_change_24h": number,
        "percent_change_7d": number,
        "percent_change_30d": number,
        "percent_change_1y": number,
        "ath_price": number,
        "ath_date": string,
        "percent_from_price_ath": number
        }
    }
}


function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/tickers");
            const json = await response.json();
            setCoins(json.slice(0, 30));
            setLoading(false);
        })();
    }, []);
    console.log(coins);
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? (<Loader>Loading...</Loader>) : (
                <CoinsList>
                {coins.map((coin) => (<Coin key={coin.id}>
                    <Link to={`/${coin.id}`}>{coin.symbol} &rarr;</Link>
                </Coin>
            ))}
            </CoinsList>
            )}
        </Container>
    );
}

export default Coins;