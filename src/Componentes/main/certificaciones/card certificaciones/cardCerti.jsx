

const CardCerti = ({img, descr, alt, url}) => {


    return (
        <div>            
            <img src={img} alt={alt} width={300} />
            <p>{descr}</p>
            <a href={url} target='_blank'><div>Ver la certificacion</div></a>            
        </div>
    )
}

export default CardCerti;