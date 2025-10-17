import React from 'react';
import styles from './Features.module.css';
import CTAButton from './CTAButton';
import { CTA_LABELS } from '../constants/cta';

interface Feature {
  number: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      number: '01',
      title: '都度払いで気軽に通える',
      description: 'コース契約は不要。生活リズムや予算に合わせて無理なく継続できます。',
    },
    {
      number: '02',
      title: (
        <>
          痛みを抑えた
          <br className={styles.mobileOnlyBr} />
          最新エステ脱毛機を採用
        </>
      ),
      description: (
        <>
          ヒゲからボディまで幅広い毛質に対応。<br className={styles.mobileOnlyBr} />
          じっくり丁寧に照射します。
        </>
      ),
    },
    {
      number: '03',
      title: 'オーダーメイドの施術プラン',
      description: (
        <>
          カウンセリングでお悩みをヒアリングし、<br className={styles.mobileOnlyBr} />
          最適な組み合わせをご提案。
        </>
      ),
    },
    {
      number: '04',
      title: '男性専門サロンならではの知見',
      description: (
        <>
          メンズ脱毛専門スタッフが対応。<br className={styles.mobileOnlyBr} />
          仕上がりや理想のスタイルも気軽に相談。
        </>
      ),
    },
    {
      number: '05',
      title: '完全紹介制のプライベート空間',
      description: (
        <>
          他のお客様と時間が重ならない予約制。<br className={styles.mobileOnlyBr} />
          安心して施術に集中できます。
        </>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.header}>
        <p className={styles.subtitle}>あなたの悩みに寄り添う、</p>
        <h2 className={styles.title}>Rêve beauty salon のこだわり</h2>
      </div>

      <div className={styles.featuresList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.featureBox}>
              <div className={styles.numberBox}>
                <span className={styles.featureLabel}>POINT</span>
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

      <CTAButton
        className={styles.ctaButton}
        iconClassName={styles.arrowIcon}
        label={CTA_LABELS.features}
      />
    </section>
  );
};

export default Features;
