import './Skills.css'
import logoPython from '../img/python-logo.png'
import logoPHP from '../img/PHP_Logo.jpg'
import HTMLLogo from '../img/logo_HTML5.webp'
import CSSLogo from '../img/logo_CSS.webp'
import JSLogo from '../img/logo_JS.png'
import logoTailwind from '../img/tailwindcss_logo.png'
import logoSQL from '../img/MySQL_Logo.png'
import logoNoSQL from '../img/noSQL_Logo.webp'
import logoExcel from '../img/Excel-Logo.jpg'
import logoPowerBI from '../img/powerBi_Logo.png'
import logoTableau from '../img/tablueau_Logo.png'
import logoGoogleColab from '../img/GoogleColab_Logo.png'
import logoPandas from '../img/Pandas_Logo.png'
import logoNumPy from '../img/Numpy_Logo.png'
import logoMatplotlib from '../img/MathPlotlib_Logo.webp'
import logoReactNative from '../img/React_Logo.webp'
import logoGit from '../img/GIT_Logo.webp'
import logoGitHub from '../img/GitHub-Logo.png'

export const Skills = () => {
  return (
    <main>
      <h1>Habilidades</h1>
      <p>A lo largo de mi formación y experiencia, he desarrollado una serie de habilidades técnicas y blandas que considero fundamentales para mi crecimiento profesional:</p>
      <ul>
        <li>Programación en lenguajes como, por ejemplo, Python, C, C++ y JavaScript.</li>
        <li>Diseño y gestión de bases de datos.</li>
        <li>Capacidad para trabajar en equipo y colaborar en proyectos multidisciplinarios.</li>
        <li>Habilidades de comunicación efectiva, tanto oral como escrita.</li>
        <li>Adaptabilidad y disposición para aprender nuevas tecnologías y herramientas.</li>
      </ul>

      <div className="skills-container"></div>
        <div className="skill-category">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li>Desarrollo web (HTML, CSS, JavaScript, Tailwind, React)</li>
            <li>Programación en Python y PHP.
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={HTMLLogo} alt="Logo de HTML"  />
              <img className="logosSkills " src={CSSLogo} alt="Logo de CSS"  />
              <img className="logosSkills" src={JSLogo} alt="Logo de JavaScript"  />
              <img className="logosSkills" src={logoTailwind} alt="Logo de Tailwind"  />
              <img className="logosSkills" src={logoPython} alt="Logo de Python"  />
              <img className="logosSkills" src={logoPHP} alt="Logo de PHP"  />  
              <img className="logosSkills" src={logoReactNative} alt="Logo de React Native"  />            </div>
            </li>

            <li>Gestión de bases de datos (SQL, NoSQL).
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoSQL} alt="Logo de SQL"  />
              <img className="logosSkills" src={logoNoSQL} alt="Logo de NoSQL"  />
              
              </div>
            </li>

            <li>Análisis de datos: Exploración y limpieza de datos(Excel, Power BI).
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoExcel} alt="Logo de Excel"  />
              <img className="logosSkills" src={logoPowerBI} alt="Logo de Power BI"  />
              </div>
            </li>
            <li>Transformación y visualización de datos (Tableau, Power BI, Google Colab).
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoTableau} alt="Logo de Tableau"  />
              <img className="logosSkills" src={logoPowerBI} alt="Logo de Power BI"  />
              <img className="logosSkills" src={logoGoogleColab} alt="Logo de Google Colab"  />
              </div>
            </li>
            <li>Librerias para la ciencia de datos (Pandas, NumPy, Matplotlib).
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoPandas} alt="Logo de Pandas"  />
              <img className="logosSkills" src={logoNumPy} alt="Logo de NumPy"  />
              <img className="logosSkills" src={logoMatplotlib} alt="Logo de Matplotlib"  />
              </div>
            </li>
            <li>Control de versiones (Git y GitHub).
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoGit} alt="Logo de Git"  />
              <img className="logosSkills" src={logoGitHub} alt="Logo de GitHub"  />
              </div>
            </li>
          </ul>
        </div>


    </main>
  )
}
