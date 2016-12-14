
$(document).ready(function () {
  $('#submitNew').on("keydown", function (e) {
    if (e.which == 13) {
      $('#submitBtn').click();
      $(this).children()[1].value = "";
    };
  });

  $('#submitBtn').on("click", function () {
    var form = $(this).prev()
      var body = form.children()[1].value
      var chat_id = this.parentElement.parentElement.id.substring(10, 999)
      App.message.create({
        message: {
          chat_id: parseInt(chat_id),
          body: body
        }
      });
  });

  $('.outerContainer').on('click', '.msgDeleteSubmit',  function () {
    var id = this.id.substring(16, 999999);
    var chat_id = this.parentElement.parentElement.parentElement.id.substring(10, 999);
    App.message.destroy({
      message: {
        id: id,
        chat_id: chat_id
      }
    });
  });

  $('.outerContainer').on('click', '.msgEditSubmit', function () {
    var id = $(this).parent()[0].id.substring(8, 9999999);
    var container = $('#message_' + id);
    if (container.hasClass("notEditing")) {
      container.addClass("editing").removeClass("notEditing");
      $(this).fadeOut();
    } else {
      container.addClass("notEditing").removeClass("editing");
    };
  });

  $('.outerContainer').on("keydown", '.submitMessage', function (e) {
    if (e.which == 13) {
      var id = this.id.substring(14, 999999);
      var body = $(this).children()[3].value;
      var chat_id = this.parentElement.parentElement.parentElement.id.substring(10, 999);
      App.message.update({
        message: {
          id: id,
          chat_id: chat_id,
          body: body
        }
      });
      $('#msgEditSubmit_' + id).fadeIn();
      var container = $('#message_' + id);
      container.addClass("notEditing").removeClass("editing");
    };
  });
});