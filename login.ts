document.getElementById('loginButton').addEventListener('click', function() {
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    var rememberMe = (<HTMLInputElement>document.getElementById('rememberMe')).checked;

    // Replace this line with your actual login logic.
    // If login is successful, redirect to "app.html"
    // If login is not successful, display a modal with an error message

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }

    window.location.href = 'app.html';
});