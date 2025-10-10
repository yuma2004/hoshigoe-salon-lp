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
      question: '予約方法',
      answer: '公式LINEから簡単に予約可能です。LINEでの相談もOK。',
    },
    {
      question: 'キャンセルポリシー',
      answer: '前日・当日のキャンセルはキャンセル料が発生します。',
    },
    {
      question: '施術部位',
      answer: '部位によりますが、平均して30分～1時間程度です。',
    },
    {
      question: '痛みの程度',
      answer: '痛みはほどんどなく、リラックスした状態で施術を受けていただけます。',
    },
    {
      question: '通う回数',
      answer: 'お客様の肌の状態により異なりますが、1～3回で効果を実感する方が多いです。',
    },
  ];

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>よくあるご質問</h2>

      <div className={styles.faqList}>
        {faqItems.map((item, index) => (
          <div key={item.question} className={styles.faqItem}>
            <div className={styles.questionBox}>
              <div className={styles.questionMark} aria-hidden="true">
                <span>？</span>
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
