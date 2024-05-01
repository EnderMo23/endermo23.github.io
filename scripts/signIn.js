let invisible = true;
let icon = document.getElementById('visible');
let input = document.getElementById('password');
function toggleVisibility() {

        if (invisible) {
            icon.src = '../img/visible.svg';
            invisible = false;
            input.type = 'text';
        }
        else {
            icon.src = '../img/invisible.svg';
            input.type = 'password';
            invisible = true;
        }
}