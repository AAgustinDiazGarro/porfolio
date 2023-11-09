import style from './nav.module.css'

function Nav({clase}) {

    const link = [
        {
            name: 'Inicio',
            href : '/'
        },
        {
            name: 'Sobre mi',
            href : 'about'
        },
        {
            name: 'Proyectos',
            href : 'projects'
        },
        {
            name: 'Contacto',
            href : 'contact'
        },
    ]
  

    return (
      <nav className={`${style.nav} ${clase && style.tablet}`} name='nav' >
        {link.map( link => <a href={link.href}>{link.name}</a>
        )}
      </nav>
    )
  }
  
  export default Nav;