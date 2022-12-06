import { useParams } from "react-router-dom";
import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import getPoke from "../poke";

/*height:80vh;
    margin-right:50px;*/
const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:50px;
`
const Card=styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    width: 400px;
    height: 600px;
    margin-top:30px;
    background-color:#701A1A;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
    -webkit-box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
    -moz-box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
`

const Img=styled.img`
    margin-left:auto;
    margin-right:auto;
    align-items:center;
    max-width:400px;
    max-height:400px;
    padding:5% 5% 5% 5%;
    
`

const Name=styled.h1`
    text-align:center;
    font-size:35px;
    background-color:#52070D;
    color:#FFCE33;
    border:2px solid black;
    border-radius:25px;
    margin-left:15px;
    margin-right:15px;
    
`

const Features=styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    
`
const Feature=styled.div`
    display:flex;
    justify-content:space-between;
    margin-left:15px;
    margin-right:15px;
    padding-top:10px;
`

const PokeInfo=()=> {
    const {name}=useParams();
    const [pokeState,setPokeState]=useState("");

    const getInfo=async(name)=> {
        const pokeInfo=await getPoke(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const types=pokeInfo.types.map((el)=> 
            el.type.name + " " 
        )
        setPokeState({
            
            urlImage:pokeInfo.sprites.other.dream_world.front_default!==null ? pokeInfo.sprites.other.dream_world.front_default : pokeInfo.sprites.front_default!==null ? pokeInfo.sprites.front_default : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/600px-Pokebola-pokeball-png-0.png' ,
            height:pokeInfo.height,
            weight:pokeInfo.weight,
            type:[...types]
        })
        return pokeState;
    }

    useEffect(function() {
         getInfo(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pokeState])

    return (
        <>
        <Container>
            <Card>

                <Img src={pokeState.urlImage} alt=""/>
                <Name>{name}</Name>    
                
                <Features>
                    <Feature>
                        <h1>Height</h1>
                        <h1>{pokeState.height}mm</h1>
                    </Feature>
                    <Feature>
                        <h1>Weight</h1>
                        <h1>{(pokeState.weight)/10}kg</h1>
                    </Feature>
                    <Feature>
                        <h1>Type</h1>
                        <h1>{pokeState.type}</h1>
                    </Feature>
                </Features>
            </Card>
        </Container>
        </>
    )

}

export default PokeInfo;