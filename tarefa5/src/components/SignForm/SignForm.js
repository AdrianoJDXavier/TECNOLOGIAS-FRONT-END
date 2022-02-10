import React from 'react';
import './SignForm.css';

const SignForm = () => {

    return (
        <div className="div_form shadow">
            <h3>Sign up to my newslatter</h3>
            <form>
                <input className='input' />
                <button className="btn-submit" type="submit">
                    Sign up
                </button>
            </form>
        </div>
    )
};

export default SignForm;