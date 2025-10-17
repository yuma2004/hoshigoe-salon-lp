import React from 'react';
import styles from './Reviews.module.css';
import voiceA from '../assets/images/voice_a.png';
import voiceB from '../assets/images/voice_b.png';
import CTAButton from './CTAButton';

interface Review {
  name: string;
  avatar: string;
  comment: React.ReactNode;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: 'Aさん（30代・会社員）',
      avatar: voiceA,
      comment: (
        <>
          「ヒゲ剃りの刺激で常に肌荒れしていましたが、通い始めてから朝の身支度がとても楽になりました。」
        </>
      ),
    },
    {
      name: 'Bさん（20代・ITエンジニア）',
      avatar: voiceB,
      comment: (
        <>
          「完全予約制で周りを気にせず通えるのが嬉しい。スタッフさんの丁寧な声かけで毎回安心してお任せできます。」
        </>
      ),
    },
  ];

  return (
    <section className={styles.reviews}>
      <div className={styles.secondSection}>
        <div className={styles.reviewsHeader}>
          <h2 className={`${styles.reviewsTitle} ${styles.pricingTitle}`}>
            ヒゲ脱毛 1回 3,900円（税込）から体験可能
          </h2>
        </div>
        <div className={styles.pricingSection}>
          <div className={styles.pricingCard}>
            <span className={styles.pricingBadge}>都度払い OK</span>
            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>ヒゲ全体</span>
              <span className={styles.priceValue}>3,900</span>
              <span className={styles.priceUnit}>円／回</span>
            </div>
            <div className={styles.tagList}>
              <span className={styles.tag}>カウンセリング無料</span>
              <span className={styles.tag}>肌質チェック付き</span>
              <span className={styles.tag}>当日予約もご相談ください</span>
            </div>
            <CTAButton
              className={styles.pricingCta}
              iconClassName={styles.pricingCtaIcon}
              label="空き状況を相談する"
              to="/reserve"
            />
          </div>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.reviewsHeader}>
          <div className={styles.decorativeLines}>
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
          <h2 className={styles.reviewsTitle}>
            お客様の口コミ
            <br className={styles.desktopOnlyBr} />
            <span className={styles.mobileOnlyBr}>（Google レビュー / LINE 公式アカウント）</span>
          </h2>
          <div className={styles.decorativeLinesBottom}>
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>

        <div className={styles.googleReviewWrapper}>
          <div className={styles.customerReviews}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewerInfo}>
                  <div className={styles.avatarWrapper}>
                    <div className={styles.avatarBorder}>
                      <img
                        src={review.avatar}
                        alt={`${review.name}の写真`}
                        className={styles.avatar}
                        loading="lazy"
                        decoding="async"
                        sizes="80px"
                      />
                    </div>
                  </div>
                  <p className={styles.reviewerName}>{review.name}</p>
                </div>
                <p className={styles.reviewComment}>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.googleReviewFooter}>
          <a
            href="https://www.google.com/search?rlz=1C1GMSM_jaJP1102JP1102&sca_esv=8db88439da67627d&cs=0&output=search&tbm=lcl&kgmid=/g/11mcc4m5xt&q=REVE+beauty+salon&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=1caa0e3389ead14b#lkt=LocalPoiReviews&rlfi=hd:;si:9945055698660296270,l,ChtSRVZFIGJlYXV0eSBzYWxvbiDlpKfpmKrluIKSARRoYWlyX3JlbW92YWxfc2VydmljZQ;mv:[[34.67684707731904,135.5034340504552],[34.676487122680975,135.5029963495448]]"
            className={styles.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google レビューをもっと見る（外部サイト）
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
