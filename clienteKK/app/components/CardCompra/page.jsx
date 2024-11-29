"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'; // Verifica la ruta
import Image from 'next/image';

const CardCompra = () => {
  const [menus, setMenus] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newMenu, setNewMenu] = useState({ name: '', image_url: '', items_count: 0, reviews: '' });

  // Función para obtener los menús de la base de datos
  const fetchMenus = async () => {
    try {
      const { data, error } = await supabase
        .from('compramenus')
        .select('*');

      if (error) {
        throw error;
      }

      setMenus(data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  useEffect(() => {
    if (supabase) {
      fetchMenus(); // Llama a la función para obtener los menús al cargar el componente
    } else {
      console.error('Error: Supabase is not initialized');
    }
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos requeridos estén completos
    if (!newMenu.name || !newMenu.image_url || newMenu.items_count <= 0) {
      console.error('Por favor, completa todos los campos correctamente.');
      return; // Salir si los campos no están completos
    }

    // Insertar el nuevo menú y devolver la representación
    const { data, error } = await supabase
      .from('compramenus')
      .insert([newMenu])
      .select('*'); // Esto asegura que se devuelvan todas las columnas tras la inserción.

    if (error) {
      console.error('Error al agregar nuevo menú:', error);
      return;
    }

    // Verificar que la respuesta tenga datos
    if (data && data.length > 0) {
      setMenus(prevMenus => [...prevMenus, data[0]]); // Agregar el nuevo menú al estado
    } else {
      console.error('No se devolvieron datos después de la inserción.');
    }

    // Reinicia el estado del nuevo menú y oculta el formulario
    setNewMenu({ name: '', image_url: '', items_count: 0, reviews: '' });
    setShowForm(false);
  };

  // Función para manejar la cancelación del formulario
  const handleCancel = () => {
    setShowForm(false); // Oculta el formulario
    setNewMenu({ name: '', image_url: '', items_count: 0, reviews: '' }); // Reinicia el estado del nuevo menú
  };

  // Función para manejar la eliminación de un menú
  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('compramenus')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting menu:', error);
    } else {
      setMenus(prevMenus => prevMenus.filter(menu => menu.id !== id)); // Actualiza el estado local
    }
  };

  return (
    <div className='pt-8'>
      <div className='uppercase text-center flex flex-col md:flex-row justify-between items-center'>
        <div className='flex-1 text-center mb-4 md:mb-0'>
          <span className='text-orange-400 text-xs'>best menu</span>
          <h1 className='text-black font-extrabold text-3xl md:text-4xl'>our best menu</h1>
          <h1 className='text-black font-extrabold text-3xl md:text-4xl'>from the most sales.</h1>
        </div>
        <button 
          className='bg-orange-500 text-white px-4 py-2 rounded'
          onClick={() => setShowForm(!showForm)} // Alterna la visibilidad del formulario
        >
          Comprar
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <input 
            type="text"
            value={newMenu.name}
            onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
            placeholder="Nombre del menú"
            className="border border-gray-300 rounded p-2 w-full mb-2"
            required
          />
          <input 
            type="text"
            value={newMenu.image_url}
            onChange={(e) => setNewMenu({ ...newMenu, image_url: e.target.value })}
            placeholder="URL de la imagen"
            className="border border-gray-300 rounded p-2 w-full mb-2"
            required
          />
          <input 
            type="number"
            value={newMenu.items_count}
            onChange={(e) => setNewMenu({ ...newMenu, items_count: Number(e.target.value) })}
            placeholder="Cantidad de items"
            className="border border-gray-300 rounded p-2 w-full mb-2"
            required
          />
          <textarea 
            value={newMenu.reviews}
            onChange={(e) => setNewMenu({ ...newMenu, reviews: e.target.value })}
            placeholder="Escribe tu reseña..."
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <div className="flex flex-col md:flex-row justify-between">
            <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto">
              Guardar
            </button>
            <button type="button" onClick={handleCancel} className="mt-2 bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Sección para mostrar los menús */}
      <div className='flex flex-wrap justify-center pt-10 overflow-x-auto'>
        {menus.length > 0 ? (
          menus.map(menu => (
            <div key={menu.id} className='relative rounded overflow-hidden shadow-lg w-64 h-96 m-4'>
              <Image width={100} height={12} src={menu.image_url} alt={menu.name} className=' object-cover' />
              <div className='p-3'>
                <span className='text-orange-400 text-xs'>SUSHI</span>
                <h2 className='text-black font-bold text-xl uppercase'>{menu.name}</h2>
                <div className='flex justify-between mt-2'>
                  <p className='bg-transparent rounded border border-gray-300 px-2 py-2 text-black'>
                    {menu.items_count} Items
                  </p>
                  <p className='bg-transparent rounded border border-gray-300 px-2 py-2 text-black'>
                    {menu.reviews || 'No Reviews'}
                  </p>
                </div>
                <button 
                  onClick={() => handleDelete(menu.id)} 
                  className="mt-2 bg-red-500 text-white px-3 py-2 rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-black'>No se encontraron menús.</p>
        )}
      </div>
    </div>
  );
};

export default CardCompra;
