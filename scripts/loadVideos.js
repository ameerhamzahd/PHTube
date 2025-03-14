function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos));
}

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//       {
//         "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//         "profile_name": "Olivia Mitchell",
//         "verified": ""
//       }
//     ],
//     "others": {
//       "views": "100K",
//       "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//   }

const displayVideos = (videos) => {
    videos.forEach((vid) => {
        const videoContainer = document.getElementById('video-container');

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

                <div cla>
                    <h1 class="text-[1rem] font-bold">${vid.title}</h1>
                    <p class="flex gap-1 text-[0.875rem] text-gray-400 font-semibold">${vid.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="verified"></p>
                    <p class="text-[0.875rem] text-gray-400 font-semibold">${vid.others.views} views</p>
                </div>
            </div>
        </div>
        `
        videoContainer.appendChild(videoCard);
    });
}

loadVideos();

