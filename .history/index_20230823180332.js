function load() {
    document.body.style.transition = '0.5s';
    document.body.style.opacity = '100%';
}

function loadOut() {
    document.body.style.transition = '0.5s';
    document.body.style.opacity = '0';
}

document.querySelector('#home').addEventListener('click', function() {
    setTimeout(2000)
    loadOut()
    window.location = 'beats.html'
})