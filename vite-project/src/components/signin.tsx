import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/auth/auth';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const signIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => console.log(userCredentials))
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={signIn}>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default SignIn;
