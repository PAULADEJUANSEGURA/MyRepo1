import React, {Fragment} from 'react';

function Navbar(){
    return <Fragment>
          <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Namasté 🙏</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="register.html">Crea una cuenta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accede a tu cuenta</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Meditaciones
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Meditacion del EGO</a></li>
                                <li><a className="dropdown-item" href="#">Meditacion del SER</a></li>
                                <li><a className="dropdown-item" href="#">Meditacion del PRESENTE</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Blog
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Yoga</a></li>
                                <li><a className="dropdown-item" href="#">Nutricion</a></li>
                                <li><a className="dropdown-item" href="#">Mantras</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar aquí" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Búsqueda</button>
                </form>
            </div>
        </nav>
    </nav>
</Fragment>
}
export default Navbar;