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

function checkNotNull() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let button = document.getElementById('submit-btn');
    if (email.value == "" && password.value == "" || email.value == "" || password.value == "") {
        if (email.value == "") {
            button.type = 'reset';
            email.style.border = '1px solid red';
        }
        else if (password.value == ""){
            button.type = 'reset';
            password.style.border = '1px solid red';
        }

    }

    else {
        button.type = 'submit';
        password.style.border = 'none';
        email.style.border = 'none';
    }
};