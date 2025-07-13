import React from 'react';
import styles from './Features.module.css';
import arrowIcon from '../assets/images/arrow_icon.svg';

interface Feature {
  number: string;
  title: React.ReactNode; // JSX を許可
  description: React.ReactNode;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      number: "０1",
      title: "都度払い制で安心",
      description: "お財布にも優しく、気軽に試せます"
    },
    {
      number: "０2",
      title: (
        <>
          高品質な
          <br className={styles.mobileOnlyBr} />
          エステティック認定機器使用
        </>
      ),
      description: (
        <>
          安全性と効果を最重視した
          <br className={styles.mobileOnlyBr} />
          純国産の認定マシン
        </>
      )
    },
    {
      number: "０３",
      title: "オーダーメイド脱毛",
      description: (
        <>
          あなたの肌質に合わせた
          <br className={styles.mobileOnlyBr} />
          最適な施術
        </>
      )
    },
    {
      number: "０４",
      title: "施術内容の幅広さ",
      description: (
        <>
          脱毛に加えて、エステ、眉毛ケア、
          <br className={styles.mobileOnlyBr} />
          整体なども同時施術可能
        </>
      )
    },
    {
      number: "０５",
      title: "「美容のサードプレイス」",
      description: (
        <>
          施術だけでなく、リラックスできる
          <br className={styles.mobileOnlyBr} />
          コミュニティも提供
        </>
      )
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>あなたの理想の肌を、</h2>
        <h1 className={styles.title}>メンズ脱毛で叶えます</h1>
      </div>

      <div className={styles.featuresList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.featureBox}>
              <div className={styles.numberBox}>
                <span className={styles.featureLabel}>特徴</span>
                <span className={styles.featureNumber}>{feature.number}</span>
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.ctaButton}>
        <span>詳しいサービス内容をチェック</span>
        <img src={arrowIcon} alt="矢印" className={styles.arrowIcon} />
      </button>
    </section>
  );
};

export default Features; 