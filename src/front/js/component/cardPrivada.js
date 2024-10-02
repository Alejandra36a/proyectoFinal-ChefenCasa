import React from 'react';
import { Link } from 'react-router-dom';

export const CardPrivada = ({ receta }) => {
    return (
        <div className="contenedor-card">
            <img src={receta.image} alt={receta.title} className="recipe-image" />
            <h4 className='title ms-auto'>{receta.title}</h4>
            <div className='dato d-flex'>
                <p className="time me-5" style={{ fontSize: "medium" }}>
                    <i className="fa-regular fa-clock"></i> {receta.tiempo_de_coccion}
                </p>
                <div className="corazon-info d-flex">
                    <button className='botonFavorito'>
                        <i className="fa-solid fa-heart me-2" style={{ fontSize: "large" }}></i>
                    </button>
                    <Link to={"/recetaCompletaPrivada"}>
                        <button className="botonMasInfo">info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};