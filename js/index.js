function send (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var result = document.getElementById("result");

  if (name.split(" ").length >= 2) {

    result.innerHTML = name + "<br/>" + email;
  } else {
    result.innerHTML = "<div class='alert alert-danger'>Voce nao digitou o seu nome completo</div>";
  }
}
