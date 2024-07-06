const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((response) => 
        response.json()
    );
}

//  coinInfo를 fetch하는 함수
export function fetchCoinInfo(coinId:string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => 
        response.json()
    );
}

//  coinTickers를 fetch하는 함수
export function fetchCoinTickers(coinId:string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => 
        response.json()
    );
}