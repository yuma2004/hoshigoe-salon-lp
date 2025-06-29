import React from 'react';
import styles from './Hero.module.css';
import mainVisual from '../assets/images/main_visual.png';
import arrowIcon from '../assets/images/arrow_icon.svg';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay} />
      <img src={mainVisual} alt="メインビジュアル" className={styles.bgImage} />
      
      <div className={styles.content}>
        <div className={styles.tagline}>口コミだけで5年連続大阪No.1</div>
        <h2 className={styles.subtitle}>質の高いメンズ脱毛で</h2>
        <h1 className={styles.mainTitle}>
          <span className={styles.titleLine1}>自信を手に</span>
          <span className={styles.titleLine2}>入れよう</span>
        </h1>
        
        <p className={styles.description}>
          単発照射の高品質な施術、<br />
          完全紹介制で実現した効果を<br />
          あなたも体験してみませんか？
        </p>
        
        <button className={styles.ctaButton}>
          <span>無料カウンセリングを申し込む</span>
          <img src={arrowIcon} alt="矢印" className={styles.arrowIcon} />
        </button>
      </div>
      
      <div className={styles.gradientOverlay} />
    </section>
  );
};

export default Hero; 