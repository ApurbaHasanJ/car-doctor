import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  // const from = location.state?.from || { pathname: "/" };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // jwt authentication
        if (user) {
          const loggedUser = {
            email: user.email,
          };
          fetch("https://car-doctor-server-beige-gamma.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(loggedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("jwt response", data);
              localStorage.setItem('car-access-token', data.token);
              navigate(from, { replace: true });
            });
        } else {
          // clear jwt token
          localStorage.removeItem("car-access-token");
        }
        
        console.log(user);
        
        // private navigate

        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:gap-16 gap-8 flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className=" text-center font-semibold text-4xl">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign in"
                  className="btn btn-primary rounded-xl"
                />
              </div>
            </form>
            <h6 className="text-center">
              Don&apos;t have an account?{" "}
              <Link to="/signup">
                <span className="text-[#FF3811] font-semibold hover:underline">
                  Sign Up
                </span>
              </Link>
            </h6>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
