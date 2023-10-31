function Login() {
    function handleSubmit(event) {
        event.preventDefault()

        var emailInput = event.target.querySelector('#email-input')
        var passwordInput = event.target.querySelector('#password-input')

        var email = emailInput.value
        var password = passwordInput.value

        console.log(email, password)
    }

    return <div className="view">
        <h1>Login</h1>

        <form id="login-form" className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required />

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required />

            <button className="button" type="submit">Login</button>
        </form>

        <a id="register-link" href="">Register</a>
    </div>
}

function Register() {
    return <div className="view">
        <h1>Register</h1>

        <form id="register-form" className="form">
            <label className="label" htmlFor="name-input">Name</label>
            <input className="input" type="text" id="name-input" title="Name" required />

            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required />

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required />

            <button className="button" type="submit">Register</button>
        </form>

        <a id="login-link" href="">Login</a>
    </div>
}

function Home() {
    return <div>
        <header className="header" aria-label="Header">
            <h1>Home</h1>
            <span id="user-name-span" aria-label="User name">Hello World</span>
            <button id="new-post-button" title="New post" aria-label="New post" className="button">+</button>
            <button id="logout-button" className="button">Logout</button>
        </header>

        <div id="new-post-panel" className="view">
            <h2>New post</h2>

            <form id="new-post-form" className="form">
                <label htmlFor="image-input" className="label">Image</label>
                <input type="url" id="image-input" className="input" required />

                <label htmlFor="image-description-input" className="label">Image description</label>
                <input type="text" id="image-description-input" className="input" required />

                <label htmlFor="text-input" className="label">Text</label>
                <input type="text" id="text-input" className="input" required />

                <button type="submit" className="button">Post</button>
                <button id="cancel-new-post-button" className="button">Cancel</button>
            </form>
        </div>

        <div id="posts-list" aria-label="Posts list" class="view">
            <article>
                <h3>peter@pan.com</h3>
                <img className="post-image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
                    alt="" />
                <p>Smile!</p>
            </article>

            <article>
                <h3>wendy@darling.com</h3>
                <img className="post-image"
                    src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg"
                    alt="" />
                <p>Hello, Kitty!</p>
            </article>
        </div>
    </div>
}

function Logo() {
    return <svg version="1.1"
        width="30" height="30"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="30" height="30" fill="tomato" />

        <circle cx="15" cy="15" r="8" fill="yellow" />

        <polygon points="25,6 5,40 45,40" class="triangle" fill="dodgerblue" />
    </svg>
}

var root = ReactDOM.createRoot(document.getElementById('root'))
root.render([<Logo />, <Login />, <Register />, <Home />])