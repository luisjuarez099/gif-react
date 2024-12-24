import { useState } from "react"
import {AddCategory, GriftGrid} from "./components/";

export const GiftExpertApp = () => {
  
  const [categories, setCategories] = useState([]); //inicializamos el estado con un array vacio
  
  const onAddCategory =  ( newCategory) =>{
    if( categories.includes(newCategory)) return; //validamos que la categoria no exista
    setCategories([newCategory.toLowerCase(), ...categories]); //agregamos la nueva categoria al estado
  }
  return (
    <>
      <h1>Gift react app</h1>
    {/* Aregamos nuevo comonente que a su vez viene con un prop
     que es una funcion */}
      <AddCategory onNewCategory = {onAddCategory}   /> 
      <hr />
      
        {categories.map((cat)=>
          ( 
            <>
              <GriftGrid  key={cat} category= {cat} />
            </>
        )
        )}
    </>
  )
}
