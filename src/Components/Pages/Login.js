import React from 'react'

function Login() {
  return (
    <div class="main-wrapper">
<div class="account-content">
<div class="login-wrapper">
<div class="login-content">
<div class="login-userset">
<div class="login-logo">
<img src="assets/img/pneuma.png" alt="img"/>
</div>
<div class="login-userheading">
<h3>Sign In</h3>
<h4>Please login to your account</h4>
</div>
<div class="form-login">
<label>Email</label>
<div class="form-addons">
<input type="text" placeholder="Enter your email address"/>
<img src="assets/img/icons/mail.svg" alt="img"/>
</div>
</div>
<div class="form-login">
<label>Password</label>
<div class="pass-group">
<input type="password" class="pass-input" placeholder="Enter your password"/>
<span class="fas toggle-password fa-eye-slash"></span>
</div>
</div>
<div class="form-login">
<div class="alreadyuser">
<h4><a href="forgetpassword.html" class="hover-a">Forgot Password?</a></h4>
</div>
</div>
<div class="form-login">
<a class="btn btn-login" href="index.html">Sign In</a>
</div>

</div>
</div>
<div class="login-img">
<img src="https://www.spherewms.com/hubfs/blog-files/SPH%20Whse%20Inv%20Mgmt%20Blog-shutterstock_1930996376.jpg" alt="img"/>
</div>
</div>
</div>
</div>
  )
}

export default Login