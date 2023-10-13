import reactLogo from '../../../assets/herramientas/react.svg';
import nodeLogo from '../../../assets/herramientas/node.svg'
import cLogo from '../../../assets/herramientas/c.svg';
import reduxLogo from '../../../assets/herramientas/redux.svg'
import postgresLogo from '../../../assets/herramientas/postgres.svg'
import mysqlLogo from '../../../assets/herramientas/mysql.svg'
import javaScriptLogo from '../../../assets/herramientas/javaScript.svg'
import boostrapLogo from '../../../assets/herramientas/boostrap.svg'

const Tecnologias = () => {


    const tecno = [
        {
            img: reactLogo,
            alt: "Logo de React"
        },
        {
            img: postgresLogo,
            alt: "Logo de Postgres"
        },
        {
            img: nodeLogo,
            alt: "Logo de Node"
        },
        {
            img: cLogo,
            alt: "Logo de C"
        },        
        {
            img: reduxLogo,
            alt: "Logo de Redux"
        },
        {
            img: mysqlLogo,
            alt: "Logo de MySQL"
        },
        {
            img: javaScriptLogo,
            alt: "Logo de Java Script"
        },        
        {
            img: boostrapLogo,
            alt: "Logo de Boostrap"
        },      
    ]


    return (
        <section>
            <h2>Tecnologias que utilizo</h2>
            <div>
            {tecno.map( tecnos => <a href=""><img src={tecnos.img} alt="Logo de react"  width="100"/></a>)}            
            </div>            
        </section>
    )

}

export default Tecnologias;