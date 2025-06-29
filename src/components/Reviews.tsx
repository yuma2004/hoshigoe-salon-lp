import React from 'react';
import styles from './Reviews.module.css';
import googleReview from '../assets/images/google_review.png';
import voiceA from '../assets/images/voice_a.png';
import voiceB from '../assets/images/voice_b.png';

interface Review {
  name: string;
  avatar: string;
  comment: string;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Aさん（30代・営業職）",
      avatar: voiceA,
      comment: "「施術が丁寧で、痛みも少なく、\n仕上がりに満足しています。\n仕事帰りに通えるので助かります！」"
    },
    {
      name: "Bさん（28歳・IT業界）",
      avatar: voiceB,
      comment: "「高級感のある店内で、\nスタッフさんの対応も素晴らしい。\n安心して通えます。」"
    }
  ];

  return (
    <section className={styles.reviews}>
      <div className={styles.firstSection}>
        <div className={styles.header}>
          <div className={styles.decorativeLines}>
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
          <h2 className={styles.title}>
            5年連続、<br />
            口コミだけで大阪No.１！
          </h2>
          <p className={styles.subtitle}>
            口コミだけで集客、5年連続No.1の実績（個人サロン）
          </p>
        </div>

        <div className={styles.videoPlaceholder}>
          <p>ご提供の動画を埋め込み予定</p>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.reviewsHeader}>
          <div className={styles.decorativeLines}>
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
          <h3 className={styles.reviewsTitle}>
            高評価の口コミ<br />
            GoogleレビューやLINEでのお客様の生の声）
          </h3>
        </div>

        <div className={styles.googleReviewWrapper}>
          <div className={styles.customerReviews}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewerInfo}>
                  <div className={styles.avatarWrapper}>
                    <div className={styles.avatarBorder}>
                      <img src={review.avatar} alt={review.name} className={styles.avatar} />
                    </div>
                  </div>
                  <p className={styles.reviewerName}>{review.name}</p>
                </div>
                <p className={styles.reviewComment}>
                  {review.comment.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < review.comment.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <a href="#" className={styles.reviewLink}>
          口コミページへのリンク（参考用）＞
        </a>
      </div>
    </section>
  );
};

export default Reviews; 