import SingleItems from "./SingleItems";

const DisplayItems = ({subs,eliminarItem, editarItem}) =>{
    return (
        <>
            <h2>Suscribciones</h2>
            {
                subs.map(items => (
                    <SingleItems
                    key={items.id}
                    id={items.id}
                    price={items.price}
                    type={items.type}
                    eliminarItem={eliminarItem}
                    editarItem={editarItem}
                    />
                ))
            }
        </>
    );
}
export default DisplayItems; 