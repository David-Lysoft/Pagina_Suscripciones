import { useState } from "react";

const FormAddMoney =({SetCount,SetIsValid}) =>{
    const [input,setInput] = useState("");
    const [error,SetError] = useState(false);

    //
    const handleForm = e =>{
        e.preventDefault();
        if(input === "" || Number(input) < 0){
            SetError(true);
            return;  
        }
        SetError(false);
        SetCount(Number(input));
        SetIsValid(true);
        } 
        
        

    return(
        <div className="form-add-money">
            <form onSubmit={handleForm}>
                <p>Agregar presupuesto</p>
                <input type="number" placeholder="300$" onChange={e => setInput(e.target.value)}/>
                <input type="submit" value="Agregar"/>
            </form>
            {error ? <p className="error">Presupuesto invalido</p> : null}
        </div>
    );
}
export default FormAddMoney