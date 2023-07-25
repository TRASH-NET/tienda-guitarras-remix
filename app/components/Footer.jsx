import Navegacion from "./Navegacion";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenedor contenido">
                <Navegacion/>
            </div>
            <p className="copyright">
                Todos los derechos reservados {new Date().getFullYear()}
            </p>
        </footer>
    );
}

export default Footer;
