let food = document.querySelector(".food");
console.log("Pranav");

let indian = document.querySelector("#in");
let canadian = document.querySelector("#can");
let american = document.querySelector("#am");
let thai = document.querySelector("#th");
let british = document.querySelector("#br");
let russian = document.querySelector("#rs");

let images = document.querySelectorAll("img");

// Add hover effect to each image
// images.forEach((img) => {
//     img.addEventListener("mouseover", () => {
//         img.style.transform = 'scale(1.1) translate(5px, -5px)';
//     });
//     img.addEventListener("mouseout", () => {
//         img.style.transform = 'scale(1) translate(0, 0)';
//     });
// });

// Function to display data
let showData = (receipe) => {
    food.innerHTML = receipe.map((meal) =>
        `<div>
            <div>
                <img src="${meal.strMealThumb}" style="width:220px; border:1px solid yellow;" />
                
                <h4 style="margin:10px; text-align:center; display:flex; word-wrap: break-word; overflow-wrap: break-word;">${meal.strMeal}</h4>
                
            </div>
        </div>`
    ).join(''); // Join the array elements to form a single string

    // Re-add hover effect to newly added images
    let newImages = document.querySelectorAll("img");
    newImages.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform = 'scale(1.1) translate(5px, -5px)';
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = 'scale(1) translate(0, 0)';
        });
    });
}

// Function to fetch data from meal db API
const fetchData = async (area) => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await api.json();
    // console.log("My api res", data);

    let receipe = data.meals;
    // console.log(data.meals);
    showData(receipe);  // Call showData function with the fetched data

};

// Function to search for a recipe
const searchReceipe = async () => {
    let input = document.querySelector("#search");
    input.addEventListener('keydown', async (event) => {
        if (event.key === "Enter") {
            let inputValue = input.value;
            // console.log(inputValue);
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue}`);
            const data = await api.json();
            // console.log("My api res", data);

            let receipe = data.meals;
            // console.log(data.meals);
            showData(receipe);  // Call showData function with the fetched data
        }
    })
}
searchReceipe();

// Add event listeners to buttons for fetching data
indian.addEventListener("click", () => {
    console.log("button clicked");
    fetchData("Indian");
});
russian.addEventListener("click", () => {
    console.log("button clicked");
    fetchData("Russian");
});
canadian.addEventListener("click", () => {
    console.log("button clicked");
    fetchData("Canadian");
});
british.addEventListener("click", () => {
    console.log("button clicked");
    fetchData("British");
});
american.addEventListener("click", () => {
    console.log("button clicked");
    fetchData("American");
});
thai.addEventListener("click", () => {
    console.log("button clicked");
    fetchData("Thai");
});

//  www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
