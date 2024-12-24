import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [addCategory, setAddCategory] = useState("");

    const handleCategory =  (e) =>{
        setAddCategory(e); //actualizamos el estado con el valor del input
    }
    const onSubmit = (e) =>{

        e.preventDefault(); //evitamos que el formulario se envie
        if(addCategory.trim().length === 0) return; //validamos que el input no este vacio
        
        onNewCategory(addCategory.toLowerCase()); //enviamos la nueva categoria al componente
        setAddCategory(""); //limpiamos el input

    }
    
  return (
    <>
    <form onSubmit={(e)=>onSubmit(e)}>
        <input type="text" placeholder="Buscar categoria"  
            onChange={(e)=>{handleCategory(e.target.value)}}/>
    </form>
    </>
  )
}

// validamos que el prop sea una funcion
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired

}


