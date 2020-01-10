import React from 'react'
import { Link } from 'react-router-dom'
import {IArticle} from '../../types/article'


interface IArticleProps {
    match: {
        params: {
            article_id: number
        }
    }
}


const ArticlePage: React.FC<IArticleProps> = (props) => {
    React.useEffect(() => {
        void articleGet()
    }, [])


    const [article, setArticle] = React.useState<IArticle>()

    const articleGet = React.useCallback(async () => {
        const response = await fetch(
            `http://localhost:8000/api/articles/${props.match.params.article_id}`,
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('access')}`
                }
            }
        )

        if(response.ok) {
            const data = await response.json()
            console.log(data)
            setArticle(data)
        }

    }, [])

    if (!article) {
        return null
    }

    const { name, text} = article


    return (
        <div className="article">
            <h1>{name}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ArticlePage




