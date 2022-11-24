$(document).ready(function () {
  $("#contactform").submit(function () {
    ShowMessage("info", "Sua mensagem está sendo enviada. Favor aguardar alguns instantes...", "spinner fa-pulse");

    const url = `https://script.google.com/macros/library/d/1oX8osuvViIP9eWzWqrHqRb_cITKwd7bOUF2o4uJ3Aoaa-MGd8FAGssab/1`;

    const body = $(this).serialize();
    fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "https://isabella-riquetti.github.io/",
        "Access-Control-Allow-Credentials": false
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


    // var form = $("#contactform");
    // var validForm = form.valid();
    // if (validForm == true) {
    // $.ajax({
    //   url: 'https://script.google.com/macros/library/d/1oX8osuvViIP9eWzWqrHqRb_cITKwd7bOUF2o4uJ3Aoaa-MGd8FAGssab/1',
    //   type: 'post',
    //   dataType: 'json',
    //   data: $(this).serialize(),
    //   crossDomain: true,
    //   success: function (data) {
    //     ShowMessage("success", "Sua mensagem foi enviada! Obrigado pelo contato!", "check");
    //   },
    //   error: function (xhr, err) {
    //     ShowMessage("danger", "Infelizmente não conseguimos enviar sua mensagem.", "exclamation-circle");
    //   }
    // });
    // return false;
    // } else {
    //   debugger;
    //   ShowMessage("warning", "Não é possível enviar uma mensagem com os campos informados, favor conferir as mensagens de erro!", "exclamation-triangle");
    // }
  });
});

function ShowMessage(messageClass, message) {
  $("#messageResult").removeClass().html("");
  $("#messageResult").addClass("alert").addClass("alert-" + messageClass);
  $("#messageResult").text(message);
}

function ShowMessage(messageClass, message, icon) {
  $("#messageResult").removeClass().html("");
  $("#messageResult").addClass("alert").addClass("alert-" + messageClass);
  $("#messageResult").html("<i class='fa fa-" + icon + "' style='margin-right: 7px'></i>" + message);
}
