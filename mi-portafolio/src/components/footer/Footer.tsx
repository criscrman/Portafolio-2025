import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            
            
            <div className="footer-links row-start-1 sm:col-start-1 sm:row-start-1">
                <h4>Enlaces de Interes</h4>
                    <a href="./Projects">Portafolio</a>
                    <a href="./Educacion">Estudios</a>
                    <a href="./contact">Contacto</a>
            </div>

            <div className="footer-links row-start-2 sm:col-start-2 sm:row-start-1">
                 <h4>Contacto</h4>
                    <a href="#">Portafolio</a>
                    <a href="#">Estudios</a>
                    <a href="#">Contacto</a>
            </div>

            <div className="footer-links row-start-3 sm:col-start-3 sm:row-start-1">
                <h4>Contacto</h4>
                <a href="#">Celular + 3234406146</a>
                <a href="#">Correo: criscriman@gmail.com</a>
                <a href="#">LinkedIn: criscriman</a>
            </div>

            <div className='copy'>
            <p > © {new Date().getFullYear()} Cristian Galán — Hecho con ❤️ y datos.</p>
            </div>

        </footer>


    );
};

export default Footer;