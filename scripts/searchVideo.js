document.getElementById('search-input').addEventListener('keyup', (event) => {
    const searchValue = event.target.value.toLowerCase();

    loadVideos(searchValue);
});