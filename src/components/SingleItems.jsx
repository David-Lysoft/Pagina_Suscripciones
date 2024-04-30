import { moneyFormat } from "../Helper";
const SingleItems = ({price,type,id,eliminarItem,editarItem}) =>{

    const HandleDelete = (e) =>{
        e.preventDefault();
        const answer = window.confirm(`borrar suscrobcion a${type}`);
        if(answer){
            eliminarItem(id)
        }
    }

    const HandleEdit = (e) =>{
        e.preventDefault();
        editarItem(id);
    }

    return (
        
        <div className="single-item">
            <h3>{moneyFormat(Number(price))}</h3>
            <h3>    {type}</h3>
            <a href="#" onClick={HandleDelete}>Borrar</a>
            <a href="#" onClick={HandleEdit}>Editar</a>
        </div> 
    );
}
export default SingleItems