import React from 'react';
import "../App.css"
import styled from '@emotion/styled';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import PokeList from './PokeList';
import PokeInfo from './PokeInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from "@fortawesome/free-solid-svg-icons"

const Header=styled.div`
  display:flex;
  justify-content: space-around;
  align-items:center;
  margin-left:75px;

`;

const Title=styled.h1`
    font-size: 80px;
    font-family: serif;
    color:#580D0D;
    text-align:center;
`;

const Image=styled.img`
  width:10%;
  background-color:#B90707;

`
const LinkHome=styled(Link)`
  font-size:35px;
  color:#FFE033;
  &:hover {
    opacity:0.5
  }
`
const Layout=styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;

`

function App() {
  return (
    <BrowserRouter>
      <Header>
      
        <LinkHome to="/"><FontAwesomeIcon icon={faHome}/></LinkHome>
        <Title>POKEDEX</Title>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png' alt=''/>
      </Header>
      <Layout>
      
      <Routes>

        <Route path="/" element={<PokeList/>}/>
        <Route  path="/PokeInfo/:name" element={<PokeInfo/>}/>

      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
