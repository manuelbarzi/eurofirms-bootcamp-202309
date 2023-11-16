import authenticateUser from '../logic/authenticateUser'

import Button from '../components/Button'
import Link from '../components/Link'
import Field from '../components/Field'
import Form from '../components/Form'

import Logo from '../components/Logo'

function Login(props) {
    console.log('Login')

    function handleLoginSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-field')
        const passwordInput = event.target.querySelector('#password-field')

        const email = emailInput.value
        const password = passwordInput.value

        try {
            window.sessionUserId = authenticateUser(email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <div className="view">
        <Logo />

        <h1>Login</h1>

        <Form onSubmit={handleLoginSubmit}>
            <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

            <Field type="password" id="password-field" title="Password" required>Password</Field>

            {/* <button className="button" type="submit">Login</button> */}
            <Button type="submit">Login</Button>
        </Form>

        <Link onClick={handleRegisterClick}>Register</Link>
    </div>
}

export default Login