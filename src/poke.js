const getPoke=async(URL) => {
    const response=await fetch(URL);
    

    if(!response) {
        throw new Error('API Error')
    }

    return response.json();


}

export default getPoke;

/*const espera=async (link)=> {
    const info=await getPoke(link);
    return info;
}*/

