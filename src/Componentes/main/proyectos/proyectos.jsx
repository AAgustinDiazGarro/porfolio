import CardProyectos from "./card proyectos/card";
import henry from "../../../assets/certificaciones/henry.jpg"


const Proyectos = () => {

    const proyectos = [
        {
            descr: 'Hola como estan jugando?',
            urlG: 'Esta es la url del proyecto',
            urlP: 'Esta es la url del proyecto',
            img: henry,
            alt:'Este es el mensaje alternativo',
            name: 'Proyecto'
        }
    ]

    return (
        <section>
            {proyectos.map(proy => <CardProyectos key={proy.name} name={proy.name} descr={proy.descr} urlG={proy.urlG} img={proy.img} alt={proy.alt} urlP={proy.urlP}/>)}
        </section>
    )
}

export default Proyectos;

