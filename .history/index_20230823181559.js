function load() {
    document.body.style.transition = '0.3s';
    document.body.style.opacity = '100%';
}

function loadOut() {
    document.body.style.transition = '0.3s';
    document.body.style.opacity = '0';
}

document.querySelector('#home').addEventListener('click', function() {
    document.body.style.transition = '0.3s';
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location = 'index.html';
    }, 300)
})

document.querySelector('#beats').addEventListener('click', function() {
    document.body.style.transition = '0.3s';
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location = 'beats.html';
    }, 300)
})

document.querySelector('#contact').addEventListener('click', function() {
    document.body.style.transition = '0.3s';
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location = 'contact.html';
    }, 300)
})