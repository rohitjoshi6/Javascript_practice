const fetchURL = async function(){
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await response.json();
    console.log(data);
}

fetchURL();