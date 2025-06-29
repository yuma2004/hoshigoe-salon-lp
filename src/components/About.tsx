import React from 'react';
import styles from './About.module.css';
import salonImage1 from '../assets/images/salon_image_1.png';
import salonImage2 from '../assets/images/salon_image_2.png';
import salonImage3 from '../assets/images/salon_image_3.png';
import arrowIcon from '../assets/images/arrow_icon.svg';

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
          完全紹介制で5年継続、<br />
          大阪Ｎｏ.1の実績
        </h2>
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <img src={salonImage1} alt="サロン画像1" />
          </div>
          
          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>
              {points[1].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < points[1].title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <p className={styles.pointDescription}>{points[1].description}</p>
            <div className={styles.divider} />
          </div>

          <div className={styles.imageWrapper}>
            <img src={salonImage3} alt="サロン画像3" />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>
              {points[0].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < points[0].title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <p className={styles.pointDescription}>{points[0].description}</p>
            <div className={styles.divider} />
          </div>

          <div className={styles.imageWrapper}>
            <img src={salonImage2} alt="サロン画像2" />
          </div>

          <div className={styles.pointItem}>
            <h3 className={styles.pointTitle}>
              {points[2].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < points[2].title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <p className={styles.pointDescription}>{points[2].description}</p>
          </div>
        </div>
      </div>

      <button className={styles.ctaButton}>
        <span>サロンのこだわりを知る</span>
        <img src={arrowIcon} alt="矢印" className={styles.arrowIcon} />
      </button>
    </section>
  );
};

export default About; 