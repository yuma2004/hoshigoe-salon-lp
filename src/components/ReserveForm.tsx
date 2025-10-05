import React, { useMemo, useState } from 'react';
import styles from './ReserveForm.module.css';
import arrowIcon from '../assets/images/arrow_icon.svg';

type ContactMethod = 'phone' | 'email' | 'either';

interface DateTimePreference {
  date: string;
  time: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  preferences: [DateTimePreference, DateTimePreference, DateTimePreference];
  menu: string;
  shop: string;
  requests: string;
  contactMethod: ContactMethod;
  contactTime: string;
  hairRemovalAreas: string[]; // Q1 複数選択
  visitedOtherSalon: string; // Q2 サロン名
  motivation: string; // Q3 自由記述
  interestLevel: number; // Q4 1-5
  agreed: boolean;
}

const DEFAULT_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  preferences: [
    { date: '', time: '' },
    { date: '', time: '' },
    { date: '', time: '' },
  ],
  menu: '',
  shop: '',
  requests: '',
  contactMethod: 'either',
  contactTime: '',
  hairRemovalAreas: [],
  visitedOtherSalon: '',
  motivation: '',
  interestLevel: 3,
  agreed: false,
};

const AREAS = [
  'ヒゲ', 'ワキ', '腕', '手・指', '胸', '腹', '背中', 'VIO', '脚', '足・指', '眉', 'その他'
];

const MENUS = ['無料カウンセリング', 'お試し照射', 'ヒゲ脱毛', '全身脱毛', 'VIO脱毛', 'フェイシャル', '眉ケア', '整体'];
const SHOPS = ['南船場店', 'その他（提携店舗）'];

const TIMES = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

const ReserveForm: React.FC = () => {
  const [state, setState] = useState<FormState>(DEFAULT_STATE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isValidEmail = (value: string) => /.+@.+\..+/.test(value);
  const isValidPhone = (value: string) => /^(?:0\d{9,10}|\+?\d{10,15})$/.test(value.replace(/[-\s]/g, ''));

  const requiredOk = useMemo(() => {
    return (
      state.name.trim().length > 0 &&
      isValidEmail(state.email) &&
      isValidPhone(state.phone) &&
      state.preferences.some(p => p.date && p.time) &&
      state.agreed
    );
  }, [state]);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const updatePreference = (index: number, key: keyof DateTimePreference, value: string) => {
    setState(prev => {
      const next = [...prev.preferences] as FormState['preferences'];
      next[index] = { ...next[index], [key]: value } as DateTimePreference;
      return { ...prev, preferences: next };
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!state.name.trim()) nextErrors.name = 'お名前は必須です';
    if (!isValidEmail(state.email)) nextErrors.email = 'メール形式が正しくありません';
    if (!isValidPhone(state.phone)) nextErrors.phone = '電話番号の形式が正しくありません';
    if (!state.preferences.some(p => p.date && p.time)) nextErrors.preferences = '第1〜第3希望のいずれかを入力してください';
    if (!state.agreed) nextErrors.agreed = '同意事項へのチェックが必要です';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = { ...state };
    console.log('submit reserve form', payload);
    alert('送信が完了しました。担当者よりご連絡いたします。');
    setState(DEFAULT_STATE);
    setErrors({});
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>無料カウンセリング予約フォーム</h1>
        <p className={styles.subtitle}>必要事項をご入力の上、送信してください。</p>
      </div>

      <div className={styles.card}>
        <form onSubmit={handleSubmit} noValidate>
          <h2 className={styles.sectionTitle}>基本情報</h2>
          <div className={styles.grid2}>
            <div className={styles.field}>
              <label className={styles.label}>お名前<span className={styles.required}>*</span></label>
              <input className={styles.input} value={state.name} onChange={e => updateField('name', e.target.value)} placeholder="山田 太郎" />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>メールアドレス<span className={styles.required}>*</span></label>
              <input className={styles.input} type="email" value={state.email} onChange={e => updateField('email', e.target.value)} placeholder="taro@example.com" />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>電話番号<span className={styles.required}>*</span></label>
              <input className={styles.input} inputMode="tel" value={state.phone} onChange={e => updateField('phone', e.target.value)} placeholder="08012345678" />
              <span className={styles.helper}>半角数字・ハイフンなし推奨</span>
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>
          </div>

          <h2 className={styles.sectionTitle}>予約希望日時（第1〜第3）<span className={styles.required}>*</span></h2>
          {[0,1,2].map(i => (
            <div key={i} className={styles.dateTimeRow}>
              <div className={styles.field}>
                <label className={styles.label}>第{i+1}希望 日付</label>
                <input className={styles.input} type="date" value={state.preferences[i].date} onChange={e => updatePreference(i, 'date', e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>第{i+1}希望 時間</label>
                <select className={styles.select} value={state.preferences[i].time} onChange={e => updatePreference(i, 'time', e.target.value)}>
                  <option value="">選択してください</option>
                  {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          ))}
          {errors.preferences && <span className={styles.error}>{errors.preferences}</span>}

          <h2 className={styles.sectionTitle}>ご希望メニュー・店舗</h2>
          <div className={styles.grid2}>
            <div className={styles.field}>
              <label className={styles.label}>ご希望メニュー</label>
              <select className={styles.select} value={state.menu} onChange={e => updateField('menu', e.target.value)}>
                <option value="">選択してください</option>
                {MENUS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>店舗（該当時）</label>
              <select className={styles.select} value={state.shop} onChange={e => updateField('shop', e.target.value)}>
                <option value="">選択してください</option>
                {SHOPS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>ご要望・連絡希望手段／時間帯</h2>
          <div className={styles.grid2}>
            <div className={styles.field}>
              <label className={styles.label}>連絡希望手段</label>
              <div className={styles.radioGroup}>
                {[
                  { key: 'either', label: 'どちらでも' },
                  { key: 'phone', label: '電話' },
                  { key: 'email', label: 'メール' },
                ].map(opt => (
                  <label key={opt.key}>
                    <input type="radio" name="contactMethod" checked={state.contactMethod === (opt.key as ContactMethod)} onChange={() => updateField('contactMethod', opt.key as ContactMethod)} /> {opt.label}
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>連絡希望時間帯</label>
              <input className={styles.input} value={state.contactTime} onChange={e => updateField('contactTime', e.target.value)} placeholder="平日18〜21時 希望 など" />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>ご要望（自由記述）</label>
            <textarea className={styles.textarea} value={state.requests} onChange={e => updateField('requests', e.target.value)} placeholder="気になる点や体質などがあればご記入ください" />
          </div>

          <h2 className={styles.sectionTitle}>事前アンケート</h2>
          <div className={styles.field}>
            <label className={styles.label}>1 どこの脱毛が気になりますか？（複数選択可）</label>
            <div className={styles.checkboxGroup}>
              {AREAS.map(a => (
                <label key={a}>
                  <input type="checkbox" checked={state.hairRemovalAreas.includes(a)} onChange={e => {
                    const checked = e.target.checked;
                    updateField('hairRemovalAreas', checked ? [...state.hairRemovalAreas, a] : state.hairRemovalAreas.filter(x => x !== a));
                  }} /> {a}
                </label>
              ))}
            </div>
          </div>
          <div className={styles.grid2}>
            <div className={styles.field}>
              <label className={styles.label}>2 他の脱毛サロンに行ったことはあります？（サロン名）</label>
              <input className={styles.input} value={state.visitedOtherSalon} onChange={e => updateField('visitedOtherSalon', e.target.value)} placeholder="（例）◯◯サロン" />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>4 脱毛に対する興味度（1-5）</label>
              <input className={styles.input} type="number" min={1} max={5} value={state.interestLevel} onChange={e => updateField('interestLevel', Number(e.target.value))} />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>3 脱毛しようと思ったきっかけ、タイミング</label>
            <textarea className={styles.textarea} value={state.motivation} onChange={e => updateField('motivation', e.target.value)} placeholder="自由記述" />
          </div>

          <h2 className={styles.sectionTitle}>同意事項</h2>
          <div className={styles.agreement}>
            <ul>
              <li>予約は当社からの確定連絡後に成立すること</li>
              <li>キャンセル規定／個人情報の取扱いへの同意</li>
            </ul>
            <label>
              <input type="checkbox" checked={state.agreed} onChange={e => updateField('agreed', e.target.checked)} /> 同意します<span className={styles.required}>*</span>
            </label>
            {errors.agreed && <div className={styles.error}>{errors.agreed}</div>}
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.submitButton} disabled={!requiredOk}>
              <span>送信する</span>
              <img src={arrowIcon} alt="矢印" width={16} height={16} />
            </button>
            <button type="button" className={styles.secondaryButton} onClick={() => { setState(DEFAULT_STATE); setErrors({}); }}>リセット</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReserveForm;


