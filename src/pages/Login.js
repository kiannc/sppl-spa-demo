import {useNavigate} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const navigateSports = () => {
    // 👇️ navigate to /
    navigate('/sports');
  };

  return (
    <div className="wrapper container">
      <form className="loginForm" onSubmit={navigateSports}>
        <h3 className="mt-3 mb-3">Login</h3>
        <input type="text" id="login" class="second" name="login" placeholder="Username" />
        <input type="text" id="password" class="third" name="login" placeholder="Password" />
        <input type="submit" class="fourth" value="Log In" />
        <h5>Forgot Password?</h5>
      </form>
    </div>
  )
}