function removeActiveClass() {
    const activeButtons = document.getElementsByClassName('active');

    for(let btn of activeButtons) {
        btn.classList.remove('active');
    }
}

const loadCategoryVideos = (id) => {
    showLoader();
    
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        removeActiveClass();

        const clickedButton = document.getElementById(`btn-${id}`);
        clickedButton.classList.add('active');
        displayVideos(data.category);
    });
}