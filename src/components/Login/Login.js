import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { setUser, setIsLoading, error, setError, handleGoogleSignIn } =
    useAuth();
  console.log(error);

  // redirecting user to initial route
  const location = useLocation();
  const history = useHistory();
  const Redirect_uri = location.state?.from || "/";

  const GoogleSignInHandler = () => {
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(Redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  return (
    <div className="container-none mx-auto ">
      <div
        className="flex justify-center py-12"
        style={{
          background: `radial-gradient( circle, #58585a, #000000)`,
        }}
      >
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-8/12  bg-cover rounded-l-lg                       
                        bg-no-repeat  bg-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/QMT523m/Hello-IMG1633957860202.jpg')`,
            }}
          ></div>

          <div className="w-full  h-screen flex   lg:w-4/12  rounded-xl lg:rounded-l-none bg-black min-h-screen justify-center items-center">
            <div className="bg-custom text-white w-96 h-auto sm:h-screen lg:w-full rounded-lg lg:rounded-l-none pt-8 pb-8 px-8 flex flex-col    justify-start xl:justify-center items-center">
              <label className="font-light text-4xl mb-4">
                Sign
                <span className="font-bold text-secondary">In</span>
              </label>
              <input
                type="text"
                className="w-full text-gray-700 h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 mb-4"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full text-gray-700 h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 mb-4"
                placeholder="Password"
              />
              <button className="w-full h-12 rounded-lg bg-btn text-gray-200 uppercase font-semibold hover:bg-btnHover  transition mb-4">
                Login
              </button>
              <p className="text-right mb-4">Forgot password</p>
              <div className="flex flex-row justify-center mb-8">
                <span className="absolute bg-white px-4 text-gray-500">
                  or sign-in with
                </span>
                <div className="w-full bg-gray-200 mt-3 h-px"></div>
              </div>
              <button
                onClick={GoogleSignInHandler}
                className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700  transition mb-4"
              >
                Sign with Google
              </button>
              <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700  transition mb-4">
                Sign with Facebook
              </button>
              <button className="w-full h-12 rounded-lg bg-black text-gray-200 uppercase font-semibold hover:bg-gray-900  transition mb-4">
                Sign with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
