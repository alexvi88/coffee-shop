import React from 'react'
import { Link} from 'react-router-dom'

interface ILoginProps {
    history: any
}

const Login: React.FC<ILoginProps> = (props) => {
    const { history } = props

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [errormessage, setErrorMessage] = React.useState('')


    const onSubmit = React.useCallback(
        async (event) => {
            event.preventDefault()
            const response = await fetch('http://localhost:8000/api/token/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if(response.ok) {
                const {access, refresh} = await response.json()

                window.localStorage.setItem('access', access)
                window.localStorage.setItem('refresh', refresh)
                if (history) {
                  history.push('')
                  window.location.reload()
                }
            }
            else{
                setErrorMessage('Неправильные данные для входа')
            }
        },
        [username, password]
    )

    const onChangeUsername = React.useCallback(
        (event) => {
            setUsername(event.target.value)
        },
        [username]
    )

    const onChangePassword = React.useCallback(
        (event) => {
            setPassword(event.target.value)
        },
        [password]
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
                           onChange={onChangeUsername}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Пароль</label>
                    <input type="password"
                           name="password"
                           required
                           value={password}
                           onChange={onChangePassword}
                    />
                </div>
                <button type="submit" onClick={onSubmit}>Войти</button>
            </form>
        </section>
    )
}

export default Login