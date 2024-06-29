//  Coin List Page
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`  
    padding: 0px 20px;
`;

const Header = styled.div`
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
    font-size:48px;
    color:${(props) => props.theme.accentColor};
`;

const coins = [
    {
        "id": "btc-bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": 1,
        "total_supply": 19718316,
        "max_supply": 21000000,
        "beta_value": 1.0151,
        "first_data_at": "2010-07-17T00:00:00Z",
        "last_updated": "2024-06-29T13:27:36Z",
        "quotes": {
          "USD": {
            "price": 61045.7373319069,
            "volume_24h": 19017290417.844,
            "volume_24h_change_24h": -6.05,
            "market_cap": 1203719139164,
            "market_cap_change_24h": -0.31,
            "percent_change_15m": 0.03,
            "percent_change_30m": 0.02,
            "percent_change_1h": -0.08,
            "percent_change_6h": -0.06,
            "percent_change_12h": 0.22,
            "percent_change_24h": -0.31,
            "percent_change_7d": -5.18,
            "percent_change_30d": -11.02,
            "percent_change_1y": 99.54,
            "ath_price": 73686.9285616529,
            "ath_date": "2024-03-14T07:07:09Z",
            "percent_from_price_ath": -17.16
          }
        }
      },
      {
        "id": "eth-ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": 2,
        "total_supply": 120184719,
        "max_supply": 0,
        "beta_value": 1.10659,
        "first_data_at": "2015-08-07T00:00:00Z",
        "last_updated": "2024-06-29T13:27:36Z",
        "quotes": {
          "USD": {
            "price": 3393.2222475678,
            "volume_24h": 8805945104.18832,
            "volume_24h_change_24h": -5.93,
            "market_cap": 407813462328,
            "market_cap_change_24h": -1.3,
            "percent_change_15m": 0.05,
            "percent_change_30m": 0.01,
            "percent_change_1h": -0.13,
            "percent_change_6h": -0.25,
            "percent_change_12h": -0.01,
            "percent_change_24h": -1.3,
            "percent_change_7d": -3.32,
            "percent_change_30d": -11.26,
            "percent_change_1y": 75.96,
            "ath_price": 4864.11319661424,
            "ath_date": "2021-11-10T16:05:00Z",
            "percent_from_price_ath": -30.24
          }
        }
      },
      {
        "id": "usdt-tether",
        "name": "Tether",
        "symbol": "USDT",
        "rank": 3,
        "total_supply": 119073359964,
        "max_supply": 0,
        "beta_value": 0.0000670156,
        "first_data_at": "2015-02-25T00:00:00Z",
        "last_updated": "2024-06-29T13:27:36Z",
        "quotes": {
          "USD": {
            "price": 0.99966053118818,
            "volume_24h": 34632918538.2309,
            "volume_24h_change_24h": -14.98,
            "market_cap": 112773197093,
            "market_cap_change_24h": -0.1,
            "percent_change_15m": 0,
            "percent_change_30m": 0.01,
            "percent_change_1h": 0,
            "percent_change_6h": 0.01,
            "percent_change_12h": 0.07,
            "percent_change_24h": -0.13,
            "percent_change_7d": -0.04,
            "percent_change_30d": 0.01,
            "percent_change_1y": -0.1,
            "ath_price": 1.21549,
            "ath_date": "2015-02-25T17:04:00Z",
            "percent_from_price_ath": -17.76
          }
        }
    }
]


function Coins() {
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinsList>
                {coins.map((coin) => (<Coin key={coin.id}>
                    <Link to={`/${coin.id}`}>{coin.symbol} &rarr;</Link>
                </Coin>
            ))}
            </CoinsList>
        </Container>
    );
}

export default Coins;