console.log('Hello, world!');

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
    // loop for each data
    for (let video of videos) {
        // create element
        const videoDiv = document.createElement('div');
        // set innerHtml
        videoDiv.innerHTML = `

            <div class="card bg-base-100">
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

// loadVideo();