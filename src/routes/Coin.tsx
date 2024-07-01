//  Individual Coin Page
import React, { useState } from "react";
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
    const { coinId } = useParams<RouteParams>();  //  Coin에서는 coinId를 받아서 파라미터로 사용할거다.
    const {state} = useLocation<RouteState>();  //  react router DOM이 보내주는 location object에 접근하기만 하면 된다.
    //  가져온 state로 타이틀에 coin의 name을 직접 뿌려줄 수 있다.
    //  하지만, 다이렉트로 Coin 페이지로 접속하면 에러가 발생! state가 생성되려면 Home 화면을 먼저 열어야 하고, 내가 클릭할 때 state가 만들어지기 때문이다.
    console.log(state.name);
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