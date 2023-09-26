async function handleAPI() {

    try{
        const data = await  fetch("https://api.github.com/users/Sarvesh20")
    console.log(data);
    const result = await data.json();
    console.log(result);
    }
    catch(err){
        console.log(err);
    }
    
  }
  
  handleAPI();