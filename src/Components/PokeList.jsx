import { useState } from "react";
import styled from '@emotion/styled';
import getPoke from "../poke";
import { NavLink, useParams } from "react-router-dom";


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
        setSaveData([]);
        const pokesData= await getPoke(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`);//es como que con esto espero con await para seguir//
        ///console.log(pokesData);
        const objectEntries=pokesData.results.map((el)=>
            Object.entries(el)
        
        )
        
        setSaveData(objectEntries.map((object)=>
            [object[0][1],object[1][1]]
        
        ))
       
    }
    
    return {saveData,setPokes,/*PokeInfo*/}
}




const PokeList=() => {
    //const URL=useParams();
    //console.log(URL)
    const {saveData,setPokes,/*PokeInfo*/}=Pokedex();

    const pages=[];
    for(let i=0;i<58;i++) {
        const offset=(i*20);
        pages.push(<Li key={i} onClick={()=>setPokes(offset)}>{i+1}</Li>)
        
    }

    /*const objectEntries=saveData.map((el)=> 
        Object.entries(el)
    )*/
    //if(saveData[0]!==undefined) {

    //}
        //const objectEntries=Object.entries(saveData[0]);
        //console.log(objectEntries); 
//lo que pasa es que saveData[0], si yo no hago click, es undefined, por eso cuando busco saveData[0][0] me dice que no puede buscar [0] de algo undefined. Pero por que no anda cuando recargo la pag y antes si? porque antes de recargar ya tiene datos el saveData[0], y cuando recargo es undefined el saveData[0], porque no clickee aun.*/

//


/* el saveData.length va en aumento porque en la pagina 58 me tira error ya que no se completan los 19, entonces no existe saveData[19], por eso pongo que lea el saveData[19] solo si el array saveData[19] tiene una longitud mayor a 19, porque caso contrario no tiene nada para leer, y asi con todos.*/ 
//{saveData.length>0 && saveData[0][0]}
//<NavLink to={`/PokeInfo/${saveData.length>0 && saveData[0][1]}`}>Hola</NavLink>
//<NavLink to={`/PokeInfo/${saveData.length>0 && saveData[0][1]}`}>

//el link del navlink no me toma el url, es decir, mandar el url al pokeinfo, pero no es necesario, le puedo mandar el id del poke, y que pokeinfo haga el fetch con ese id. Para eso tengo que modificar lo del object values que me traia nombre y link, para que ahora me traiga nombre e id.
//console.log(saveData.length>0 && saveData[0][1])
    return (
        <>
        
        <Main>
            <Row>
                <Col><NavLink to={`/PokeInfo/${saveData.length>0 && saveData[0][0]}`}>{saveData.length>0 && saveData[0][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>1 && saveData[1][0]}`}>{saveData.length>1 && saveData[1][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>2 && saveData[2][0]}`}>{saveData.length>2 && saveData[2][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>3 && saveData[3][0]}`}>{saveData.length>3 && saveData[3][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>4 && saveData[4][0]}`}>{saveData.length>4 && saveData[4][0]}</NavLink></Col>
            </Row>
            <Row>
                <Col><NavLink to={`/PokeInfo/${saveData.length>5 && saveData[5][0]}`}>{saveData.length>5 && saveData[5][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>6 && saveData[6][0]}`}>{saveData.length>6 && saveData[6][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>7 && saveData[7][0]}`}>{saveData.length>7 && saveData[7][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>8 && saveData[8][0]}`}>{saveData.length>8 && saveData[8][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>9 && saveData[9][0]}`}>{saveData.length>9 && saveData[9][0]}</NavLink></Col>
            </Row>
            <Row>
                <Col><NavLink to={`/PokeInfo/${saveData.length>10 && saveData[10][0]}`}>{saveData.length>10 && saveData[10][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>11 && saveData[11][0]}`}>{saveData.length>11 && saveData[11][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>12 && saveData[12][0]}`}>{saveData.length>12 && saveData[12][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>13 && saveData[13][0]}`}>{saveData.length>13 && saveData[13][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>14 && saveData[14][0]}`}>{saveData.length>14 && saveData[14][0]}</NavLink></Col>
            </Row>
            <Row>
                <Col><NavLink to={`/PokeInfo/${saveData.length>15 && saveData[15][0]}`}>{saveData.length>15 && saveData[15][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>16 && saveData[16][0]}`}>{saveData.length>16 && saveData[16][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>17 && saveData[17][0]}`}>{saveData.length>17 && saveData[17][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>18 && saveData[18][0]}`}>{saveData.length>18 && saveData[18][0]}</NavLink></Col>
                <Col><NavLink to={`/PokeInfo/${saveData.length>19 && saveData[19][0]}`}>{saveData.length>19 && saveData[19][0]}</NavLink></Col>
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


//yo digo armar todo en pokeinfo, y traer solo una funcion que reciba un parametro url, entonces al onclick le paso esa funcion con el url correspondiente.