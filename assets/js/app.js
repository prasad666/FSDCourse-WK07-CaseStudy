function loginSuccess(){
    //redirect
    location.href = 'todo-list.html';
}
function validate(callBack) {
    let un = document.getElementById('username').value;
    let pw = document.getElementById('password').value;

    if(un == 'admin' && pw == '12345'){
        return callBack();
    }
    alert('Invalid username or wrong password!');
}
window.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('buttonSubmit').addEventListener( 'click', function(ev) {
        ev.preventDefault();
        validate(loginSuccess);
        return false;
    })
});