import React, { useEffect, useState } from "react";
import axios from "axios";

export const MisMensajes = (props) => {
  const [mensajes, setMensajes] = useState([]);
  const urlGet = `http://${process.env.REACT_APP_BACKEND_URL}/get-mensajes-enviados/${props.user}`;

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
      <h3 className="text-center">Mis Mensajes</h3>
      <ul className="list-group mt-2">
        {mensajes.map((mensaje) => {
          return (
            <div key={mensaje._id}>
              <li
                className="list-group-item"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-controls="collapseExample"
                key={mensaje._id}
              >
                <span className="fst-italic">Mensaje para</span>{" "}
                {mensaje.receptor}
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
