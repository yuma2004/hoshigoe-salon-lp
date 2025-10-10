import React from 'react';
import styles from './ThanksPage.module.css';
import arrowIcon from '../assets/images/arrow_icon.svg';
import { useNavigate } from '../router/RouterProvider';

const ThanksPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToLanding = () => {
    navigate('/', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className={styles.container}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.backAction}>
          <button type="button" className={styles.backButton} onClick={handleBackToLanding}>
            トップへ戻る
          </button>
        </div>
        
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <div className={styles.checkIcon} aria-hidden="true">✓</div>
          </div>
          
          <h1 className={styles.title}>送信完了</h1>
          <p className={styles.message}>
            お問い合わせありがとうございました。<br />
            内容を確認の上、担当者よりご連絡いたします。
          </p>
          
          <div className={styles.details}>
            <p className={styles.detailText}>
              通常1-2営業日以内にご連絡いたします。<br />
              お急ぎの場合は、お電話にてお問い合わせください。
            </p>
          </div>
          
          <div className={styles.actions}>
            <button 
              type="button" 
              className={styles.primaryButton} 
              onClick={handleBackToLanding}
            >
              <span>トップページへ戻る</span>
              <img src={arrowIcon} alt="" width={16} height={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThanksPage;
