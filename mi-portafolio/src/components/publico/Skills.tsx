import './Skills.css'
import logoPython from '../img/python-logo.png'

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
              <img className="logosSkills" src={logoPython} alt="Logo de Python"  />
              <img className="logosSkills" src={logoPython} alt="Logo de PHP"  />
              <img className="logosSkills" src={logoPython} alt="Logo de React"  />
              <img className="logosSkills" src={logoPython} alt="Logo de Tailwind"  />
              </div>
            </li>

            <li>Gestión de bases de datos (SQL, NoSQL)
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoPython} alt="Logo de SQL"  />
              <img className="logosSkills" src={logoPython} alt="Logo de NoSQL"  />
              
              </div>
            </li>

            <li>Análisis de datos(Excel, Power BI)
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoPython} alt="Logo de Excel"  />
              <img className="logosSkills" src={logoPython} alt="Logo de Power BI"  />
              </div>
            </li>
            <li>Transformación y visualización de datos (Tableau, Power BI, Google Colab)
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoPython} alt="Logo de Tableau"  />
              <img className="logosSkills" src={logoPython} alt="Logo de Power BI"  />
              <img className="logosSkills" src={logoPython} alt="Logo de Google Colab"  />
              </div>
            </li>
            <li>Librerias para la ciencia de datos (Pandas, NumPy, Matplotlib)
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoPython} alt="Logo de Pandas"  />
              <img className="logosSkills" src={logoPython} alt="Logo de NumPy"  />
              <img className="logosSkills" src={logoPython} alt="Logo de Matplotlib"  />
              </div>
            </li>
            <li>Desarrollo de páginas web básicas (React Native)
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoPython} alt="Logo de React Native"  />
              </div>
            </li>
            <li>Control de versiones (Git)
              <div className='logosSkillsConteiners'>
              <img className="logosSkills" src={logoPython} alt="Logo de Git"  />
              </div>
            </li>
          </ul>
        </div>


    </main>
  )
}
