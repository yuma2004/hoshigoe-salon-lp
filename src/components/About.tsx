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
      title: "完全紹介制",
      description: "広告費を一切かけずに口コミのみで集客、5年間大阪No.1売上"
    },
    {
      title: "高品質な施術と\nリラックスできる空間",
      description: "お客様同士のオフ会など、居心地の良さも重視"
    },
    {
      title: "美と健康を支える\nサードプレイス",
      description: "サロンを訪れることで、心身ともにリフレッシュできる"
    }
  ];

  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          完全紹介制で５年継続、<br />
          大阪No.1の実績
        </h2>
      </div>

      <div className={styles.content}>
        <div className={styles.desktopLayout}>
          {/* ① 画像１ */}
          <div className={styles.imageWrapper}>
            <img
              src={salonImage1}
              alt="サロン画像1"
              className={styles.logoImage}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, 80vw"
            />
          </div>

          {/* ② ポイント０（完全紹介制） */}
          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>{points[0].title}</h3>
            <div className={styles.divider} />
            <p className={styles.pointDescription}>{points[0].description}</p>
          </div>

          {/* ③ ポイント１（高品質な施術〜） */}
          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>
              {points[1].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < points[1].title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <div className={styles.divider} />
            <p className={styles.pointDescription}>{points[1].description}</p>
          </div>

          {/* ④ 画像２ */}
          <div className={styles.imageWrapper}>
            <img
              src={salonImage2}
              alt="サロン画像2"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, 80vw"
            />
          </div>

          {/* ⑤ 画像３ */}
          <div className={styles.imageWrapper}>
            <img
              src={salonImage3}
              alt="サロン画像3"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, 80vw"
            />
          </div>

          {/* ⑥ ポイント２（美と健康〜） */}
          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>
              {points[2].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < points[2].title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <div className={styles.divider} />
            <p className={styles.pointDescription}>{points[2].description}</p>
          </div>
        </div>

        {/* Mobile layout */}
        <div className={styles.mobileLayout}>
          <div className={styles.leftColumn}>
            {/* ① 画像１ */}
            <div className={styles.imageWrapper}>
              <img
                src={salonImage1}
                alt="サロン画像1"
                className={styles.logoImage}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 25vw, 80vw"
              />
            </div>

            {/* ② ポイント０（完全紹介制） */}
            <div className={styles.pointItem}>
              <h3 className={styles.pointTitle}>{points[0].title}</h3>
              <div className={styles.divider} />
              <p className={styles.pointDescription}>{points[0].description}</p>
            </div>

            {/* ③ 画像２ */}
            <div className={styles.imageWrapper}>
              <img
                src={salonImage2}
                alt="サロン画像2"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 25vw, 80vw"
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            {/* ④ ポイント１（高品質な施術〜） */}
            <div className={styles.pointItem}>
              <h3 className={styles.pointTitle}>
                {points[1].title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < points[1].title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              <div className={styles.divider} />
              <p className={styles.pointDescription}>{points[1].description}</p>
            </div>

            {/* ⑤ 画像３ */}
            <div className={styles.imageWrapper}>
            <img
              src={salonImage3}
              alt="サロン画像3"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 25vw, 80vw"
            />
          </div>

            {/* ⑥ ポイント２（美と健康〜） */}
            <div className={styles.pointItem}>
              <h3 className={styles.pointTitle}>
                {points[2].title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < points[2].title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
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
