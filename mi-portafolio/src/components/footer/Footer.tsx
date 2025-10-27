import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            
            
            <div className="footer-links">
                 <h3>Contacto</h3>
            <a href="#">Portafolio</a>
            <a href="#">Estudios</a>
            <a href="#">Contacto</a>
            </div>

            <div className="footer-links">
                 <h3>Contacto</h3>
            <a href="#">Portafolio</a>
            <a href="#">Estudios</a>
            <a href="#">Contacto</a>
            </div>

            <div className="footer-links">
                <h3>Contacto</h3>
            <a href="#">Celular + 3234406146</a>
            
            
            <a href="#">Correo: criscriman@gmail.com</a>
            <a href="#">LinkedIn: criscriman</a>
            </div>

        <p> © {new Date().getFullYear()} Cristian Galán — Hecho con ❤️ y datos.</p>
       

        </footer>


    );
};

export default Footer;