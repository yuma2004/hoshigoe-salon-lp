import React from 'react';
import styles from './Footer.module.css';
import arrowIcon from '../assets/images/arrow_icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <button className={styles.ctaButton}>
          <span>LINEで無料カウンセリングを申し込む</span>
        </button>
        
        <div className={styles.arrowIconWrapper}>
          <img src={arrowIcon} alt="矢印" className={styles.arrowIcon} />
        </div>

        <div className={styles.linksSection}>
          <div className={styles.leftSection}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>SNS</h3>
              <div className={styles.divider} />
              <ul className={styles.linksList}>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Googleレビューを見る</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>COMPANY</h3>
              <div className={styles.divider} />
              <ul className={styles.linksList}>
                <li>会社名</li>
                <li>住所</li>
                <li>営業時間</li>
                <li>電話番号</li>
              </ul>
            </div>
          </div>

          <div className={styles.mapPlaceholder}>
            <p>地図の埋め込み</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.legalLinks}>
          <a href="#">特定商取引法表記</a>
          <span className={styles.separator}>|</span>
          <a href="#">プライバシーポリシー</a>
        </div>
        <p className={styles.copyright}>© 2025 Rêve beauty salon</p>
      </div>
    </footer>
  );
};

export default Footer; 