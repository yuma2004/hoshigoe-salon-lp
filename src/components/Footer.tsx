import React from 'react';
import styles from './Footer.module.css';
import CTAButton from './CTAButton';
import { CTA_LABELS } from '../constants/cta';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <CTAButton
          className={styles.ctaButton}
          iconClassName={styles.arrowIcon}
          label={CTA_LABELS.primary}
          aria-label="無料カウンセリングを予約する"
        />
        
        <div className={styles.linksSection} data-reveal>
          <div className={styles.leftSection}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>SNS</h3>
              <div className={styles.divider} />
              <ul className={styles.linksList}>
                <li><a href="https://www.instagram.com/reve_osaka/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li>
                  <a
                    href="https://www.google.com/search?rlz=1C1GMSM_jaJP1102JP1102&sca_esv=8db88439da67627d&cs=0&output=search&tbm=lcl&kgmid=/g/11mcc4m5xt&q=REVE+beauty+salon&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=1caa0e3389ead14b#lkt=LocalPoiReviews&rlfi=hd:;si:9945055698660296270,l,ChtSRVZFIGJlYXV0eSBzYWxvbiDlpKfpmKrluIKSARRoYWlyX3JlbW92YWxfc2VydmljZQ;mv:[[34.67684707731904,135.5034340504552],[34.676487122680975,135.5029963495448]]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Googleレビューを見る
                  </a>
                </li>
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

      <div className={styles.bottomBar} data-reveal>
        <div className={styles.legalLinks}>
          <a href="/hoshigoe-salon-lp/terms.html" target="_blank" rel="noopener noreferrer">特定商取引法表記</a>
          <span className={styles.separator}>|</span>
          <a href="/hoshigoe-salon-lp/privacy.html" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
        </div>
        <p className={styles.copyright}>© 2025 Rêve beauty salon</p>
      </div>
    </footer>
  );
};

export default Footer; 
