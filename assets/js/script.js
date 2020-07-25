
document.querySelector('.menu_mobile_bar')
.addEventListener('click', function () {
    if (document.querySelector('.menu_mobile ul').style.display == 'flex') {
        document.querySelector('.menu_mobile ul').style.display = 'none'
    } else {
        document.querySelector('.menu_mobile ul').style.display = 'flex'
    }
})
