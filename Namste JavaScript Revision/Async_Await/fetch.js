let url = "https://api.github.com/users/Sarvesh207"

// 
function getData(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

getData();