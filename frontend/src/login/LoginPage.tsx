import Navbar from '../common/Navbar';
import LoginForm from './LoginForm';


const App = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
