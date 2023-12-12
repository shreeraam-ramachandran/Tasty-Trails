import React from 'react';
import styles from './SignUpForm.module.scss';
import { useTranslation } from 'react-i18next';

// Props interface for the SignupForm component
interface SignupFormProps {
  formData: {
    firstName: string;
    lastName: string;
    emailId: string;
    userName: string;
    password: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onLoginClick: () => void;
  onGoogleSignup: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ formData, onChange, onSubmit, onLoginClick, onGoogleSignup }) => {
  // Using the translation hook from react-i18next
  const { t } = useTranslation();

  return (
    <div className={styles.coverImage}>
      <div className={styles.signupPage}>
        {/* Tasty Trails Logo */}
        <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Tasty Trails Logo" className={styles.logo}/>
        
        {/* Heading */}
        <h1 className={styles.heading}>{t('Sign Up')}</h1>
        
        {/* Signup Form */}
        <form onSubmit={onSubmit} className={styles.signupForm}>
          {/* First Name Input */}
          <div className={styles.inputContainer}>
            <label htmlFor="firstName" className={styles.inputLabel}>{t('First Name')}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
              placeholder={t("Enter your first name")}
              required
              className={styles.input}
            />
          </div>
          
          {/* Last Name Input */}
          <div className={styles.inputContainer}>
            <label htmlFor="lastName" className={styles.inputLabel}>{t('Last Name')}</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
              placeholder={t("Enter your last name")}
              required
              className={styles.input}
            />
          </div>
          
          {/* Email Input */}
          <div className={styles.inputContainer}>
            <label htmlFor="emailId" className={styles.inputLabel}>{t('Email')}</label>
            <input
              type="email"
              id="emailId"
              name="emailId"
              value={formData.emailId}
              onChange={onChange}
              placeholder={t("Enter your email")}
              required
              className={styles.input}
            />
          </div>
          
          {/* Username Input */}
          <div className={styles.inputContainer}>
            <label htmlFor="userName" className={styles.inputLabel}>{t('Username')}</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={onChange}
              placeholder={t("Enter your username")}
              required
              className={styles.input}
            />
          </div>
          
          {/* Password Input */}
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.inputLabel}>{t('Password')}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder={t("Enter your password")}
              required
              className={styles.input}
            />
          </div>
          
          {/* Signup Button */}
          <button type="submit" className={styles.signupButton}>{t('Sign Up')}</button>
          
          {/* Division Line */}
          <hr className={styles.signupDivision}/>
        </form>
        
        {/* Secondary Signup (Google Signup) */}
        <div className={styles.secondarySignup}>
          <button type="submit" className={styles.secondarySignupButton} onClick={onGoogleSignup}>
            {t('Sign up with Google')}
          </button>
        </div>
        
        {/* Login Redirection */}
        <div className={styles.login}>
          <span className={styles.loginText}>{t('Have an account already?')}</span>
          <button onClick={onLoginClick} className={styles.loginButton}>{t("Log in")}</button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;