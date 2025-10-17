import React from 'react';
import styles from './FAQ.module.css';
import CTAButton from './CTAButton';
import { CTA_LABELS } from '../constants/cta';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: '予約方法を教えてください。',
      answer: '本ページのフォーム、もしくは公式LINEから24時間いつでもご予約いただけます。空き状況のご相談もお気軽にどうぞ。',
    },
    {
      question: 'キャンセルポリシーはありますか？',
      answer: '前日18時以降および当日のキャンセルは施術料金の50%を頂戴しています。早めのご連絡にご協力ください。',
    },
    {
      question: '施術時間はどのくらいかかりますか？',
      answer: '部位や毛量により異なりますが、ヒゲ全体で約30分、全身の場合は90分前後が目安です。',
    },
    {
      question: '痛みが心配です。',
      answer: '痛みを抑える最新機器を使用し、出力も丁寧に調整します。冷却や保湿ケアを行いながら施術しますのでご安心ください。',
    },
    {
      question: '効果を実感するまで何回くらい必要ですか？',
      answer: '個人差はありますが、ヒゲの場合は6〜10回程度で自己処理が楽になったと感じる方が多いです。カウンセリングで最適な目安をご案内します。',
    },
  ];

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>よくあるご質問</h2>

      <div className={styles.faqList}>
        {faqItems.map((item) => (
          <div key={item.question} className={styles.faqItem}>
            <div className={styles.questionBox}>
              <div className={styles.questionMark} aria-hidden="true">
                <span>Q</span>
              </div>
              <h3 className={styles.question}>{item.question}</h3>
            </div>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>

      <CTAButton
        className={styles.ctaButton}
        iconClassName={styles.arrowIcon}
        label={CTA_LABELS.primary}
      />
    </section>
  );
};

export default FAQ;
