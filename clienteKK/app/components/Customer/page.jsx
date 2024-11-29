import React from 'react';
import { FaStar } from 'react-icons/fa';

const Customer = () => {
  const rating = 5;  // Definimos el número de estrellas como una variable

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start mt-7">
      {/* Columna izquierda */}
      <div className="flex-1 md:mr-8">
        <div className="uppercase">
          <p className="text-sm text-orange-400">testimony</p>
          <h2 className="text-black text-4xl font-extrabold">customer saying</h2>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="flex flex-col items-start mt-4 md:mt-0 ml-52 pt-8">
        {/* Estrellas de calificación */}
        <div className="flex items-center">
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-orange-500" /> // Mostramos las estrellas según la calificación
            ))}
          </div>
          <span className="ml-2 text-black font-bold">5.0</span> {/* Texto de la calificación */}
        </div>

        {/* Testimonio del cliente */}
        <p className="text-black text-lg font-semibold mt-2">
          I've traveled the world in search of the finest sushi, and I can confidently say that [Sushi Restaurant Name] stands in a league of its own.
          The combination of authentic flavors, artistic presentation, and attentive service creates an experience that leaves a lasting impression.
          I've traveled the world in search of the finest sushi, and I can confidently say that [Sushi Restaurant Name] stands in a league of its own. 
          The combination of authentic flavors, artistic presentation, and attentive service creates an experience that leaves a lasting impression.
        </p>

        {/* Nombre del cliente */}
        <p className="text-black mt-2 font-semibold pt-10">- FUJI HANAYAMA</p>
      </div>
    </div>
  );
};

export default Customer;
