import { Button } from "../button/Button"

export const Projects = () => {
  return (
    <main> 
        <h1>Proyectos</h1>
        <p>A lo largo de mi carrera, he tenido la oportunidad de trabajar en diversos proyectos que han fortalecido mis habilidades y conocimientos en desarrollo web y análisis de datos. A continuación, presento algunos de los proyectos más destacados en los que he participado:</p>
        <ul>
            <li>
                <strong>Sitio Web de Portafolio Personal:</strong> Desarrollé un sitio web utilizando React y Tailwind CSS para mostrar mis habilidades, proyectos y experiencia profesional. Este proyecto me permitió mejorar mis habilidades en diseño web y desarrollo frontend.
                <p>Es esta misma página que estás visitando. 😉 </p>
            </li>
            <li>
                <strong>Aplicación de Análisis de Datos:</strong> Implementé una aplicación en Python que utiliza bibliotecas como Pandas y Matplotlib para analizar y visualizar conjuntos de datos complejos. Este proyecto me ayudó a profundizar en mis conocimientos de análisis de datos y visualización.
                    <h2>Proyecto: Modelado Predictivo con Machine Learning</h2> 
                    <button>Descargar código</button>
                    <p>Desarrollo completo de un modelo predictivo en Python, desde el análisis exploratorio hasta la evaluación de algoritmos supervisados (regresión y clasificación). Este proyecto corresponde a la fase final del curso de Machine Learning (UNAD, 2024). Se realizó un análisis exploratorio de datos (EDA) y la aplicación de modelos de regresión y clasificación usando una base de datos importada en formato CSV (datos estructurados numéricos).</p>

                        <p>El flujo de trabajo siguió las etapas clásicas del pipeline de ciencia de datos:</p>
                        <ul>
                        <li>Análisis exploratorio (EDA) mediante estadísticas descriptivas y visualizaciones.</li>
                        <li>Preprocesamiento con normalización, selección de variables y división train/test.</li>
                        <li>Entrenamiento y evaluación de modelos de Machine Learning.</li>
                        </ul>


                        
                        <h2><strong>Destacable:</strong></h2>
                            <ul>
                                <li>Implementación práctica de cuatro algoritmos de ML.</li>  
                                <li>Evaluación comparativa del desempeño de modelos.</li>
                                <li>Documentación técnica con visualizaciones y análisis interpretativo.</li>
                                
                             </ul>
                        
                      


                    <h2> Librerías utilizadas</h2> 

                            <ul>
                            <li>pandas, numpy → manipulación y análisis de datos.</li>
                            <li>matplotlib, seaborn, mglearn → visualización y análisis gráfico.</li>
                            <li>scikit-learn (sklearn) → modelado predictivo:</li>
                            <li>LinearRegression y LogisticRegression</li>
                            <li>KNeighborsClassifier, DecisionTreeClassifier</li>
                            <li>Métricas: r2_score, mean_squared_error, confusion_matrix, accuracy_score, classification_report</li>
                            <li>BeautifulTable → presentación tabular de resultados.</li>

                            </ul>

            <img className="Imgsecu" src="https://i.postimg.cc/3x3QzSGq/ciudadela-cuba.jpg" alt="Institución Educativa Ciudadela Cuba"  />
               <h3>Conclusión del proyecto</h3> 
                <p>El análisis de datos logró identificar patrones relevantes en los datos y evaluar distintos modelos predictivos. Los resultados permitieron verificar que se hizo una correcta preparación de los datos, así mejorando significativamente la precisión de los modelos, permitiendo demostrar la importancia del análisis exploratorio y la selección de variables. Con este proyecto se evidencia la capacidad para tomar decisiones basadas en datos y aplicar Machine Learning de forma práctica y efectiva.</p>
            
            
            </li>

            <li>
                <strong>Dashboard Interactivo con Power BI:</strong> Creé un dashboard interactivo utilizando Power BI para presentar datos de ventas y rendimiento empresarial. Este proyecto mejoró mis habilidades en la creación de visualizaciones efectivas y en la interpretación de datos para la toma de decisiones.
            </li>
            <h3>Resumen del Proyecto (En inglés como se presentó originalmente): </h3>
                <p>Olist is a dynamic and innovative e-commerce platform that has rapidly 
                    emerged as a prominent player in the online marketplace landscape. Established 
                    with the vision of empowering businesses and entrepreneurs, Olist provides a 
                    comprehensive and user-friendly platform that connects sellers with a vast pool of 
                    potential customers. At its core, Olist aims to democratize e-commerce by breaking 
                    down barriers for small and medium-sized enterprises (SMEs), enabling them to 
                    thrive in the digital marketplace. The platform offers a diverse range of products, 
                    fostering a vibrant ecosystem where buyers can discover unique items while 
                    sellers can efficiently reach a broader audience. </p>
                <p>The dataset was generously provided by Olist, the largest department store 
                    in Brazilian marketplaces. Olist connects small businesses from all over Brazil to 
                    channels without hassle and with a single contract. Those merchants can sell their 
                    products through the Olist Store and ship them directly to the customers using Olist 
                    logistics partners. See more on our website: www.olist.com. After a customer 
                    purchases the product from Olist Store the seller gets notified to fulfill that order. 
                    Once the customer receives the product, or the estimated delivery date is due, the 
                    customer gets a satisfaction survey by email where he can give a note for the 
                    purchase experience and write down some comments.  </p>


                <a className="PrimaryButton" href="https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" rel="noopener noreferrer" target='_blank'>Dataset de Olist en Kaggle</a>

                <h3>Resumen de la solución</h3>
                <p>Para el desarrollo del proyecto se crearon algunos dashboards interactivos| en Power BI para analizar el impacto de las campañas publicitarias de Olist, el marketplace más grande de Brasil. Incluye proceso ETL (Extract, Transform, Load), modelado de datos, medidas DAX y visualizaciones estratégicas.</p>                
                <p>El análisis permitió identificar patrones de comportamiento de los clientes, evaluar la efectividad de las campañas publicitarias y optimizar estrategias de marketing. Los dashboards interactivos facilitan la toma de decisiones basada en datos, mejorando el rendimiento general del marketplace.</p>
                <p>Este proyecto demuestra habilidades en análisis de datos, visualización y toma de decisiones informadas, contribuyendo al éxito continuo de Olist en el competitivo mercado del comercio electrónico.</p>


                A lo largo del proyecto se pusieron en práctica conceptos clave de Business Intelligence y análisis de datos, incluyendo:

                           
                            
                            <h4> 1. ETL y modelado de datos</h4>

                            <ul>

                                    <li>Importación de múltiples tablas del dataset de Olist.</li>

                                    <li>Limpieza, estandarización y normalización de datos.</li>

                                    <li>Eliminación de columnas no funcionales.</li>
                                    <li>Validación de relaciones automáticas entre tablas.</li>


                            </ul>

                            <h4> 2. Power BI – Transformación y modelado</h4>

                            <ul>

                                    <li>Creación de columnas calculadas (por ejemplo: precio + flete).</li>

                                    <li>Desarrollo de medidas DAX para agregaciones inteligentes.</li>
                                   <li>Modelado de datos orientado a análisis comercial y marketing.</li> 
                            </ul>

                         <h4> 3. Visualización y dashboards</h4>
                            <ul>
                            <li> Se construyeron tres dashboards principales:</li>
                            <li>Dashboard de tipos de pagos y contactos a la marca: Análisis de las formas de pago más usuales, y cómo suelen contactar los posibles clientes (Si es de forma orgánica, por recomendación o por alguna de las forma de Marking hechas) .</li>
                            <li>Dashboard de Clientes: Comportamiento de compra, segmentación y retención.</li>
                            <li>Dashboard de Ventas: Tendencias de ventas, productos más vendidos y análisis geográfico.</li>
                            
                            </ul>   
                        
                            <h4>Incluye:</h4>
                            <ul>
                                <li>Gráficos circulares</li>
                                <li>Gráficos lineales</li>
                                <li>Gráficos de barras</li>
                                <li>Filtros</li>
                                <li>Tarjetas dinámicas</li>
                                <li>Interacciones entre visualizaciones</li>
                            </ul>

                         <h4>4. Tipos de análisis realizados</h4>

                            <ul>
                            <li>Descriptive Analysis</li>
                            <li>Predictive Analysis (Forecast)</li>
                            <li>Prescriptive Analysis</li>
                            </ul>

                  


                    <h3>Conclusiones</h3>
                        <p>El análisis mostró que la mayor parte del tráfico generado hacia los productos de Olist proviene de campañas pagadas, no de búsquedas orgánicas. Esto evidencia una fuerte dependencia del marketplace en estrategias de publicidad digital para atraer clientes. </p>
                        <p>Las gráficas temporales demostraron que, tras el inicio de las campañas publicitarias, el número de contactos se duplicó, especialmente entre enero y mayo de 2018, periodo donde también se registró el mayor número de tratos cerrados. El modelo de predicción confirmó que esta tendencia de crecimiento continúa mientras se mantengan las campañas activas.</p>
                        <p>Finalmente, el análisis prescriptivo recomienda:</p>

                        <ul>
                            <li>Mantener campañas publicitarias periódicas, especialmente en meses de menor actividad comercial.</li>

                            <li>Focalizar los esfuerzos en categorías con mayor volumen de búsquedas.</li>

                            <li>Incorporar datos de costos de publicidad para evaluar retorno de inversión (ROI), actualmente ausentes en el dataset.</li>

                        </ul>

En conjunto, el proyecto demuestra la capacidad de generar insights accionables mediante Power BI, conectando datos complejos con decisiones estratégicas para marketing y ventas.

                      




            
            
            
                    <img className="Imgsecu" src="https://i.postimg.cc/3x3QzSGq/ciudadela-cuba.jpg" alt="Institución Educativa Ciudadela Cuba"  />
            <li>



                <strong>Sistema de Gestión de Tareas:</strong> Desarrollé una aplicación web para la gestión de tareas y proyectos utilizando React para el frontend y Node.js para el backend. Este proyecto me permitió aplicar mis conocimientos en desarrollo full-stack y mejorar mis habilidades en la gestión de proyectos.
            </li>
        </ul>
    </main>

  )


}       