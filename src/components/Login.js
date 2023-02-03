
import './Login.css';

function Login() {
  return(
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="" class="sign-in-form">
            <h2 class="title">Sign In</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder='Username' />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder='Password' />
            </div>
            <input type="submit" value="Login" class="btn solid"/>
            <p class="social-text">Or Sign-up</p>
          </form>
        </div>
      </div>
      <div class="panels-container"></div>
    </div>
  )
}

export default Login;