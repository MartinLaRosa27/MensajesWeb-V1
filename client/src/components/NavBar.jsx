import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Mensajes } from "./Mensajes.jsx";
import { MisMensajes } from "./MisMensajes.jsx";
import { Redactar } from "./Redactar.jsx";

export const NavBar = (props) => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <NavLink to="/" className="navbar-brand font-italic">
            MensajesWeb
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/mis-mensajes" className="nav-link">
                  Mis Mensajes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/redactar" className="nav-link">
                  Redactar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Mensajes user={props.user.email} />}></Route>
        <Route
          path="/mis-mensajes"
          element={<MisMensajes user={props.user.email} />}
        ></Route>
        <Route
          path="/redactar"
          element={<Redactar user={props.user.email} />}
        ></Route>
        <Route
          path="*"
          element={<h1 className="mt-5 text-center">ERROR 404 :(</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
