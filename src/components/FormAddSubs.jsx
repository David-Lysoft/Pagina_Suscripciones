import { useState } from "react";

const FormAddSubs = ({SetType,SetPrice,type,price,SetSubs,subs,editId,SetEditId,spent,count}) =>{

    const[error,SetError] = useState(false);
    const[errorMoney,SetErrorMoney] = useState(false);

    const handlesubs = e =>{
        e.preventDefault();

        if(price === "" || Number(price) < 0 || type === ""){
            SetError(true);
            return;
        }
        if(count - spent < Number(price)){
            SetErrorMoney(true);
            return;
        }
        SetErrorMoney(false)
        SetError(false);
        if(editId != ""){
            SetEditId("");
            const newSubs = subs.map(item =>{
                if(item.id === editId){
                    item.type = type;
                    item.price = price;
                }
                return item;
            })
            SetSubs(newSubs);
        } else{
            const data = {
                type: type,
                price: price,
                id: Date.now()
            }
            SetSubs([...subs,data])
        }
        

        
        SetType("");
        SetPrice("");

    }
    return (
        <div className="add-subscription">
            <h3>Agregar Suscripciones</h3>
            <form onSubmit={ handlesubs }>
                <p>Servicios</p>
                <select onChange={e => SetType(e.target.value)} value={type}>
                    <option value="">-- Eligir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyplus">Disney plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star plus</option>
                    <option value="primeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="apletv">Apple tv</option>
                </select>
                <p>precio</p>
                <input type="number" placeholder="0" onChange={e => SetPrice(e.target.value)} value={price}/>
                {editId != "" ?  <input type="submit" value="Actualizar"/> : 
                <input type="submit" value="Agregar"
                />}
            </form>
            {error ? <p className="error">Campos invalidos</p> : null}
            {errorMoney ? <p className="error">Saldo insuficiente</p> : null}
        </div>
    );
}
export default FormAddSubs