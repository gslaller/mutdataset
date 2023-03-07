import { } from 'react';
import useAuth from '../hooks/useAuth';

function LoginDisplay() {

    let { login } = useAuth();

    return (<div>
        <button onClick={() => login("github")}> Login Github</button>
        <br />
        <button onClick={() => login("google")}> Login Google</button>
    </div>)
}

function LogoutDisplay() {
    let { logout } = useAuth();
    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    )
}

function UserDisplay() {
    let { user } = useAuth();

    if (user === null) {
        return null;
    }

    return (
        <div>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} alt="user profile" />
        </div>
    )
}

export default function IdCard() {

    let { user } = useAuth();

    return (<div>
        <UserDisplay />
        {user === null ? <LoginDisplay /> : <LogoutDisplay />}
    </div>)

}