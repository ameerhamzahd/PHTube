const loadVideoDetails = (vidId) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${vidId}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayVideoDetails(data.video))
}

const displayVideoDetails = (vidDetails) => {
    document.getElementById('video_details').showModal();

    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
    <div class="card bg-base-100 image-full w-full object-cover">
        <figure>
            <img
                src="${vidDetails.thumbnail}"
                alt="thumbnail" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${vidDetails.title}</h2>
            <p>${vidDetails.description}</p>
        </div>
    </div>
    `

}