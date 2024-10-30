import Navbar from "../common/Navbar";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
    return (
        <div className="vh-100 d-flex flex-column">
            <Navbar />
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;
