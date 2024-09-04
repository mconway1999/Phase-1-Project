alert('welcome to my project')
fetch("http://localhost:3000/")
    .then (response => response.json())
    .then(burgers => {
        console.log(burgers)
    })
    console.log("after the fetch...")