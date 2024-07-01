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

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD : {
            ath_date:string; 
            ath_price:number;
            market_cap:number;
            market_cap_change_24h:number;
            percent_change_1h:number;
            percent_change_1y:number; 
            percent_change_6h:number; 
            percent_change_7d:number; 
            percent_change_12h:number; 
            percent_change_15m:number; 
            percent_change_24h:number; 
            percent_change_30d:number; 
            percent_change_30m:number; 
            percent_from_price_ath:number; 
            price: number; 
            volume_24h:number; 
            volume_24h_change_24h:number; 
        }
    };
}

function Coin() {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    const [info, setInfo] = useState<InfoData | null>(null);
    const [priceInfo, setPriceInfo] = useState<PriceData | null>(null);
  
    const getCoins = async () => {
      try {
        const infoResponse = await axios.get<InfoData>(
          `https://api.coinpaprika.com/v1/coins/${coinId}`
        );
        const priceResponse = await axios.get<PriceData>(
          `https://api.coinpaprika.com/v1/tickers/${coinId}`
        );
        setInfo(infoResponse.data);
        setPriceInfo(priceResponse.data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getCoins();
    }, [coinId]);
    return (
      <Container>
        <Header>
          <Title>{state?.name || info?.name || "Loading..."}</Title>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            {/* 코인 정보와 가격 정보를 표시하는 컴포넌트를 추가하세요 */}
          </>
        )}
      </Container>
    );
  }

export default Coin;