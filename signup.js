document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Create user object
            const newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };

            // Get existing users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if user already exists
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert('User already exists. Please use a different email.');
                return;
            }

            // Add new user to the array and save to localStorage
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            console.log("Account Created!")
            console.log(`Name: ${firstName} ${lastName}, Email: ${email}`)
            alert('Sign up successful!');
            // Redirect to sign-in or dashboard
            window.location.href = 'signin.html';
        });
    } else {
        console.error('Sign-up form not found.');
    }
});
