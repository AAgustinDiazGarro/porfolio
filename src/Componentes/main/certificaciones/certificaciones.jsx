import henry from "../../../assets/certificaciones/henry.jpg"
import CardCerti from "./card certificaciones/cardCerti";


const Certificaciones = () => {

    const certificaciones = [
        {
            descr: 'Hola aca vemos las certificacion de henry',
            url: 'Esta es la url del proyecto',
            img: henry,
            alt:'Este es el mensaje alternativo',
            name: 'Proyecto'
        }
    ]

    return (
        <section>
            
            {certificaciones.map(proy => <CardCerti key={proy.name} name={proy.name} descr={proy.descr} img={proy.img} alt={proy.alt} url={proy.url}/>)}
        </section>
    )
}

export default Certificaciones;