const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*

const Container=styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:500px;
    height:500px;
    border:2px solid black;
    margin-left:36.5%;
    background-color:lightblue;

`

const FirstChild=styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-top:50%;
`

*/

/*

    return (
        <>
        <Container>
            <Card>
                
                    <Img src={pokeState.urlImage} alt=""/>
                    <Name>{name}</Name>    
                
                <Table>

                    <tbody>
                        <Tr>
                            <Th>Height</Th>
                            <Td>{pokeState.height}mm</Td>
                        </Tr>
                        <Tr>
                            <Th>Weight</Th>
                            <Td>{(pokeState.weight)/10}kg</Td>
                        </Tr>
                        <Tr>
                            <Th>Type</Th>
                            <Td>{pokeState.type}</Td>
                        </Tr>

                    </tbody>

                </Table>

            </Card>
        </Container>
        </>
    )

}

export default PokeInfo; */

/*



const Table=styled.table`
   width:100%;
   display:flex;
   justify-content:center;
   

   
`

const Tr=styled.tr`
    padding:300px;
    
    `
    
const Th=styled.th`
    font-size:30px;
    text-align:center;
    padding-bottom:10px;
    color:#FFCE33;
`
const Td=styled.td`
    font-size:25px;
    text-align:center;
    color:#FFCE33;
    padding-bottom:10px;

`
*/
