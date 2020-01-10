import React from 'react'
import MainProductCard from "../MainProductCard";
import {IMainProductCard} from "../../types/main_product";


const Products: React.FC = () => {
    const [products, setProducts] = React.useState<IMainProductCard[]>([])

    React.useEffect(() => {
        void productGet()
    }, [])

    const productGet = React.useCallback(async () => {
        const response = await fetch('http://localhost:8000/api/products/',{
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
        <ul className="products">
            {products.map((prod, index) => (
                <MainProductCard key={index} id={prod.id} name={prod.name} price={prod.price}
                                 description={prod.description} image={prod.image}/>))}
        </ul>
    )
}

export default Products