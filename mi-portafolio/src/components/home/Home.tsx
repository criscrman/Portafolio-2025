import { Button } from '..'
import fotopersona from '../img/Foto_Porta1.png'
import { useState } from 'react'



export const Home = () => { {
  const [count, setCount] = useState(0)

  const countmore = () => {
    setCount((count) => count + 1)


    

  }


  return (
    <>
    

                <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="items-start">
                            <h1>Hola, mi nombre es Cristian Galán</h1>

                            <p>Bienvenido a mi portafolio</p>
                    <h2 className="text-4xl font-extrabold leading-tight">Transformo datos en decisiones accionables</h2>
                    <p className="mt-4 text-gray-600">Ingeniero de Sistemas recién egresado enfocado en análisis de datos, visualización e implementación de soluciones basadas en pipelines reproducibles.</p>


                    <div className="mt-2  flex items-center justify-center gap-2">
                    <a href="#projects" className="px-4 py-2 rounded-md bg-sky-600 text-white">Ver portafolio</a>
                    <a href="/cv.pdf" className="px-4 py-2 rounded-md border">Descargar CV</a>
                    </div>


                    <ul className="mt-6 text-sm text-gray-500 space-y-1">
                    <li>📍 Pereira, Colombia • Disponible para remoto / presencial</li>
                    <li>💻 Stack: Python, SQL, Power BI, Git</li>
                    </ul>
                    </div>


                    <div className="flex justify-center">
                    <div className="w-64 h-64 rounded-xl shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    {/* Placeholder for image */}

                    <img src={fotopersona} className="object-center rounded-xl  object-cover p-1" alt="Foto profesional de Cristian Galán" />
                    </div>
                    </div>
                </section>


                        {/* About me */}
                    <section id="about" className="mt-12">
                    <h3>Sobre mí</h3>
                    <p className="mt-3 text-gray-600">Soy Ingeniero de Sistemas (Universidad Nacional Abierta y a Distancia-UNAD, 2025). Me apasiona mira todo tipo de datos, y si es posible convertirlos en datasets que terminen en historias claras que ayuden a la toma de decisiones basada en datos, con énfasis para su implementación con buenas prácticas de ingeniería de datos.</p>
                

                    <div className="mt-4 grid md:grid-cols-3 gap-4 xs:gap-1 xs:m-0">


                    <div id="card" className="p-4 border rounded-lg">
                
                    <h4 className="font-semibold">Educación</h4>
                    <p className="text-sm  mt-2">Tecnológo en Sistemas de Comunicaciones Inalámbricas — Universidad Nacional Abierta y a Distancia (UNAD). Trabajo de grado: Pasantía en el Centro de Agricultura y Biotecnología - CIAB.</p>
                    <p className="text-sm mt-2">Ingeniería de Sistemas — Universidad Nacional Abierta y a Distancia (UNAD). Trabajo de grado: Créditos de posgrado en Ciencia de Datos y analítica.</p>
                        
                    </div>
                    <div id="card" className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Herramientas</h4>
                    <p className="text-sm mt-2">Python, Pandas, SQL, Power BI, Git, Jupyter</p>
                    <h4 className="font-semibold">Herramientas Ofimáticas</h4>
                    <p className="text-sm mt-2">Microsoft Office (Word, Excel, PowerPoint), Google Workspace</p>
                    </div>
                    <div id="card" className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Certificaciones</h4>
                    <p className="text-sm mt-2">Python Certified Entry-Level Programmer-PCEP , cursos de Power BI, ciencia y análisis de datos.</p>
                    </div>
                    </div>
                    </section>

                <h3>Proyectos Análisis de datos</h3>

                <ul>
                    <li>
                    Proyecto 1
                    <p>La teoria de números es importante</p>
                    </li>
                    <li>
                    Proyecto 2
                    <p>Machine Learning para la relación con la productividad</p>
                    </li>
                    <li>
                    Proyecto 3
                    <p>Visualización de datos con Python - Diagnostico de una enfermedad</p>
                    </li>
                </ul>


                


                <h3>Proyectos Desarrollo web</h3>

                <ul>
                    <li>
                    Proyecto 1
                    <p>Pepe</p>
                    </li>
                    <li>Proyecto 2</li>
                    <li>Proyecto 3</li>
                </ul>

            


                /* Skills */
            <section id="skills" className="mt-12">
            <h3 className="text-2xl font-bold">Habilidades</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
            <h4 className="font-semibold">Técnicas</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>• Python (Pandas, NumPy) — Manipulación y limpieza de datos</li>
            <li>• SQL — Consultas y modelado relacional</li>
            <li>• Power BI / Tableau — Dashboards interactivos</li>
            <li>• Análisis estadístico básico — pruebas, correlaciones</li>
            </ul>
            </div>


            <div>
            <h4 className="font-semibold">Blandas</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li>• Comunicación de resultados</li>
            <li>• Resolución de problemas</li>
            <li>• Trabajo en equipo</li>
            <li>• Aprendizaje continuo</li>
            </ul>
            </div>
            </div>
            </section>


            /* Contact */
            <section id="contact" className="mt-12 mb-24">
            <h3 className="text-2xl font-bold">Contacto</h3>
            <div className="mt-4 md:w-full ">


            <div className="p-4 border rounded-lg">
            <p className="text-sm">Email: <a href="mailto:criscriman@gmail.com" className="underline">criscriman@gmail.com</a></p>
            <p className="text-sm mt-2">LinkedIn: <a href="https://www.linkedin.com/in/cristian-camilo-galán-chala-a96baa209" className="underline">Linkedin Perfil Cristian Gálan</a></p>
            <p className="text-sm mt-2">GitHub: <a href="#" className="underline">github.com/tu-usuario</a></p>


            <div className="mt-4">
            <a href="/cv.pdf" className="inline-block px-3 py-2 border rounded">Descargar CV</a>
            </div>
            </div>
            </div>
            </section>
                
                <div className="card">
                    <Button label={`Count is: ${count}`} parentMethod={countmore} />
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
    </>


 )
}
}
export default Home;



