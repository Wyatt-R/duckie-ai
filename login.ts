document.getElementById('loginButton').addEventListener('click', function() {
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    var rememberMe = (<HTMLInputElement>document.getElementById('rememberMe')).checked;

    // TODO: Implement your login logic here. If login is successful, redirect to app.html. If not, show a modal window notification.
    // For the sake of this task, let's assume the login is always successful.

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }

    window.location.href = 'app.html';
});