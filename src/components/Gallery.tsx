import React from 'react';
import styles from './Gallery.module.css';
import bgImage1 from '../assets/images/bg_image_1.png';
import bgImage2 from '../assets/images/bg_image_2.png';
import bgImage3 from '../assets/images/bg_image_3.png';
import bgImage4 from '../assets/images/bg_image_4.png';
import bgImage5 from '../assets/images/bg_image_5.png';

const Gallery: React.FC = () => {
  const images = [
    { src: bgImage1, alt: 'サロンの施術風景', className: styles.image1 },
    { src: bgImage2, alt: 'サロンの内装写真', className: styles.image2 },
    { src: bgImage3, alt: '施術前のカウンセリングの様子', className: styles.image3 },
    { src: bgImage4, alt: '落ち着いた待合スペース', className: styles.image4 },
    { src: bgImage5, alt: 'ケア用品が並ぶ棚', className: styles.image5 },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.gridContainer}>
        {images.map((image) => (
          <div key={image.alt} className={`${styles.imageWrapper} ${image.className}`}>
            <div className={styles.imageMask}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 20vw, 80vw"
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.overlayContent}>
        <h2 className={styles.title}>
          無料カウンセリングで
          <br />
          理想の肌を手に入れよう
        </h2>
        <p className={styles.description}>
          あなたの肌質に合わせた最適なプランを専任スタッフがご提案します。<br />
          初めての方も安心してご相談ください。
        </p>
      </div>
    </section>
  );
};

export default Gallery;
