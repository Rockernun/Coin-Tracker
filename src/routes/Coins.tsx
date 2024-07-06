//  Coin List Page
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";

const Container = styled.div`  
    padding: 0px 20px;
    max-width:480px;
    margin: 0 auto;
`;

const Header = styled.div`
    height:15vh;
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
        display:flex;
        align-items:center;
        transition:color 0.2s ease-in; 
        padding: 20px;
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

const Loader = styled.span`
    text-align: center;
    display:block;
`;

const Img = styled.img`
    width:35px;
    height:35px;
    margin-right:10px;
`;

//  코인 인터페이스
interface ICoin {
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
    const { isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? (<Loader>Loading...</Loader>) : (
                <CoinsList>
                {data?.slice(0, 100).map((coin) => (<Coin key={coin.id}>
                    <Link to={{
                        pathname: `/${coin.id}`,
                        state: { name: coin.name }, 
                    }}>
                        <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`} />
                    {coin.symbol} &rarr;
                    </Link>
                </Coin>
            ))}
            </CoinsList>
            )}
        </Container>
    );
}

export default Coins;