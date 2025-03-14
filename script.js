// console.log('Hello, world!');

//function for load category-btn-container
function loadCategoryBtnContainer() {
    // fetch data from api
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        // convirt data to json()
        .then(res => res.json())
        // send data to enother function to display
        .then((data) => displayCategoryBtn(data.categories))
        
}

//function for display category-btn-container
function displayCategoryBtn(categories) { 
    // get the container to display category
    const categoryContainer = document.getElementById('category-btn-container');
    // loop for each data
    for (let cat of categories) {
        // create element
        const categoryDiv = document.createElement('div');
        // set innerText
        categoryDiv.innerHTML = `
            <button class="btn btn-active hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        // append to parent
        categoryContainer.appendChild(categoryDiv);
    }
}




loadCategoryBtnContainer();
// const loadBtn = document.getElementById('category-btn-container');