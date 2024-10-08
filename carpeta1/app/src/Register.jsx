import React from "react";

function Register(props) {

  const handleLoginClick = event => {
    event.preventDefault()

    props.onLoginClick()
}

const handleRegisterSubmit = event => {
    event.preventDefault()

    /*const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    try {
        registerUser(name, email, password)
            .then(() => props.onRegistered())
            .catch(error => alert(error.message))
    } catch (error) {
        alert(error.message)
    }*/
}  

  return (
    <section className="register-view">
      <div className="card en-linea">
        <img
          src="img/register-image.jpeg"
          className="card-img-top"
          style={{ width: 600 }}
          alt="registrarse"
        />
        <div className="card-body">
          <h5 className="card-title">
            Registrate aquí y crea tu cuenta de usuario
          </h5>
          <form className="register-form" action="submit" onSubmit={handleRegisterSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="register-name floatingInput form-control"
                placeholder="Nombre"
              />
              <label htmlFor="floatingInput register-name">Nombre</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="surname"
                className="register-surname floatingInput form-control"
                placeholder="Apellidos"
              />
              <label htmlFor="floatingInput register-surname">Apellidos</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="email"
                className="register-email floatingInput form-control"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput register-email" type="text">
                Dirección de correo electrónico
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="register-password floatingPassword form-control"
                placeholder="Password"
              />
              <label htmlFor="register-password floatingPassword">
                Contraseña
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </form>
          <hr />
          <a href="#" className="btn btn-primary register-login-link" onClick={handleLoginClick}>
            Hacer Log-in
          </a>
        </div>
      </div>
    </section>
  );
}
export default Register;