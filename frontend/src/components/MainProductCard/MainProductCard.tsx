import React from 'react'
import { Link } from 'react-router-dom'
import {IMainProductCard} from '../../types/main_product'
import defaultImage from '../../assets/image.jpg'

const MainProductCard: React.FC<IMainProductCard> = (props) => {
    const {name, price, description, id, image} = props;

    const onSubmit = React.useCallback(
        async (event) => {
            let in_basket: boolean = false;

            const response = await fetch('http://localhost:8000/api/my-basket/',{
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('access')}`
                }
            })
            const data = await response.json()

            for (let prod of data) {
                if(prod.product === id){
                    await fetch(`http://localhost:8000/api/my-basket/${prod.id}/`, {
                        method: 'put',
                        headers: {
                            'Content-Type': 'application/json',
                             Authorization: `Bearer ${window.localStorage.getItem('access')}`
                        },
                        body: JSON.stringify({ product: id, number: prod.number + 1})
                    })

                    in_basket = true;
                    break;
                }
            }


            if(!in_basket)
            {
                await fetch('http://localhost:8000/api/my-basket/', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${window.localStorage.getItem('access')}`
                    },
                    body: JSON.stringify({product: id, number: 1})
                })
            }

        },
        []
    )





    return (
        <li className="product-wrapper">
            <div className="product">
                <div className="product-photo">
                    <Link to={`/product/${id}`}>
                        <img src={image || defaultImage} alt="image"/>
                    </Link>
                </div>

                <div className="product-price">{price} руб.</div>
                <button className="basket-button" onClick={onSubmit}>
                    В корзину
                </button>
            </div>
        </li>
    )
}

export default MainProductCard