const body = document.querySelector('body');
console.log(body)

const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
       console.log(e.target.id)
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
       
    })
})