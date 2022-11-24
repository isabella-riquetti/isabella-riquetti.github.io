$(document).ready(function () {
  $("#contactform").submit(function () {
    ShowMessage("info", "Sua mensagem está sendo enviada. Favor aguardar alguns instantes...", "spinner fa-pulse");

    const url = `https://script.google.com/macros/s/AKfycbww9C8NIugD0FzAeXz-7iwkJGLF3e62HtKWIfiampIgVIJPgoBVz4Q2b_QneOyDwWmSGQ/exec`;

    $.ajax({
      url: url,
      type: 'post',
      redirect: "follow",
      dataType: 'json',
      data: $(this).serialize(),
      crossDomain: true,
      success: function (data) {
        ShowMessage("success", "Sua mensagem foi enviada! Obrigado pelo contato!", "check");
      },
      error: function (xhr, err) {
        ShowMessage("danger", "Infelizmente não conseguimos enviar sua mensagem.", "exclamation-circle");
      }
    });
    return false;
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
