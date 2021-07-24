import React from 'react';
import style from './login.module.scss';
import { Field, Formik } from 'formik';

export const Login = (props) => {

    return (
        <div className={style.login__wrapper}>
            <div className={style.login__content}>
                <div className={style.login__header}>
                    <h3>Login</h3>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        rememberMe: false,
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Обязательно';
                        }
                        if (!values.password) {
                            errors.password = 'Обязательно';
                        }
                        else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            props.getAuth(values.email, values.password, values.rememberMe)
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,

                    }) => (

                        <form onSubmit={handleSubmit} className={style.login__form}>
                            <span className={style.error}>{props.error}</span>
                            <div className={style.login__login}>
                                <p>Email</p>
                                <input id="email" type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} type="text" className={style.login__input}>
                                </input>
                                <span className={style.error}>{errors.email && touched.email && errors.email}</span>
                            </div>
                            <div className={style.login__password}>
                                <p>password</p>
                                <input id="password" type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} className={style.password__input}>
                                </input>
                                <span className={style.error}>{errors.password && touched.password && errors.password}</span>
                            </div>
                            
                            <div className={style.login__button}>
                                <div className={style.checkbox}>
                                    <Field className={style.checkbox} onBlur={handleBlur} type="checkbox" name="rememberMe"/>Remember me
                                </div>
                                <button type="submit" disabled={isSubmitting}>Авторизоваться</button>
                            </div>
                        </form>
                        )}
                        </Formik>
            </div>
        </div >
    )

}
