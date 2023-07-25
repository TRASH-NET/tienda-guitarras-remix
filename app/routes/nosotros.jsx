import imagen from "../../public/img/nosotros.jpg";
import styles from '~/styles/nosotros.css'



export function links() {
    return (
        [
            {
                rel: 'stylesheet',
                href: styles
            },
            {
                rel: 'preload',
                href: imagen,
                as: 'image'
            }
        ]
    )
}

export function meta() {
    return(
        [
            {title: 'GuitarLA - Sobre Nosotros'},
            {description: 'Venta de guitarras, blog de musica'},
        ]
    )
}

const Nosotros = () => {
    
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />
                <div>
                    <p>
                        Vestibulum arcu augue, ultrices nec dui vitae, lacinia iaculis
                        tellus. Sed quis luctus arcu. Vestibulum sit amet dictum lorem.
                        Integer eu eros ac dolor sodales sodales. Sed ac metus quis velit
                        interdum pharetra eu ut nisi.Sed ac metus quis velit
                        interdum pharetra eu ut nisi.
                    </p>
                    <p>
                        Vestibulum arcu augue, ultrices nec dui vitae, lacinia iaculis
                        tellus. Sed quis luctus arcu. Vestibulum sit amet dictum lorem.
                        Integer eu eros ac dolor sodales sodales.
                    </p>
                </div>
            </div>
        </main>
  );
};

export default Nosotros;
