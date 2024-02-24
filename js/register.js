$(document).ready(function () {

    $("#dialog").dialog({
        autoOpen: false,
        width:450,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "puff",
            duration: 1000
        }
    });


    $(".login-button").on("click", function (event) {
    event.preventDefault();
    
        /* ТУТ ОСНОВНЕ ОНОВЛЕННЯ коду */
        
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    $("#dialog").html(
        `Ваш ім'я: <b>` + name + `</b><br>` +
        `Ваша ел. пошта: <b>` + email + "</b><br>" +
        `Ваш пароль: <b>` + pass + `</b><br>`
    );
        if ($('#name').val() == "" || $('#email').val() == "" || $('#pass').val() == "" || $('#pass-again').val() == "") {
    alert('Ви не заповнили анкету до кінця! Перегляньте анкету ще раз та заповніть повністю!');
} else if ($('#pass').val() != $('#pass-again').val()) {
    alert('Введений вами повторний пароль не співпадає з початковим!');
} else {
    $("#dialog").dialog("open");
}


       
  });
});