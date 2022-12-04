import { useState } from "react";
import styled from '@emotion/styled';
import getPoke from "../poke";
import { Link} from "react-router-dom";


const LinkPokes=styled(Link)`
  font-size: 20px;
  text-decoration:none;
  color:#FFCE33;
  text-align:center;

`

const Footer=styled.div`
    display:flex;
    justify-content:center;
    margin-top:30px

`;

const Nav=styled.nav`
    width:70%

`;

const Ul=styled.ul`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`
const Main=styled.div`
    flex-wrap:wrap;
    margin-bottom:20px;
    margin-top:30px
`
const Row=styled.div`
    display:flex;
    justify-content:center;

`
const Col=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:80px;
    width:150px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    background-image:linear-gradient(rgba(5,7,12,0.7),rgba(5,7,12,0.7)), url("./poke-default.png");
    object-fit: cover;
    background-repeat: no-repeat;
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 50px;
    margin-right:40px;
    
    &:hover {
        transform:scale(1.2)
    }

`

const Li=styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:3px;
    width:40px;
    height:40px;
    background-color:#880F0F;
    color:white;
    border:2px solid black;
    border-radius: 8px;
    text-align:center;
    &:hover {
        background-color:black;
    }

`
const Pokedex=() => {
    const [saveData,setSaveData]=useState([]);

    const setPokes=async(offset)=> {
        setSaveData([]);
        const pokesData= await getPoke(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`);
        setSaveData(pokesData.results.map((poke)=>poke.name))
        
    }
    return {saveData,setPokes}
}



const PokeList=() => {
    const {saveData,setPokes}=Pokedex();

    const pages=[];
    for(let i=0;i<58;i++) {
        const offset=(i*20);
        pages.push(<Li key={i} onClick={()=>setPokes(offset)}>{i+1}</Li>)
        
    }



    return (
     <>
        <Main>
            <Row>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>0 && saveData[0]}`}>{saveData.length>0 && saveData[0]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>1 && saveData[1]}`}>{saveData.length>1 && saveData[1]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>2 && saveData[2]}`}>{saveData.length>2 && saveData[2]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>3 && saveData[3]}`}>{saveData.length>3 && saveData[3]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>4 && saveData[4]}`}>{saveData.length>4 && saveData[4]}</LinkPokes></Col>
            </Row>
            <Row>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>5 && saveData[5]}`}>{saveData.length>5 && saveData[5]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>6 && saveData[6]}`}>{saveData.length>6 && saveData[6]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>7 && saveData[7]}`}>{saveData.length>7 && saveData[7]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>8 && saveData[8]}`}>{saveData.length>8 && saveData[8]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>9 && saveData[9]}`}>{saveData.length>9 && saveData[9]}</LinkPokes></Col>
            </Row>
            <Row>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>10 && saveData[10]}`}>{saveData.length>10 && saveData[10]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>11 && saveData[11]}`}>{saveData.length>11 && saveData[11]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>12 && saveData[12]}`}>{saveData.length>12 && saveData[12]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>13 && saveData[13]}`}>{saveData.length>13 && saveData[13]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>14 && saveData[14]}`}>{saveData.length>14 && saveData[14]}</LinkPokes></Col>
            </Row>
            <Row>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>15 && saveData[15]}`}>{saveData.length>15 && saveData[15]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>16 && saveData[16]}`}>{saveData.length>16 && saveData[16]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>17 && saveData[17]}`}>{saveData.length>17 && saveData[17]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>18 && saveData[18]}`}>{saveData.length>18 && saveData[18]}</LinkPokes></Col>
                <Col><LinkPokes to={`/PokeInfo/${saveData.length>19 && saveData[19]}`}>{saveData.length>19 && saveData[19]}</LinkPokes></Col>
            </Row>

        </Main>
        
        <Footer>
            <Nav>
                <Ul>
                    {pages}
                </Ul>
            </Nav>
        </Footer>

     </>
    )
}

export default PokeList;


//yo digo armar todo en pokeinfo, y traer solo una funcion que reciba un parametro url, entonces al onclick le paso esa funcion con el url correspondiente.