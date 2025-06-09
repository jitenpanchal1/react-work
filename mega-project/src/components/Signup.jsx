import React, { useState } from 'react';
import authentication from '../auth/auth';
import { login } from '../store/AuthSlice';
import { Link, useNavigate } from 'react-router';
import { BasicButton, Input, Logo } from './Index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const creat = async (data) => {
        setError('');
        try {
            const uaerdata = await authentication.creatacount(data);
            if (uaerdata) {
                const userfind = await authentication.getcurrentacount();
                if (userfind) {
                    dispatch(login(userfind));
                    navigate('/');
                }
            }
        } catch (error) {
            setError('Sign up failed. Try again.');
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                // background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
                // padding: '1rem',
            }}
        >
            <div
                className="card shadow-lg p-4 w-100"
                style={{
                    maxWidth: '500px',
                    borderRadius: '1rem',
                    backgroundColor: '#ffffffcc',
                    backdropFilter: 'blur(5px)',
                }}
            >
                <div className="text-center mb-4">
                    <Logo />
                    <h2 className="fw-bold mb-2">Create Account</h2>
                    <p className="text-muted">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary fw-semibold text-decoration-none">
                            Login here
                        </Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit(creat)}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Full Name</label>
                        <Input
                            type="text"
                            className="form-control rounded-3"
                            placeholder="Enter your name"
                            {...register('name', { required: true })}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <Input
                            type="email"
                            className="form-control rounded-3"
                            placeholder="you@example.com"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                        setError('Email is not valid'),
                                },
                            })}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Password</label>
                        <Input
                            type="password"
                            className="form-control rounded-3"
                            placeholder="••••••••"
                            {...register('password', {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/.test(value) ||
                                        setError('Password must include A-Z, a-z, 0-9 and special char.'),
                                },
                            })}
                        />
                    </div>
                    {/* Error Message */}
                    <div style={{ minHeight: '40px' }}>
                        {error ? (
                            <div className="alert alert-danger py-2 mb-3" role="alert">
                                {error}
                            </div>
                        ) : (
                            <div className="invisible">placeholder</div>
                        )}
                    </div>

                    <div className="d-grid">
                        <BasicButton
                            type="submit"
                            className="btn btn-primary btn-lg rounded-pill shadow-sm"
                        >
                            Sign Up
                        </BasicButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
