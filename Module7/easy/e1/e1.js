let button = document.getElementById('fetchButton').addEventListener('click', async ()=>{
    

    let url = "https://jsonplaceholder.typicode.com/todos/1"
    let fouteUrl = "https://jsonplacehode.com/todos/15436435690385"
    let data;
    let divResult = document.getElementById('result')
    divResult.innerHTML = "";

    try{
       data = await fetch(url) 

       if(data.ok){
        divResult.textContent = data.type
       }else{
        throw new Error(`Fetch fout: ${data.status} `)
       }
       

    }catch (error){
     
        divResult.textContent = error.message
        
        
        
    }
    

})