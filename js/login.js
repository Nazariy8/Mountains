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
        
        let name = document.querySelector(".login-input").val();
        let pass = document.querySelector(".password-input").val();
        $("#dialog").html(
            "Ви успішно увійшли!" + "<br>" +
            "Ваша пошта: " + name
    );
        if ( $('.login-input').val()=="" || $('.password-input')=="" ) {
    alert('Ви не внесли всю потрібну інформацію для входу!');
    } else {
    $("#dialog").dialog("open");
}


       
  });
});