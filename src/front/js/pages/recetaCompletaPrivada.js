import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarPrivado } from "../component/Navbar/navbarPrivado";
import "../../styles/recetaCompleta.css"
import { NotaModal } from "../component/notaModal";
import { DropMenuSemanal } from "../component/dropMenuSemanal";
import { useParams } from "react-router-dom";

export const RecetaCompletaPrivada = () => {
  const { store, actions } = useContext(Context)

  const { recetaId } = useParams()

  //me traigo la receta, filtro por id 
  const receta = store.recetas.find(rec => rec.id.toString() === recetaId);

  return (
    <div>
      <NavbarPrivado />

      <div className="container mt-5">
        <header className="recipe-header text-center mb-4">

        </header>
        <h3>{receta.title}</h3>

        <div className="row recipe-content">
          <div className="ingredientes col-12 col-md-4 p-4 rounded">
            <p style={{ fontSize: "large" }}>
              <strong> Ingredients<br/> </strong>
              <ul>
                {receta.ingredientes && receta.ingredientes.length > 0
                  ? receta.ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente.ingrediente}</li>
                  ))
                  : 'Ingredients are not availables'}
              </ul>
            </p>
            <div className="preparation-time">
              <p style={{ fontSize: "large" }}>{receta.tiempo_de_coccion} </p>
            </div>
          </div>

          <div className="col-10 col-md-6  rounded">
            <p>{receta.instructions}</p>
            <p>
              {receta.pasos && receta.pasos.length > 0
                ? receta.pasos.map((paso, index) => (
                  <span key={index}> <br></br> - Step {index + 1}: {paso.step}</span>
                ))
                : 'Steps are not availables'}
            </p>
          </div>
        </div>

        <div className="text-center mt-3 buttonBottom">
          <button className="btn-receta" data-bs-toggle="modal" data-bs-target="#noteModal">Add note</button>

          <DropMenuSemanal recetaId={receta.id} />

          

        </div>

        <div className="row note-section ">
          <div className="col-12 col-md-4 p-4">
            <img src={receta.image} alt={receta.title} className="img-fluid rounded receta-img" />
          </div>


        </div>
        <NotaModal />

      </div>
    </div>
  )
}