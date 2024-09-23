import React from "react";

function Login({ onRegisterClick, onLoggedIn }) {

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

       /* const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    context.token = token

                    onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }*/
    }



  return (
    <section className="login-view">
      <div className="card en-linea">
        <img
          src="img/login-image.jpeg"
          className="card-img-top"
          style={{ width: 600 }}
          alt="hacer log-in"
        />
        <div className="card-body">
          <h5 className="card-title">
            Introduce tus datos y accede a tu cuenta de Usuario
          </h5>
          <form className="login-form" action="submit" onSubmit={handleLoginSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="email"
                className="login-email floatingInput form-control"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput login-email" type="text">
                Dirección de correo electrónico
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="login-password floatingPassword form-control"
                placeholder="Password"
              />
              <label htmlFor="login-password floatingPassword" type="password">
                Contraseña
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Entrar en tu cuenta - Log In -{" "}
            </button>
          </form>
          <hr />
          <a href="#" className="btn btn-primary login-register-link" onClick={handleRegisterClick}>
            Volver a Registrarse
          </a>
        </div>
      </div>
    </section>
  );
}
export default Login;
