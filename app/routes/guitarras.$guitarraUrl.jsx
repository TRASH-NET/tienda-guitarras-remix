import { useState } from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { getGuitarra } from '~/models/guitarras.server';

export async function loader({ params }) {

    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);
    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }
    return guitarra;
}

export function meta({ data }) {
    if (!data) {
        return [
            { title: 'GuitarLa - Guitarra No encontrada' },
            { descripcion: 'Guitarras, venta de guitarras, guitarra no encontrada' }
        ]
    }

    return [
        { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
        { descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
    ]
}


const GuitarraUrl = () => {
    
    const {agregarCarrito}= useOutletContext();
    const [cantidad, setCantidad] = useState(0);

    const guitarra = useLoaderData();
    const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;


    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1) {
            alert('Debes seleccionar una cantidad');
            
            return 
        }

        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada);
        
    }
    return (
        <div className='guitarra'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la Guitarra ${nombre}`} />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
                <form className='formulario' onSubmit={handleSubmit}>
                    <label htmlFor="cantidad">Cantidad</label>
                    <select 
                        onChange={e => setCantidad(parseInt(e.target.value))}
                        name="cantidad" 
                        id="cantidad"
                    >
                        <option value="0">--- Seleccione ---</option>
                        {Array.from({ length: 5 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <input 
                        type="submit" 
                        value="Agregar al carrito"
                    />
                </form>
            </div>
        </div>
    );
}

export default GuitarraUrl;
