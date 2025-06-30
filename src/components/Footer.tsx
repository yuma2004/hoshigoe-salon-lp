import React from 'react';
import styles from './Footer.module.css';
import arrowIcon from '../assets/images/arrow_icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <button className={styles.ctaButton}>
          <span>無料カウンセリングを申し込む</span>
          <img src={arrowIcon} alt="矢印" className={styles.arrowIcon} />
        </button>
        
        <div className={styles.linksSection}>
          <div className={styles.leftSection}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>SNS</h3>
              <div className={styles.divider} />
              <ul className={styles.linksList}>
                <li><a href="https://www.instagram.com/reve_osaka/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="#">Googleレビューを見る</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>COMPANY</h3>
              <div className={styles.divider} />
              <ul className={styles.linksList}>
                <li>beauty salon Rêve</li>
                <li>大阪府大阪市中央区南船場3-3-29 長堀多田ビル2F</li>
                <li>〒542-0081</li>
                <li>10:00〜22:00</li>
                <li>080-1995-4121</li>
              </ul>
            </div>
          </div>

          <div className={styles.mapPlaceholder}>
            <iframe
              src="https://maps.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%8D%97%E8%88%B9%E5%A0%BA3-3-29&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="beauty salon Rêve の地図"
            />
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