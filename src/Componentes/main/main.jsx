import Certificaciones from "./certificaciones/certificaciones";
import Form from "./form/form";
import Proyectos from "./proyectos/proyectos";
import Tecnologias from "./tecnologias/tecnologias";



function Main() {
  

  return (
    <main>
        <hr />
        <img src="imagen" alt="Imagen" />
        <article>
          <h1>Full Stack Developer</h1>
          <div>
            <p>Escribo algo interesante</p>
            <button>Trabajemos juntos</button>
          </div>
        </article>
        <hr />
        <section>
        <img src="imagen" alt="Aca viene una imagen" />
        <article>
          <h2>Soy Agustin Diaz Garro</h2>
          <p>Desarrollador Frontend enfocado en la experiencia de usuario y diseño de interfaz.<br/>Mi objetivo principal es crear soluciones digitales funcionales, eficientes y fáciles de usar. <br/> Estoy aquí para ayudarte a llevar tu proyecto al siguiente nivel con mi creatividad y compromiso.
          </p>
          <div>Contactame</div>
        </article>
        </section>


        <hr />
        <h2> Resumen de tu perfil</h2>
        <p>Contar brevemente sobre tu valor agregado, sobre experiencias especiales, proyectos</p>
        <hr />
        <h2>Lista de soluciones</h2>
        <p>Q es lo que sabes hacer? Como puedes ayudar a tus potenciales clientes? cuales son tus principales servicios</p>
        <hr />
        <h2>Proyectos principales</h2>
        <Proyectos/>
        <hr />
        <h2>Skilss</h2>
        <Tecnologias/>
        <hr />
        <h2>Logros</h2>
        <p>Cuales son los proyectos mas complejos, tus logros mas importantes sobre cada uno de ellos, cuales fueron tus aportes,  </p>
        <hr />
        <h2>Certificaciones</h2>
        <Certificaciones/>
        <hr />
        <h2>Recomendaciones</h2>
        <hr />
        <h2>Datos de contactos</h2>
        <Form/>
        <hr />
    </main>
  )
}

export default Main;