// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(` acc: ${acc}  and currVal: ${currVal}`)
//     return acc + currVal },0);

// console.log(myTotal)

const shopingCart = [
    {
        itemName:"js course",
        price:2999,
    },
    {
        itemName:"mob dev course",
        price:5999,
    },
    {
        itemName:"data science course",
        price:12999,
    },
    
]

const priceToPay = shopingCart.reduce((acc,item) => acc+item.price,0)

console.log(priceToPay);