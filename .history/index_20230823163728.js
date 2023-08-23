if (document.querySelector('textarea').innerHTML === true) {
    document.querySelector('.contact button').addEventListener('click', function() {
        document.querySelector('.email').innerHTML = 'Email has been Sent!';
    })
}

