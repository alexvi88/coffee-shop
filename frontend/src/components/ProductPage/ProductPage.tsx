import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '../../assets/image.jpg'
import {IMainProductCard} from '../../types/main_product'


interface IProductProps {
    match: {
        params: {
            product_id: number
        }
    }
}


const ProductPage: React.FC<IProductProps> = (props) => {
    React.useEffect(() => {
        void productGet()
    }, [])


    const [product, setProduct] = React.useState<IMainProductCard>()

    const productGet = React.useCallback(async () => {
        const response = await fetch(
            `http://localhost:8000/api/products/${props.match.params.product_id}`,
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('access')}`
                }
            }
        )
        if(response.ok) {
            const data = await response.json()
            setProduct(data)
        }
    }, [])



    if (!product) {
        return null
    }

    const { name, price, description, image} = product

    return (
        <div className="product-page">
            <div className="product-image">
                <img src={image || defaultImage} alt="image"/>
            </div>

            <div className="product-text">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

            <div className="product-page-price">{price} руб.</div>
        </div>
    )
}

export default ProductPage