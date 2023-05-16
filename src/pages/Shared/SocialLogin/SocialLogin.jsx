import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = ()=> {
    googleSignIn()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }



  return (
    <div className="my-3">
      <div className="divider-vertical text-center">OR</div>
      <button 
      onClick={handleGoogleSignIn}
      className="btn btn-circle btn-outline">G</button>
    </div>
  );
};

export default SocialLogin;
