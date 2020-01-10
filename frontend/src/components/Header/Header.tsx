import React from 'react'
import { Link } from 'react-router-dom'
import IsAuth from "../../utils/IsAuth";

const Header: React.FC = () => {
    const onLogout = React.useCallback(() => {
        window.localStorage.clear()
        window.location.reload()
    }, [])
    return (
        <header>
            <div className="header-item">
                <Link to="/">WESTCOFFEE</Link>
            </div>
            <div className="header-item">
                <Link to="/articles">Статьи</Link>
            </div>
            <div className="header-item">
                <Link to="/basket">Корзина</Link>
            </div>
            <div className="header-item">
                {IsAuth() ?
                    (<div onClick={onLogout}>Выйти</div>)
                    :
                    <Link to="/login">Войти</Link>
                }
            </div>
            {!IsAuth() && (
                <div className="header-item">
                    <Link to="/registration">Регистрация</Link>
                </div>
            )}
        </header>
    )
}

export default Header