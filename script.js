document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email && senha) {
    alert('Login realizado com sucesso!');
  } else {
    alert('Preencha todos os campos.');
  }
});
