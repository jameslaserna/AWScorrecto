"use client";
import React, { useEffect, useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { GrTrash } from 'react-icons/gr'; 
import { supabase } from '../../lib/supabase'; // Verifica que esta ruta sea correcta
import Image from 'next/image';

const CheckMenus = () => {
  const [menus, setMenus] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newMenu, setNewMenu] = useState({ name: '', image_url: '', items_count: 0 });
  const [visibleCount, setVisibleCount] = useState(5); 

  useEffect(() => {
    const fetchMenus = async () => {
      if (!supabase) {
        console.error('Supabase is not initialized');
        return; // Salir si supabase no está inicializado
      }

      const { data, error } = await supabase
        .from('menus')
        .select('*');

      if (error) {
        console.error('Error fetching menus:', error);
      } else {
        setMenus(data);
      }
    };

    fetchMenus();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  const handleAddMenuClick = () => {
    setShowForm(true);
    setNewMenu({ name: '', image_url: '', items_count: 0 }); // Reiniciar el formulario
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenu(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!newMenu.name || !newMenu.image_url || newMenu.items_count <= 0) {
      console.error('Please fill all fields correctly.');
      return; 
    }
  
    const { data, error } = await supabase
      .from('menus')
      .insert([newMenu])
      .select('*'); // Obtiene los datos insertados

    if (error) {
      console.error('Error saving menu:', error);
      return; // Salir si hay un error
    }

    // Verificar que data no sea null y tenga formato esperado
    if (data && Array.isArray(data) && data.length > 0) {
      setMenus(prev => [...prev, ...data]);
    } else {
      console.error('Unexpected data format:', data);
    }

    setNewMenu({ name: '', image_url: '', items_count: 0 }); // Reiniciar el formulario
    setShowForm(false); 
  };

  const handleCancel = () => {
    setShowForm(false); 
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('menus')
      .delete()
      .eq('id', id); 

    if (error) {
      console.error('Error deleting menu:', error);
    } else {
      setMenus(prev => prev.filter(menu => menu.id !== id)); 
    }
  };

  return (
    <div className='pt-7 text-black'>
      <div className='flex justify-between'>
        <div className='uppercase'>
          <span className='text-orange-400 text-xs'>our menus</span>
          <h1 className='text-black text-start font-extrabold text-4xl'>check out some</h1>
          <h1 className='text-black text-start font-extrabold text-4xl'>of our best menus.</h1>
        </div>
        <div className='text-center justify-center h-10 w-30 rounded bg-transparent border hover:bg-orange-400'>
          <button className='flex text-center text-black p-2 uppercase' onClick={handleAddMenuClick}>
            <GrAdd className='text-gray-600' />
            <span className='ml-2'>comprar</span>
          </button>
        </div>
      </div>


      {showForm && (
        <div className='mt-5 p-4 border rounded bg-gray-100'>
          <h2 className='text-lg font-bold'>Add New Menu</h2>
          <input
            type='text'
            name='name'
            placeholder='Menu Name'
            value={newMenu.name}
            onChange={handleInputChange}
            className='block w-full p-2 mt-2 border rounded'
          />
          <input
            type='text'
            name='image_url'
            placeholder='Image URL'
            value={newMenu.image_url}
            onChange={handleInputChange}
            className='block w-full p-2 mt-2 border rounded'
          />
          <input
            type='number'
            name='items_count'
            placeholder='Items Count'
            value={newMenu.items_count}
            onChange={handleInputChange}
            className='block w-full p-2 mt-2 border rounded'
          />
          <div className='flex justify-end mt-4'>
            <button onClick={handleSave} className='bg-green-500 text-white px-4 py-2 rounded mr-2'>Guardar</button>
            <button onClick={handleCancel} className='bg-red-500 text-white px-4 py-2 rounded'>Cancelar</button>
          </div>
        </div>
      )}

      <div className='overflow-x-auto'>
        <div className='flex space-x-8 pt-5'> 
          {menus.slice(0, visibleCount).map(menu => ( // Mostrar tarjetas según visibleCount
            <div key={menu.id} className='relative rounded overflow-hidden shadow-lg w-80 h-96'> 
              <Image width={100} height={100} src={menu.image_url} alt={menu.name} className='object-cover' />
              <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4'>
                <h2 className='text-white text-lg font-bold'>{menu.name}</h2>
                <p className='text-white'>{menu.items_count} Items</p>
                <button 
                  onClick={() => handleDelete(menu.id)} 
                  className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1'
                  title="Eliminar"
                >
                  <GrTrash /> {/* Icono de eliminar */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {menus.length > visibleCount && ( 
        <div className='flex justify-center mt-4'>
          <button onClick={() => setVisibleCount(prev => prev + 5)} className='bg-blue-500 text-white px-4 py-2 rounded'>
            Cargar Más
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckMenus;
