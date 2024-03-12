import { useUser } from "@clerk/clerk-react";

export default function GetUser() {
    const { isSignedIn, user, isLoaded } = useUser();
 
    if (!isLoaded) {
      return null;
    }
   
    if (isSignedIn) {
      return <div>Hello {user.firstName}!</div>;
    }
   
    return <div>Not signed in</div>;
}