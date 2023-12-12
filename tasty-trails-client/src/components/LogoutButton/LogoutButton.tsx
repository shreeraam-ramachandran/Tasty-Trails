import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../../auth/authSlice.ts';
import { useNavigate } from "react-router-dom";
import styles from './LogoutButton.module.scss';
import { useTranslation } from 'react-i18next';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token and log the user out
    dispatch(clearAuth());
    navigate('/login');
    
  };
  const { t } = useTranslation();
  return (
      <div className={styles.logout} onClick={handleLogout}>
        <img src={`${process.env.PUBLIC_URL}/assets/logout-icon.svg`} alt="Logout" className={styles.logoutIcon}/>
        <button className={styles.logoutButton}>{t('Logout')}</button>
      </div>
  );
};

export default LogoutButton;
