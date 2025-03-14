const loadCategoryVideos = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

    fetch(url)
    .then(response => response.json())
    .then(data => displayVideos(data.category));
}