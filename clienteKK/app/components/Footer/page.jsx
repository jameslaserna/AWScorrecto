import React from 'react';
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      {/* Sección de Reservas */}
      <div className="text-center mb-8">
        <h2 className="text-sm uppercase text-orange-500">LET'S RESERVE</h2>
        <h1 className="text-4xl font-bold mt-2 mb-4">EXPERIENCE CULINARY BLISS - RESERVE YOUR TABLE TODAY!</h1>
        
        {/* Formulario de Reserva */}
        <div className="flex justify-center mb-4 flex-col md:flex-row">
          <input
            type="email"
            placeholder="ENTER EMAIL"
            className="p-2 bg-black text-white border border-gray-400 mb-2 md:mb-0 md:mr-2"
          />
          <button className="bg-white text-black px-4 border-white">
            RESERVE NOW
          </button>
        </div>
      </div>

      {/* Información de contacto y redes sociales */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 mt-10">
        
        {/* Dirección física */}
        <div className="flex items-center mb-4 md:mb-0">
          <FaMapMarkerAlt className="mr-2" />
          <p className="text-start">
            600 GUERRERO ST, SAN FRANCISCO, CA 94110, UNITED STATES
          </p>
        </div>

        {/* Redes sociales y derechos de autor */}
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Redes sociales */}
          <div className="flex justify-end mb-4 md:mb-0">
            <a href="#" className="mx-2 text-white hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="mx-2 text-white hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="#" className="mx-2 text-white hover:text-orange-500">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Derechos de autor */}
          <div className="text-end text-sm md:ml-4">
            <p>COPYRIGHT  ©2020 FARAZ AL FASLUDI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
