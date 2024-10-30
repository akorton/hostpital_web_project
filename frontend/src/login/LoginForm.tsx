const LoginForm = () => {
    return (
        <div className="row flex-grow-1 align-items-center justify-content-center p-5 mx-10">
            <form className="bg-light rounded">
                <div className="m-3">
                    <h1 className="mb-3">Вход</h1>
                    <div className="mb-4">
                        <label htmlFor="email-input" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email-input" placeholder="name@example.com" required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password-input" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="password-input" required/>
                    </div>
                    <button type="submit" className="btn btn-primary form-control mb-4">Войти</button>
                    <a className="btn btn-secondary form-control mb-3" href="/register" >Регистрация</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
