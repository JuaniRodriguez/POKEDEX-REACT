import { useState } from "react";
import styled from '@emotion/styled';
import getPoke from "../poke";


const Footer=styled.div`
    display:flex;
    justify-content:center;
    margin-top:50px

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
    margin-bottom:50px;
    margin-top:50px
`
const Row=styled.div`
    display:flex;
    justify-content:center;

`
const Col=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:60px;
    width:100px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 20px;
    background-color: rgb(157, 18, 18);
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 50px;
    margin-right: 70px;

`

const Li=styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:3px;
    width:40px;
    height:40px;
    border:2px solid black;
    text-align:center;

`
//una funcion que al hacer click en cualquiera de las 58 paginas, haga el fetch de los 20 poke.
const Pokedex=() => {
    const [saveData,setSaveData]=useState([]);

    //const PokeInfo=async (link)=> {
    //    const results=await getPoke(link);
    //    //return results;
    //    console.log(results)
    //}

    //const setPokes=(offset) => {
    //    PokeInfo(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
    //   // setSaveData(data);
    //}


    const setPokes=async(offset)=> {
        const pokeData= await getPoke(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`);//es como que con esto espero con await para seguir//
        const objectArray=pokeData.results.map((el)=>
            Object.entries(el)
        
        )
        
        setSaveData(objectArray.map((object)=>
            [object[0][1],object[1][1]]
        
        ))

        //console.log(saveData)
    }
    
    

    return {saveData,setPokes,/*PokeInfo*/}
}




const PokeList=() => {
    const {saveData,setPokes,/*PokeInfo*/}=Pokedex();

    const pages=[];
    for(let i=0;i<58;i++) {
        const offset=({i}*20);
        pages.push(<Li key={i} onClick={()=>setPokes(offset)}>{i+1}</Li>)
    }

    /*const objectArray=saveData.map((el)=> 
        Object.entries(el)
    )*/
    //if(saveData[0]!==undefined) {
    //}
        //const objectArray=Object.entries(saveData[0]);
        //console.log(objectArray); 
//lo que pasa es que saveData[0], si yo no hago click, es undefined, por eso cuando busco saveData[0][0] me dice que no puede buscar [0] de algo undefined. Pero por que no anda cuando recargo la pag y antes si? porque antes de recargar ya tiene datos el saveData[0], y cuando recargo es undefined el saveData[0], porque no clickee aun.
    return (
        <>
        
        <Main>
            <Row>
                <Col /*onClick={}*/>{/*saveData[0]!==undefined*/ saveData.length>0 && saveData[0][0]}</Col>
                <Col /*onClick={}*/>{/*saveData[1]!==undefined*/ saveData.length>0 && saveData[1][0]}</Col>
                <Col /*onClick={}*/>{/*saveData[2]!==undefined*/ saveData.length>0 && saveData[2][0]}</Col>
                <Col /*onClick={}*/>{/*saveData[3]!==undefined*/ saveData.length>0 && saveData[3][0]}</Col>
                <Col /*onClick={}*/>{/*saveData[4]!==undefined*/ saveData.length>0 && saveData[4][0]}</Col>
            </Row>
            <Row>
                <Col>{/*saveData[5]!==undefined */ saveData.length>0 && saveData[5][0]}</Col>
                <Col>{/*saveData[6]!==undefined */ saveData.length>0 && saveData[6][0]}</Col>
                <Col>{/*saveData[7]!==undefined */ saveData.length>0 && saveData[7][0]}</Col>
                <Col>{/*saveData[8]!==undefined */ saveData.length>0 && saveData[8][0]}</Col>
                <Col>{/*saveData[9]!==undefined */ saveData.length>0 && saveData[9][0]}</Col>
            </Row>
            <Row>
                <Col>{/*saveData[10]!==undefined */ saveData.length>0 && saveData[10][0]}</Col>
                <Col>{/*saveData[11]!==undefined */ saveData.length>0 && saveData[11][0]}</Col>
                <Col>{/*saveData[12]!==undefined */ saveData.length>0 && saveData[12][0]}</Col>
                <Col>{/*saveData[13]!==undefined */ saveData.length>0 && saveData[13][0]}</Col>
                <Col>{/*saveData[14]!==undefined */ saveData.length>0 && saveData[14][0]}</Col>
            </Row>
            <Row>
                <Col>{/*saveData[15]!==undefined */ saveData.length>0 && saveData[15][0]}</Col>
                <Col>{/*saveData[16]!==undefined */ saveData.length>0 && saveData[16][0]}</Col>
                <Col>{/*saveData[17]!==undefined */ saveData.length>0 && saveData[17][0]}</Col>
                <Col>{/*saveData[18]!==undefined */ saveData.length>0 && saveData[18][0]}</Col>
                <Col>{/*saveData[19]!==undefined */ saveData.length>0 && saveData[19][0]}</Col>
            </Row>
            <h1>hacer clickk</h1>

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