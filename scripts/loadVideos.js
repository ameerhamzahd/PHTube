function loadVideos(searchValue = '') {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            removeActiveClass();

            document.getElementById('btn-all').classList.add('active');
            displayVideos(data.videos);
        });
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');

    videoContainer.innerHTML = '';

    if(videos.length === 0) {
        showLoader();

        videoContainer.innerHTML = `
        <div class="py-[7.5rem] col-span-full flex flex-col items-center justify-center text-center gap-5">
            <img class="w-auto" src="./resources/Icon.png" alt="Icon">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is <br> no content here</h2>
        </div>
        `

        hideLoader();

        return;
    }

    videos.forEach((vid) => {
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        <div class="w-full card bg-base-100">
            <figure class="relative">
                <img class="card w-full h-[13rem] object-cover hover:cursor-pointer" src="${vid.thumbnail}" alt="thumbnail" />
                <span class="absolute rounded p-1 bottom-2 right-2 text-[0.75rem] text-white bg-black">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-5 p-5">
                <div class="avatar">
                    <div class="ring-neutral ring-offset-base-100 w-12 h-12 rounded-full ring ring-offset-2 object-cover">
                        <img src="${vid.authors[0].profile_picture}" />
                    </div>
                </div>

                <div>
                    <h1 class="text-[1rem] font-bold">${vid.title}</h1>
                    <p class="flex gap-1 text-[0.875rem] text-gray-400 font-semibold">${vid.authors[0].profile_name} ${vid.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="verified">` : ``}</p>
                    <p class="text-[0.875rem] text-gray-400 font-semibold">${vid.others.views} views</p>
                </div>
            </div>

            <button onclick=loadVideoDetails('${vid.video_id}') class="btn btn-block">Show Details</button>
        </div>
        `
        videoContainer.appendChild(videoCard);
    });

    hideLoader();
}

