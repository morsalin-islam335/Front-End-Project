const loadData = (global) => { // onclick. that will be work after search something
    let searchData = document.getElementById("search-input").value; // get search data
    
    searchData = searchData[0]
    

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchData ? searchData: global}`) // fetch with api
    .then(res => res.json()) // send request
    .then(data => displayData(data.meals)); // get response and call displayData function to display them


};


// alert("refresh this  page?")

const displayData = (data) => { // that will be display data
   
    if(document.getElementById('search-input').value == "")
    {
        document.getElementById("total-meals").innerText = 350;
    }
    else{
        document.getElementById("total-meals").innerText = data.length; // data is a array. so we can simply return array size as total search result
    }

  


    const mealsContainer = document.getElementById("meals-container"); //access meals-container div to append data by html
    mealsContainer.innerHTML = ""
    data.forEach((meal)=>{

        // console.log(meal)
        const card = document.createElement("div"); // crate a card in each iteration to append it meals-container div

        card.classList.add("box"); // add class to card div name as box to access it in css file for set border and width and height
        // console.log(meal.idMeal)
        
        card.innerHTML = ` <!-- Set html-->
        <img class ="api-image" src=${meal.strMealThumb} alt="Image">
        <h2>${meal.strMeal}</h2>
        <p class = "font-weight: bold">${meal.strInstructions.slice(0,70)}</p>
        <!--  Modals -->
        <!-- Button trigger modal -->
        <button
         
        onclick = "displayModal('${meal.idMeal}')"
        type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Details
        </button>
        
        `
        mealsContainer.appendChild(card) // append child div to parent div

    });

    

};

const displayModal = async (id)=>{ // call from button (Details)
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`); // now it access each product by id
        const details = await(response.json()); // convert json file
        console.log("details start from hare", details) // access data
        document.getElementById("Product").innerText = details.meals[0].strMeal //  items name
        document.getElementById("Description").innerText = details.meals[0].strInstructions.slice(0,400);

        const div = document.createElement("span");

        div.innerHTML = `<img class ='modal-image' src='${details.meals[0].strMealThumb}' alt="This is an image part">`;

        document.getElementById("image-part").innerHTML = ""
        document.getElementById("image-part").appendChild(div);
    

      
    }
    catch{
        (err) =>{ console.log(err)} // print error message if an error will have been happend


    }

}

// const globalCall = (parameter) => {
//     loadData("a")
//     loadData("b")
//     loadData("c")
//     loadData("d")
//     loadData("e")
//     loadData("f")
//     loadData("g")
//     loadData("h")
//     loadData("i")
//     loadData("j")
//     loadData("k")
//     loadData("l")
//     loadData("m")
//     loadData("n")
//     loadData("o")
//     loadData("p")
//     loadData("q")
//     loadData("r")
//     loadData("s")
//     loadData("t")
//     loadData("w")
//     loadData("x")
//     loadData("y")
//     loadData("z")

// }




loadData('c')


// const test = () => {
//     try{
//         fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
//         console.log("welcome")

//         .then(response => console.log(response));
//     }

//     catch{
//         console.log("hello world")
//     }

// }
