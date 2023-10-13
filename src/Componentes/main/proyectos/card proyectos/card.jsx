

const CardProyectos = ({img, descr, urlG, alt, urlP, name}) => {


    return (
        <div>            
            <img src={img} alt={alt} width={200} />
            <p>{descr}</p>
            <a href={urlG} target='_blank'><div>Ver el codigo</div></a>
            <a href={urlP} target='_blank'><div>Ver el proyecto</div></a>            
        </div>
    )
}

export default CardProyectos;