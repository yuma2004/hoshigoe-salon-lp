import React from 'react';
import styles from './Gallery.module.css';
import bgImage1 from '../assets/images/bg_image_1.png';
import bgImage2 from '../assets/images/bg_image_2.png';
import bgImage3 from '../assets/images/bg_image_3.png';
import bgImage4 from '../assets/images/bg_image_4.png';
import bgImage5 from '../assets/images/bg_image_5.png';

const Gallery: React.FC = () => {
  const images = [
    { src: bgImage1, alt: 'ギャラリー画像1', className: styles.image1 },
    { src: bgImage2, alt: 'ギャラリー画像2', className: styles.image2 },
    { src: bgImage3, alt: 'ギャラリー画像3', className: styles.image3 },
    { src: bgImage4, alt: 'ギャラリー画像4', className: styles.image4 },
    { src: bgImage5, alt: 'ギャラリー画像5', className: styles.image5 },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.gridContainer}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.imageWrapper} ${image.className}`}>
            <div className={styles.imageMask}>
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.overlayContent}>
        <h2 className={styles.title}>
          今すぐ、無料カウンセリングで<br />
          理想の肌を手に入れよう！
        </h2>
        <p className={styles.description}>
          あなたの肌質に合わせた<br />
          最適な脱毛プランをご提案します。<br />
          初めての方でも<br />
          安心してご相談いただけます。
        </p>
      </div>
    </section>
  );
};

export default Gallery; 