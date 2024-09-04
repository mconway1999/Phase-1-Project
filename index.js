alert('welcome to my project')

const restaurantMenuElement = document.getElementById('restaurant')

function addBurgerImageToMenu(food){
    const imgElement = document.createElement ('img')
    imgElement.src = burger.image
    restaurantMenuElement.appendChild(imgElement)

}
fetch("http://localhost:3000/")
    .then (response => response.json())
    .then(food => {
        console.log(food)
        food.forEach(addBurgerImageToMenu)
    })
   
    