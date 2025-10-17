import React from 'react';
import styles from './About.module.css';
import salonImage1 from '../assets/images/salon_logo_wall.png';
import salonImage2 from '../assets/images/salon_image_2.png';
import salonImage3 from '../assets/images/salon_image_3.png';
import CTAButton from './CTAButton';
import { CTA_LABELS } from '../constants/cta';

interface Point {
  title: string;
  description: string;
}

const About: React.FC = () => {
  const points: Point[] = [
    {
      title: '紹介だけで広がる信頼',
      description: '完全紹介制でスタートしたサロン。満足度の高い施術が口コミで広がっています。',
    },
    {
      title: '痛みを抑えた最新機器と丁寧なケア',
      description: 'お肌の状態を見極めながら照射レベルを調整。安心して通えるよう細やかに対応します。',
    },
    {
      title: 'カウンセリングからアフターケアまでサポート',
      description: 'ご来店前の不安解消から施術後のケアまで、専任スタッフが一貫してフォローします。',
    },
  ];

  const renderTitleWithBreaks = (text: string) =>
    text.split('\n').map((line, i, arr) => (
      <React.Fragment key={`${line}-${i}`}>
        {line}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          男性専門サロンとして培った
          <br />
          経験と信頼
        </h2>
      </div>

      <div className={styles.content}>
        <div className={styles.desktopLayout}>
          <div className={styles.imageWrapper}>
            <img
              src={salonImage1}
              alt="サロンのロゴウォール"
              className={styles.logoImage}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, 80vw"
            />
          </div>

          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>{points[0].title}</h3>
            <div className={styles.divider} />
            <p className={styles.pointDescription}>{points[0].description}</p>
          </div>

          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>{renderTitleWithBreaks(points[1].title)}</h3>
            <div className={styles.divider} />
            <p className={styles.pointDescription}>{points[1].description}</p>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={salonImage2}
              alt="施術スペースの写真"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, 80vw"
            />
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={salonImage3}
              alt="サロンの内装写真"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, 80vw"
            />
          </div>

          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>{renderTitleWithBreaks(points[2].title)}</h3>
            <div className={styles.divider} />
            <p className={styles.pointDescription}>{points[2].description}</p>
          </div>
        </div>

        <div className={styles.mobileLayout}>
          <div className={styles.leftColumn}>
            <div className={styles.imageWrapper}>
              <img
                src={salonImage1}
                alt="サロンのロゴウォール"
                className={styles.logoImage}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 25vw, 80vw"
              />
            </div>

            <div className={styles.pointItem}>
              <h3 className={styles.pointTitle}>{points[0].title}</h3>
              <div className={styles.divider} />
              <p className={styles.pointDescription}>{points[0].description}</p>
            </div>

            <div className={styles.imageWrapper}>
              <img
                src={salonImage2}
                alt="施術スペースの写真"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 25vw, 80vw"
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.pointItem}>
              <h3 className={styles.pointTitle}>{renderTitleWithBreaks(points[1].title)}</h3>
              <div className={styles.divider} />
              <p className={styles.pointDescription}>{points[1].description}</p>
            </div>

            <div className={styles.imageWrapper}>
              <img
                src={salonImage3}
                alt="サロンの内装写真"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 25vw, 80vw"
              />
            </div>

            <div className={styles.pointItem}>
              <h3 className={styles.pointTitle}>{renderTitleWithBreaks(points[2].title)}</h3>
              <div className={styles.divider} />
              <p className={styles.pointDescription}>{points[2].description}</p>
            </div>
          </div>
        </div>
      </div>

      <CTAButton
        className={styles.ctaButton}
        iconClassName={styles.arrowIcon}
        label={CTA_LABELS.about}
      />
    </section>
  );
};

export default About;
