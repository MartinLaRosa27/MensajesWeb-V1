import React, { useEffect, useState } from "react";
import axios from "axios";

export const Mensajes = (props) => {
  const [mensajes, setMensajes] = useState([]);
  const urlGet = `http://${process.env.REACT_APP_BACKEND_URL}/get-mensajes/${props.user}`;

  const getMensajes = async () => {
    try {
      await axios.get(urlGet).then((res) => {
        setMensajes(res.data);
      });
    } catch (e) {
      setMensajes([]);
    }
  };

  useEffect(() => {
    getMensajes();
  }, []);

  return (
    <div className="mt-5 container">
      <h3 className="text-center">Mensajes</h3>
      <ul className="list-group mt-2">
        {mensajes.map((mensaje) => {
          return (
            <div key={mensaje._id}>
              <li
                className="list-group-item"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-controls="collapseExample"
              >
                <span className="fst-italic">Mensaje de</span> {mensaje.emisor}
              </li>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">{mensaje.contenido}</div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
