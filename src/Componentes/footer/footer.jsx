import email from "../../assets/redes/email.svg";
import github from "../../assets/redes/github.svg";
import linkedin from "../../assets/redes/linkedin.svg";
import twiter from "../../assets/redes/twiter.svg";
import wp from "../../assets/redes/wp.svg";


function Footer() {
  const redes = [
    {
      ruta: email,
      link:"./contact",
      name: "email"

    },
    {
      ruta: github,
      link:"https://github.com/AAgustinDiazGarro",
      name: "github"
    },
    {
      ruta: linkedin,
      link:"https://www.linkedin.com/in/agust%C3%ADn-d%C3%ADaz-garro/",
      name: "linkedin"
    },
    {
      ruta: twiter,
      link:"https://twitter.com/AgustnDazGarro1",
      name: "twiter"
    },
    {
      ruta: wp,
      link:"https://wa.me/543772409159",
      name: "whats app"
    },
  ];

  return (
    <footer>
      <p>Agustin Diaz Garro</p>
      <div>
      {redes.map((redes) => (
        <a href={redes.link} target={redes.name}>
          <img src={redes.ruta} alt="" width="25" />
        </a>
      ))}
      </div>
    </footer>
  );
}

export default Footer;
