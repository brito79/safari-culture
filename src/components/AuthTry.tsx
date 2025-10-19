import { auth0 } from "@/lib/auth0";

const AuthTry = async() => {
    const user = await auth0.getSession();
    console.log(user);
    return (
        <div>
            <h1>Auth Try Component</h1>
            {user ? (
                <p>Welcome, {user.user.name}</p>
            ) : (
                <p>Please log in to access this content.</p>
            )}
        </div>
    );
}

export default AuthTry;
