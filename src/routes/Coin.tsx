//  Individual Coin Page
import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
    coinId: string;
}

function Coin() {
    const { coinId } = useParams<RouteParams>();  //  URL의 파라미터들을 가져오기
    return <h1>Coin : {coinId}</h1>
}

export default Coin;