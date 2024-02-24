const form = document.querySelector(".login-place");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    // let pass_again = document.getElementById("pass-again").value;

    console.log("Імя -", name);
    console.log("Електр. скринька -", email);
    console.log("Пароль -", pass);

    alert("Реєстрація успішно виконана!");

    form.reset();
})