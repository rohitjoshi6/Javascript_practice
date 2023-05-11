const fetchAPI = async function(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(!res.ok){
            throw new Error("Custom Error")
        }
        const data = await res.json()
        console.log(data);
        return "Done with fetchAPI"
    } catch(err){
        console.log(err);
        throw new Error("Custom Error")
    }
}


fetchAPI().then((msg) =>{
    console.log(msg);
}).catch((err) =>{
    console.log(err);
})