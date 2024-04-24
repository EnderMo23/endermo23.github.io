function toDark() {
    let input = document.getElementById('checkDark');
    let header = document.getElementById('header');
    let body = document.querySelector('body');
    if (input.checked == true) {
        header.style.background = '#232323';
    }
    else {
        header.style.background = 'gainsboro';
    }
}