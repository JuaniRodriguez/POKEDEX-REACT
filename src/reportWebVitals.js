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