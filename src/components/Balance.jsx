import { useEffect, useState } from "react";
import { moneyFormat } from "../Helper";

const Balance = ({count,subs,spent,SetSpend}) =>{

    const updateBalance = () =>{
        const spent = subs.reduce((total,item)=>Number(item.price) + total,0);
        SetSpend(spent);
    }

    useEffect(() =>{    
        updateBalance();

    }, [subs]);

    return (
        <div className="balance">
            <h3>Presupuesto:{moneyFormat(count)}</h3>
            <h3>Disponible:{moneyFormat(count - spent)}</h3>
            <h3>Gastado:{moneyFormat(spent)}</h3>
        </div>
    );
}
export default Balance