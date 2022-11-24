$(document).ready(function () {
  $("#contactform").submit(function () {
    // var form = $("#contactform");
    // var validForm = form.valid();
    // if (validForm == true) {
      ShowMessage("info", "Sua mensagem está sendo enviada. Favor aguardar alguns instantes...", "spinner fa-pulse");
      $.ajax({
        url: 'https://script.google.com/macros/library/d/1oX8osuvViIP9eWzWqrHqRb_cITKwd7bOUF2o4uJ3Aoaa-MGd8FAGssab/1',
        type: 'post',
        dataType: 'json',
        data: $(this).serialize(),
        success: function (data) {
          ShowMessage("success", "Sua mensagem foi enviada! Obrigado pelo contato!", "check");
        },
        error: function (xhr, err) {
          ShowMessage("danger", "Infelizmente não conseguimos enviar sua mensagem.", "exclamation-circle");
        }
      });
      return false;
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
