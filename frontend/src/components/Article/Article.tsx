import React from 'react'
import { Link } from 'react-router-dom'
import {IArticle} from '../../types/article'

const Article: React.FC<IArticle> = (props) => {
    const {name, text, id} = props;
    return (
        <Link to={`/article/${id}`}>
            <h2>{name}</h2>
        </Link>
    )
}

export default Article