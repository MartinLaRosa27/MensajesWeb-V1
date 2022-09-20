import React, { useRef } from "react";
import axios from "axios";

export const Redactar = (props) => {
  const urlPost = `http://${process.env.REACT_APP_BACKEND_URL}/post-mensajes`;
  const receptor = useRef();
  const contenido = useRef();

  const enviarMensaje = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(urlPost, {
          contenido: contenido.current.value,
          receptor: receptor.current.value,
          emisor: props.user,
        })
        .then((res) => {
          alert(res.data);
        });
    } catch (e) {
      alert("No se pudo enviar el mensaje");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Redactar Mensaje</h3>
      <form method="POST" onSubmit={(e) => enviarMensaje(e)}>
        <div className="mb-3">
          <label htmlFor="receptor" className="form-label">
            Enviar a:
          </label>
          <input
            type="email"
            className="form-control"
            name="receptor"
            placeholder="nombre@mail.com"
            ref={receptor}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="contenido" className="form-label">
            Contenido del mensaje:
          </label>
          <textarea
            className="form-control"
            name="contenido"
            rows="3"
            ref={contenido}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
