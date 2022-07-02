import React  from "react";
import { useState} from "react";


function useFormInputs(initialValue){
    const[value,setValue]=useState('');
    function handleChange(event){
        setValue(event.target.value);
    }
    return{
        value,
        onChange:handleChange,
    };
}
function LoginForm(){
    const email= useFormInputs('');
    const password= useFormInputs('');

    return(
        <form>
            <div>
                Email
            </div>
            <div>
                <input type="text" value={email.value} onChange={email.onChange}/>
            </div>
            <br/>
            <div>Password</div>
            <div>
                <input type="password" value={password.value} onChange={password.onChange}/>
            </div>
            <p>
                <strong>
                    <em>Email:</em>
                </strong>
                {email.value}
                <strong>
                    <em>Password:</em>
                </strong>{' '}
                {password.value}
            </p>
        </form>
    )
}

function SignUpForm(){
    const email= useFormInputs('');
    const password= useFormInputs('');
    const confirmPassword = useFormInputs(' ');

    return(
        <form>
            <div>
                Email
            </div>
            <div>
                <input type="text" value={email.value} onChange={email.onChange}/>
            </div>
            <br/>
            <div>Password</div>
            <div>
                <input type="password" value={password.value} onChange={password.onChange}/>
            </div>
            <div>Confirm Password</div>
            <div>
                <input type="password" value={confirmPassword.value} onChange={confirmPassword.onChange}/>
            </div>
            <p>
                <strong>
                    <em>Email:</em>
                </strong>
                {email.value}
                <strong>
                    <em>Password:</em>
                </strong>
                {password.value}
                <strong>
                    <em>Confirm Password:</em>
                </strong>
                {confirmPassword.value}
            </p>

        </form>
    )
}


function UseForm(props){
    return(
        <div style={{paddingLeft:20}}>
            <h2>Login</h2>
            <LoginForm/>
            <hr/>
            <h3>SignUp</h3>
            {<SignUpForm/>}
        </div>
    );
}
export default UseForm;
