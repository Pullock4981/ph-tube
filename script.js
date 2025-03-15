
// console.log('Hello, world!');

// function for load video
function loadVideo() {
    // fetch data from api
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        // convirt data to json()
        .then(res => res.json())
        // send data to enother function to display
        .then((data) => displayVideo(data.videos))

}


function displayVideo(videos) {
    // get the container to display category
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    // loop for each data
    for (let video of videos) {
        // create element
        const videoDiv = document.createElement('div');
        // set innerHtml
        videoDiv.innerHTML = `

            <div class="card bg-base-100 cursor-pointer">
                <figure class="relative">
                  <img
                    class="rounded-lg h-48 w-full object-cover"
                    src="${video.thumbnail}"
                    alt="Shoes" />
                    <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded-sm">time.....</span>
                </figure>
                <div class="flex py-3 gap-2">
                    <div class="profile">
                        <div class="avatar">
                            <div class="w-8 rounded-full">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <h2 class="text-lg font-bold">
                            ${video.title}
                        </h2>
                        <p class="text-sm text-gray-500">
                            ${video.authors[0].profile_name}
                        </p>
                        <p class="text-sm text-gray-500">
                            ${video.others.views} views
                        </p>
                    </div>
                </div>
            </div>

        `;
        // append to parent
        videoContainer.appendChild(videoDiv);
    }

}


// function for display video by category

const displayVideoByCategory = (id) => {

    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayVideo(data.category))
        // .catch(err => console.log(err))displayVideo(data.category)

}


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
            <button onclick="displayVideoByCategory(${cat.category_id})" class="btn btn-active hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        // append to parent
        categoryContainer.appendChild(categoryDiv);
    }
}


loadVideo();




loadCategoryBtnContainer();
// const loadBtn = document.getElementById('category-btn-container');