export const moneyFormat = amount =>{
    return amount.toLocaleString('es-US',{
    style:'currency',
    currency: 'USD'
    })
}