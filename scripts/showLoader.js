const showLoader = () => {
    document.getElementById('loader').classList.remove('hidden') ;
    document.getElementById('video-container').classList.add('hidden');
}

const hideLoader = () => {
    document.getElementById('loader').classList.add('hidden') ;
    document.getElementById('video-container').classList.remove('hidden');
}