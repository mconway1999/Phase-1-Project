alert('welcome to my project')

function addBurgerImageToMenu(food){
 console.log(food)
}
fetch("http://localhost:3000/")
    .then (response => response.json())
    .then(food => {
        console.log(food)
        food.forEach(addBurgerImageToMenu)
    })
   
    