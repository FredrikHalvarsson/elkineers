import { useUser } from "@clerk/clerk-react";
import { useCookies } from "react-cookie";

export default function UserCookie() {
    const { isSignedIn, user, isLoaded } = useUser();
    const [cookies, setCookie] = useCookies(['fullName', 'primaryEmail']);
    
    if (!isLoaded) {
      return null;
    }
   
    if (isSignedIn) {
      setCookie('fullName', user.fullName, { path: '/'})
      setCookie('primaryEmail', user.primaryEmailAddress.toString(), {path: '/'})
      return <div style={{marginRight: '10px'}}>Hello {user.firstName}!</div>;
    }
    return <div>Not signed in</div>;
}