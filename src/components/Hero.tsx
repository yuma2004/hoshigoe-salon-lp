import React from 'react';
import styles from './Hero.module.css';
import mainVisual from '../assets/images/main_visual.png';
import CTAButton from './CTAButton';
import { CTA_LABELS } from '../constants/cta';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay} />
      <img
        src={mainVisual}
        alt="メインビジュアル"
        className={styles.bgImage}
        loading="eager"
        decoding="async"
        sizes="100vw"
      />
      
      <div className={styles.content}>
        <div className={styles.tagline}>口コミだけで5年連続大阪No.1</div>
        <h2 className={styles.subtitle}>質の高いメンズ脱毛で</h2>
        <h1 className={styles.mainTitle}>
          <span className={styles.titleLine1}>自信を手に</span>
          <span className={styles.titleLine2}>入れよう</span>
        </h1>
        
        <p className={`${styles.description} ${styles.descDesktop}`}>
          単発照射の高品質な施術、<br />
          完全紹介制で実現した効果を<br />
          あなたも体験してみませんか？
        </p>
        
        {/* モバイル用改行位置調整バージョン */}
        <p className={`${styles.description} ${styles.descMobile}`} aria-hidden="true">
          単発照射の<br />
          高品質な施術、<br />
          完全紹介制で<br />
          実現した効果を<br />
          あなたも体験<br />
          してみませんか？
        </p>
        
        <CTAButton
          className={styles.ctaButton}
          iconClassName={styles.arrowIcon}
          label={CTA_LABELS.primary}
        />
      </div>
      
      <div className={styles.gradientOverlay} />
    </section>
  );
};

export default Hero; 
