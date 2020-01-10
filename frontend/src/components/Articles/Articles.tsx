import React from 'react'
import Article from "../Article";
import {IArticle} from "../../types/article";

const Articles: React.FC = () => {
    const [articles, setArticles] = React.useState<IArticle[]>([])

    React.useEffect(() => {
        void articleGet()
    }, [])

    const articleGet = React.useCallback(async () => {
        const response = await fetch('http://localhost:8000/api/articles/',{
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access')}`
            }
        })
        if(response.ok) {
            const data = await response.json()
            setArticles(data)
        }
    }, [])


    return (
        <div className="articles">
            {articles.map((article, index) => (
                <Article key={index} id={article.id} name={article.name} text={article.text}/>))}
        </div>
    )
}



export default Articles
