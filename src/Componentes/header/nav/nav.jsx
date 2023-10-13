

function Nav() {

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
      <nav>
        {link.map( link => <a href={link.href}>{link.name}</a>
        )}
      </nav>
    )
  }
  
  export default Nav;