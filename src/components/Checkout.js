import { useAuth0 } from "@auth0/auth0-react";
import "../assets/Cart.css"


export const Checkout = () => {
  const { loginWithRedirect, user, isAuthenticated,   } = useAuth0();

  
  return (
    <> 
    {isAuthenticated ? (<h1 style={{fontSize:"50px"}}>Hii!,<br/>{user.name}<br/>Your Item Delivered Sortly</h1>)
    :(<div classname="checkLogin" ><h1>You Have To Login/signup First</h1><br/><button onClick={()=> loginWithRedirect()}>Login/Signup</button></div>)}
    </>
  );
};
