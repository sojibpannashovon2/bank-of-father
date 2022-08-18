
// step:- 1 Add click event handaller by submit button 

document.getElementById('sub-button').addEventListener('click', function () {
    // console.log('Its working');

    // Step: 2 get the email address of email in input email field

    const emailField = document.getElementById('email-field');

    // set the email adress into emailfield
    const email = emailField.value;

    //console.log(email)

    //Step: 3 get the password

    //3.1 set id on html tag
    //3.2 get the password of email in input password field
    //3.3 set the password value

    const passwordField = document.getElementById('pass-field');

    const password = passwordField.value;
    // console.log(email, password);

    // Danger: Do not verify email and password on client site

    //step:4 varify emaill and password 
    if (email === 'borosis420@gmail.com' && password === 'siraat') {
        window.location.href = 'bank.html';
    }
    else {
        alert("Invalid Password  !! Please give a wright Password");
    }




})