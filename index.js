const groceryList = document.querySelector('#grocery-list')

   const addForm = document.getElementById('add-grocery-items')
    addForm.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log(event)

    const addNewName = document.getElementById("new-name")
    const addNewCategory = document.getElementById("new-category")
    const addNewPrice = document.getElementById('new-price')
    const addNewImage = document.getElementById('new-image')

    const newGrocery = {
        name: addNewName.value,
        category:addNewCategory.value,
        price:addNewPrice.value,
        img:addNewImage.value
    }

    addNewGrocery(newGrocery)
    }) 


function addGroceryImagesToBrowser(item){
    const groceryDiv = document.createElement('div')
    const buttonElement = document.createElement('button')
    const imgElement = document.createElement('img')
    imgElement.src = item.img
    groceryList.appendChild(groceryDiv)
    groceryDiv.appendChild(imgElement)
    groceryDiv.appendChild(buttonElement)
    buttonElement.textContent = "Delete Item"
    
   imgElement.addEventListener("mouseover", (event) => {
      const nameH3 = document.createElement('h3')
      nameH3.textContent = item.name
      const priceH3 = document.createElement('h3')
      priceH3.textContent =item.price
      const categoryH3 = document.createElement('h3')
      categoryH3.textContent = item.category
      
      groceryDiv.append(nameH3,priceH3,categoryH3)
    
    });
    buttonElement.addEventListener('click',()=>{
        groceryDiv.remove()
        console.log('hello')
        })
          
    
        imgElement.addEventListener('mouseleave',(event)=>{
            groceryDiv.innerHTML = "";
            groceryDiv.append(imgElement)
            groceryDiv.append(buttonElement)
        })
}

function displayGroceries(groceries){
    const groceryImage = document.querySelector ('.detail-image')
    groceryImage.src = food.image
}


fetch("http://localhost:3000/groceries")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json)
    json.forEach((item)=>{
        addGroceryImagesToBrowser(item)
    })

  });

  function addNewGrocery (newGrocery){
    fetch('http://localhost:3000/groceries',{
        method:'POST',
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(newGrocery)
    })
    .then (response => response.json())
    .then (groceries => console.log(groceries))
}
 






   



    