import React from 'react'
import {IBasketProductCard}  from '../../types/basket_product'
import {IClientBasketProductCard}  from '../../types/client_basket_card'


const BasketProductCard: React.FC<IBasketProductCard> = (props) => {
    const {product, number, id} = props;
    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            await fetch(`http://localhost:8000/api/my-basket/${id}/`, {
                method: 'delete',
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('access')}`
                }
            })
            window.location.reload()
        },
        []
    )

    const [prod, setProd] = React.useState<IClientBasketProductCard>()

    React.useEffect(() => {
        void prodGet()
    }, [])

    const prodGet = React.useCallback(async () => {
        const response = await fetch(
            `http://localhost:8000/api/products/${product}`,
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('access')}`
                }
            }
        )

        if(response.ok) {
            const data = await response.json()
            setProd(data)
        }

    }, [])

    if (!prod) {
        return null
    }


    return (
        <tr>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>{number}</td>
            <td> <button type="submit" name="delete-from-basket" onClick={onSubmit}>Удалить</button></td>
        </tr>
    )
}

export default BasketProductCard