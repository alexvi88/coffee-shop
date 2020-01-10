import React from 'react'
import {Simulate} from "react-dom/test-utils";

interface IPasswordProps {
    history: any
}

const Registration: React.FC<IPasswordProps> = (props) => {
    const { history } = props

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const [errormessage, setErrorMessage] = React.useState('')

    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            const data = JSON.stringify({
                username,
                password,
                email
            })

            const response = await fetch('http://localhost:8000/api/users/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })

            if(response.ok) {
                if (history) {
                    history.push('./login')
                    window.location.reload()
                }
            }
            else{
                setErrorMessage('Неправильные данные для регистрации')
            }

        },
        [username, password, email]
    )

    return (
        <section className="login-form">
            <form>
                <h4>{errormessage}</h4>
                <div className="form-item">
                    <label htmlFor="username">Имя</label>
                    <input type="text"
                           name="username"
                           required
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Пароль</label>
                    <input type="password"
                           name="password"
                           required
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={onSubmit}>Зарегистрироваться</button>
            </form>
        </section>
)
}


export default Registration