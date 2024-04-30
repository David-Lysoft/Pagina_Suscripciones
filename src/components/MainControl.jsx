import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({count}) =>{
    const [subs, SetSubs] = useState([]);
    const [type,SetType] = useState("");
    const [price,SetPrice] = useState("");
    const [editId,SetEditId] = useState("");
    const [spent,SetSpend] = useState(0);   

    const eliminarItem = id => {
        const newList = subs.filter(item => item.id != id );
        SetSubs(newList);
    }

    const editarItem = id => {
        SetEditId(id);
        subs.map(item => {
            if(item.id === id){
                SetType(item.type);
                SetPrice(item.price);
            }
        })
    }

    return (
        <>
        <div className="main-form">
            <Balance count={count} subs={subs} spent={spent} SetSpend={SetSpend}/>
            <FormAddSubs SetType={SetType} SetPrice={SetPrice} type={type} price={price}
            SetSubs={SetSubs} subs={subs} editId={editId} SetEditId={SetEditId} spent={spent} count={count}/>
        </div>
        <DisplayItems subs={subs} eliminarItem={eliminarItem} editarItem={editarItem}/>
        </>
    );
}   

export default MainControl