function loadCategoryButtons() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response => response.json())
    .then(data => displayCategoryButtons(data.categories));
}

function displayCategoryButtons(categories) {
    const categoryButtonsContainer = document.getElementById('category-buttons-container');

    for(let cat of categories) {
        const categoryButton = document.createElement('div');
        categoryButton.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:btn-error hover:text-white">${cat.category}</button>
        `
        categoryButtonsContainer.appendChild(categoryButton);
    }
}

loadCategoryButtons();