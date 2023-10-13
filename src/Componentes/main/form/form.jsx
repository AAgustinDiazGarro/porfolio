import { Fragment } from "react";

function Form() {
  const formu = [
    {
      name: "nombre",
      type: "text",
      required: true,
      input: "input"
    },
    {
      name: "correo electronico",
      type: "email",
      required: false,
      input: "input"
    },,
    {
      name: "Mensaje ",
      type: "",
      required: false,
      input: "textarea",
      cols: "30",
      rows: "10",
    },
  ];



  return (
    <form action="">
        {/* Todo lo que use label e input */}
      {formu.map((formu) => {
        return (
          <div>
            <label htmlFor={formu.name}>{formu.name}</label><br />
            <formu.input type={formu.type} name={formu.name} required={formu.required} cols={formu.cols} rows={formu.rows}/>
          </div>
        );
      })}
     
      <button>Enviar</button>
    </form>
  );
}

export default Form;
