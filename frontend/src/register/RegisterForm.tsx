
const RegisterForm = () => {

    const specialtyList = ["Акушер-гинеколог", "Доктор1", "Доктор2", "Доктор3", "Доктор4", "Доктор5", "Доктор6"];

    return (
        <div className="row flex-grow-1 align-items-center justify-content-center mx-10">
            <form className="bg-light rounded was-validated">
            <div className="m-3">
                    <h1 className="mb-3">Регистрация</h1>
                    <div className="mb-4">
                        <label htmlFor="name-input" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="text-input" placeholder="Иванович Иван Иванович" required/>
                    </div>
                    <div className="mb-4 row justify-content-evenly">
                        <div className="col-6">
                            <label htmlFor="sex-input" className="form-label">Пол</label>
                            <select className="form-select" id="sex-input" required>
                                <option selected>Мужской</option>
                                <option>Женский</option>
                                <option>Квадробер</option>
                                <option>Затрудняюсь ответить...</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="date-input" className="form-label">Дата рождения</label>
                            <input type="date" className="form-control" id="date-input" required/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone-input" className="form-label">Телефон</label>
                        <input type="tel" className="form-control" id="phone-input" placeholder="+7 (xxx) xxx-xx-xx" pattern="^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$"  required/>
                        <div className="invalid-feedback">Bad phone!</div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="specialty-input" className="form-label">Специальность</label>
                        <select className="form-select" id="specialty-input" required>
                            {specialtyList.map((specialtyName, idx) => <option id={specialtyName} selected={idx===0}>
                                {specialtyName}
                            </option>)}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email-input" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email-input" placeholder="name@example.com" required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password-input" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="password-input" required/>
                    </div>
                    <button type="submit" className="btn btn-primary form-control mb-4">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
