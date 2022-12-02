import { useParams } from "react-router-dom";
import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import getPoke from "../poke";


const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`
const Card=styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    width: 400px;
    background-color: rgba(11, 202, 245, 0.811);
    border: 1px solid lightgray;
    border-radius: 10px;
    height: 650px;
    box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
    -webkit-box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
    -moz-box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);

`


const Img=styled.img`
    max-width:80%;
    max-height: 80%;
    padding:5% 5% 0% 5%;
    margin-left:15%
`

const Name=styled.h1`
    text-align:center;
    font-size:50px;
    border:2px solid black;
    border-radius:25px;
    margin-left:15px;
    margin-right:15px;
    
`
const Table=styled.table`
   width:100%;
   

   
`

const Tr=styled.tr`
    padding:300px;
    `
    
const Th=styled.th`
    font-size:30px;
    text-align:left;
    padding-left:10px;
    padding-bottom:10px;
`
const Td=styled.td`
    font-size:25px;
`


const PokeInfo=()=> {
    const {name}=useParams();
    //console.log(name);
    const [pokeState,setPokeState]=useState("");

    const getInfo=async(name)=> {
        const pokeInfo=await getPoke(`https://pokeapi.co/api/v2/pokemon/${name}`);
        //return pokeInfo.sprites.other.dream_world.front_default;

        setPokeState({
            /*if (pokeInfo.sprites.other.dream_world.front_default !== null) {

                urlImage:pokeInfo.sprites.other.dream_world.front_default

              } else if (pokeInfo.sprites.front_default !== null) {

                    pokeInfo.sprites.front_default
                    
              } else {
                urlImage='../logo.svg'
            },*/
            urlImage:pokeInfo.sprites.other.dream_world.front_default!==null ? pokeInfo.sprites.other.dream_world.front_default : pokeInfo.sprites.front_default!==null ? pokeInfo.sprites.front_default : '../logo.svg' ,
            height:pokeInfo.height,
            weight:pokeInfo.weight,
            //falta type.


        })
        return pokeState;
    }

    useEffect(function() {
    getInfo(name);


    },[pokeState])

  //  getInfo(name).then(results=>console.log(results));
///"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/250.svg" 
    return (
        <>
        <Container>
            <Card>
                
                    <Img src={pokeState.urlImage} alt=""/>
                    <Name>{name}</Name>    
                
                <Table>

                    <tbody>
                        <Tr>
                            <Th>Height:</Th>
                            <Td>{pokeState.height}mm</Td>
                        </Tr>
                        <Tr>
                            <Th>Weight:</Th>
                            <Td>{(pokeState.weight)/10}kg</Td>
                        </Tr>
                        <Tr>
                            <Th>Type:</Th>
                            <Td></Td>
                        </Tr>

                    </tbody>

                </Table>

            </Card>
        </Container>
        </>
    )

}

export default PokeInfo;