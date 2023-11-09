import style from './form.module.css'

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
    },
    {
      name: "Mensaje ",
      input: "textarea",
      cols: "30",
      rows: "10",
    },
    {
      type: "submit",
      input: "input"
    },
  ];



  return (
    <form action="" className={style.form}>
        {/* Todo lo que use label e input */}
      {formu.map((formu) => {
        return (
          <div  className={style.campos} >
            <label htmlFor={formu.name}>{formu.name}</label>
            <formu.input className={style.input} type={formu.type} name={formu.name} required={formu.required} cols={formu.cols} rows={formu.rows} placeholder={`Escriba su ${formu.name}`} /* value={formu.value} *//>
          </div>
        );
      })}     
      <button>Enviar</button>
    </form>
  );
}

export default Form;
