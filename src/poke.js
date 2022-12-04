const getPoke=async(URL) => {
    const response=await fetch(URL);
    

    if(!response) {
        throw new Error('API Error')
    }

    return response.json();


}

export default getPoke;
