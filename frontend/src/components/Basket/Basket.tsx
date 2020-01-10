import React from 'react'
import {IBasketProductCard} from "../../types/basket_product";
import BasketProductCard from "../BasketProductCard";
import IsAuth from "../../utils/IsAuth";


const Basket: React.FC = () => {

    const [products, setProducts] = React.useState<IBasketProductCard[]>([])

    React.useEffect(() => {
        void productGet()
    }, [])

    const productGet = React.useCallback(async () => {
        const response = await fetch('http://localhost:8000/api/my-basket/',{
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access')}`
    }
    })

        if(response.ok) {
            const data = await response.json()
            setProducts(data)
        }

    }, [])


    return (
        <div className="basket">
            {IsAuth() && (
                <table>
                    <tr><th>Товар</th><th>Цена</th><th>Количество</th><th> </th></tr>

                    {products.map((prod, index) => (
                        <BasketProductCard key={index} id={prod.id} product={prod.product} number={prod.number}/>))}
                </table>
            )}
        </div>
    )
}

export default Basket