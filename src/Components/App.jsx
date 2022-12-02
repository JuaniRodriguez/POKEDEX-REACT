import React from 'react';
import "../App.css"
import styled from '@emotion/styled';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import PokeList from './PokeList';
import PokeInfo from './PokeInfo';


const Header=styled.div`
  display:flex;
  justify-content: space-around;
  align-items:center;

`;

const Title=styled.h1`
    font-size: 80px;
    font-family: 'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;
    color:rgb(223,223,12);
`;
const Image=styled.img`
  width:10%;

`
const Link=styled(NavLink)`
  font-size: 20px

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
        <Link to="/">Home</Link>
        <Title>POKEDEX</Title>
        <Image src='/pokedex/public/titulo-poke.png' alt=''/>
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
//Dentro del layout irian las dos paginas, o sea un import de PokeList, y otro de PokeInfo. 
//Al layout deberia ponerle un display flex, porque yo quiero me me arme todo alineado al centro
//<Route path="" element={<PokeInfo/>}></Route>

/*<Routes>

        <Route path="" element={<PokeList/>}/>
       

      </Routes>*/