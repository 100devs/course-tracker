import { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Redirect } from "react-router-dom";
import Button from "./components/Button"

const Login = () => {

    const { admin, dispatch } = useContext(AuthContext);
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function updateUser(e){
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const login = () => {
        // make call to api/auth/login endpoint and send user object
        // ex 
        // const res = await axios.post('api/auth/login', user)

        // use data returned from the call to set global context with dispatch
        // dispatch(res.data)

        dispatch(true)
    }

    if(admin){
        return (
            <Redirect to='/createPost' /> 
        )
    }
    return (
        <div>
            <form>
                <input
                htmlFor='email'
                label='Email'
                type='email'
                name='email'
                value={user.email}
                onChange={(e) => updateUser(e)}
                >
                </input>
                <input
                htmlFor='password'
                label='Password'
                type='password'
                name='password'
                value={user.password}
                onChange={(e) => updateUser(e)}
                >
                </input>
            </form>
            <Button onClick={login}>Log in</Button>
        </div>
    )
}

export default Login