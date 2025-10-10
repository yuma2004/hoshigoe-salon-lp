import React, { useEffect, useMemo } from 'react';
import { useForm as useFormspree } from '@formspree/react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './ReserveForm.module.css';
import arrowIcon from '../assets/images/arrow_icon.svg';
import { useNavigate } from '../router/RouterProvider';

type ContactMethod = 'phone' | 'email' | 'either';

interface DateTimePreference {
  date?: string;
  time?: string;
}

const AREAS = [
  'ヒゲ',
  'ワキ',
  '腕',
  '手・指',
  '胸',
  '腹',
  '背中',
  'VIO',
  '脚',
  '足・指',
  '眉',
  'その他',
] as const;

const TIMES = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'] as const;
const CONTACT_METHOD_OPTIONS: { value: ContactMethod; label: string }[] = [
  { value: 'either', label: 'どちらでも' },
  { value: 'phone', label: '電話' },
  { value: 'email', label: 'メール' },
];

const sanitizePhone = (value: string) => value.replace(/[-\s]/g, '');
const PHONE_REGEX = /^(?:0\d{9,10}|\+?\d{10,15})$/;

const preferenceSchema = z.object({
  date: z.string().optional(),
  time: z.string().optional(),
});

const reserveFormSchema = z
  .object({
    name: z.string().min(1, 'お名前は必須です'),
    email: z.string().email('メール形式が正しくありません'),
    phone: z
      .string()
      .min(1, '電話番号は必須です')
      .refine((value) => PHONE_REGEX.test(sanitizePhone(value)), {
        message: '電話番号の形式が正しくありません',
      }),
    preferences: z.array(preferenceSchema).length(3),
    requests: z.string(),
    contactMethod: z.enum(['phone', 'email', 'either']),
    contactTime: z.string(),
    hairRemovalAreas: z.array(z.string()).default([]),
    visitedOtherSalon: z.string(),
    motivation: z.string(),
    interestLevel: z.coerce.number().min(1).max(5),
    agreed: z.boolean().refine((value) => value, {
      message: '同意事項へのチェックが必要です',
    }),
  })
  .superRefine((data, ctx) => {
    const hasPreference = data.preferences.some((pref) => pref.date && pref.time);
    if (!hasPreference) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['preferences'],
        message: '第1〜第3希望のいずれかを入力してください',
      });
    }
  });

type ReserveFormValues = z.infer<typeof reserveFormSchema>;

type FormspreePayload = {
  name: string;
  email: string;
  phone: string;
  contactTime: string;
  preferences: string[];
  contactMethod: ContactMethod;
  requests: string;
  hairRemovalAreas: string;
  visitedOtherSalon: string;
  motivation: string;
  interestLevel: string;
  agreed: string;
};

const DEFAULT_VALUES: ReserveFormValues = {
  name: '',
  email: '',
  phone: '',
  preferences: [
    { date: '', time: '' },
    { date: '', time: '' },
    { date: '', time: '' },
  ],
  requests: '',
  contactMethod: 'either',
  contactTime: '',
  hairRemovalAreas: [],
  visitedOtherSalon: '',
  motivation: '',
  interestLevel: 3,
  agreed: false,
};

const buildPreferencesPayload = (preferences: Array<DateTimePreference>): string[] =>
  preferences
    .map((pref, index) =>
      pref?.date && pref?.time ? `第${index + 1}希望: ${pref.date} ${pref.time}` : null
    )
    .filter((value): value is string => Boolean(value));

const ReserveForm: React.FC = () => {
  const [formspreeState, submitToFormspree, resetFormspree] = useFormspree<FormspreePayload>('xnngbzkp', {
    endpoint: 'https://formspree.io/f/xnngbzkp',
  });
  const navigate = useNavigate();
  const quickDateOptions = useMemo(() => {
    const today = new Date();
    const buildISODate = (offset: number) => {
      const base = new Date(today);
      base.setDate(base.getDate() + offset);
      return base.toISOString().split('T')[0];
    };

    const day = today.getDay();
    const daysUntilWeekend = day === 6 ? 0 : day === 0 ? 6 : 6 - day;

    return [
      { label: '今日', value: buildISODate(0) },
      { label: '明日', value: buildISODate(1) },
      { label: '今週末', value: buildISODate(daysUntilWeekend) },
      { label: '来週の同曜日', value: buildISODate(7) },
    ];
  }, []);

  const {
    register,
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ReserveFormValues>({
    resolver: zodResolver(reserveFormSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onBlur',
  });

  useEffect(() => {
    if (formspreeState.succeeded) {
      resetForm(DEFAULT_VALUES);
      resetFormspree();
      navigate('/thanks', { replace: true });
    }
  }, [formspreeState.succeeded, navigate, resetForm, resetFormspree]);

  useEffect(() => {
    if (formspreeState.errors) {
      setError('root', {
        type: 'formspree',
        message: '送信に失敗しました。もう一度お試しください。',
      });
    } else {
      clearErrors('root');
    }
  }, [formspreeState.errors, setError, clearErrors]);

  const onSubmit = async (values: ReserveFormValues) => {
    const payload: FormspreePayload = {
      name: values.name,
      email: values.email,
      phone: sanitizePhone(values.phone),
      contactTime: values.contactTime,
      preferences: buildPreferencesPayload(values.preferences),
      contactMethod: values.contactMethod,
      requests: values.requests,
      hairRemovalAreas: values.hairRemovalAreas.join(', '),
      visitedOtherSalon: values.visitedOtherSalon,
      motivation: values.motivation,
      interestLevel: String(values.interestLevel),
      agreed: values.agreed ? '同意済み' : '未同意',
    };

    try {
      await submitToFormspree(payload);
    } catch (error) {
      console.error('Form submission error', error);
      setError('root', {
        type: 'submit',
        message: '送信に失敗しました。もう一度お試しください。',
      });
    }
  };

  const submissionError = errors.root?.message;
  const submitting = isSubmitting || formspreeState.submitting;
  const preferenceErrorMessage =
    errors.preferences?.message || (errors.preferences ? '第1〜第3希望のいずれかを入力してください' : undefined);

  const handleReset = () => {
    resetForm(DEFAULT_VALUES);
    resetFormspree();
  };

  return (
    <section className={styles.container}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.backAction}>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => {
              navigate('/', { replace: true });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            トップへ戻る
          </button>
        </div>
        <header className={styles.header}>
          <h1 className={styles.title}>無料カウンセリング予約フォーム</h1>
          <p className={styles.subtitle}>必要事項をご入力の上、送信してください。</p>
        </header>

        <div className={styles.card}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>基本情報</h2>
              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    お名前<span className={styles.required}>*</span>
                  </label>
                  <input
                    id="name"
                    className={styles.input}
                    placeholder="山田 太郎"
                    aria-invalid={Boolean(errors.name)}
                    {...register('name')}
                  />
                  {errors.name && (
                    <span className={styles.error} role="alert" aria-live="assertive">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    メールアドレス<span className={styles.required}>*</span>
                  </label>
                  <input
                    id="email"
                    className={styles.input}
                    type="email"
                    placeholder="taro@example.com"
                    aria-invalid={Boolean(errors.email)}
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className={styles.error} role="alert" aria-live="assertive">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">
                    電話番号<span className={styles.required}>*</span>
                  </label>
                  <input
                    id="phone"
                    className={styles.input}
                    inputMode="tel"
                    placeholder="08012345678"
                    aria-invalid={Boolean(errors.phone)}
                    {...register('phone')}
                  />
                  <span className={styles.helper}>半角数字・ハイフンなし推奨</span>
                  {errors.phone && (
                    <span className={styles.error} role="alert" aria-live="assertive">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contactTime">
                    連絡希望時間帯
                  </label>
                  <input
                    id="contactTime"
                    className={styles.input}
                    placeholder="平日18〜21時 希望 など"
                    aria-invalid={Boolean(errors.contactTime)}
                    {...register('contactTime')}
                  />
                </div>
              </div>
            </div>


            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>ご希望日時</h2>
              <p className={styles.sectionDescription}>
                第1希望〜第3希望までご入力ください。調整が必要な場合は追ってご連絡します。
              </p>
              {[0, 1, 2].map((index) => (
                <div className={styles.dateTimeRow} key={`preference-${index}`}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor={`preference-date-${index}`}>
                      第{index + 1}希望 日付
                    </label>
                    <input
                      id={`preference-date-${index}`}
                      className={styles.input}
                      type="date"
                      aria-invalid={Boolean(errors.preferences)}
                      {...register(`preferences.${index}.date` as const)}
                    />
                    <div className={styles.quickDates} role="group" aria-label={`第${index + 1}希望 日付候補`}>
                      {quickDateOptions.map((option) => (
                        <button
                          type="button"
                          key={`${option.value}-${option.label}`}
                          className={styles.quickDateButton}
                          onClick={() =>
                            setValue(`preferences.${index}.date`, option.value, { shouldDirty: true })
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor={`preference-time-${index}`}>
                      第{index + 1}希望 時間
                    </label>
                    <select
                      id={`preference-time-${index}`}
                      className={styles.select}
                      aria-invalid={Boolean(errors.preferences)}
                      {...register(`preferences.${index}.time` as const)}
                    >
                      <option value="">選択してください</option>
                      {TIMES.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
              {preferenceErrorMessage && (
                <span className={styles.error} role="alert" aria-live="assertive">
                  {preferenceErrorMessage}
                </span>
              )}
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>ご要望・連絡希望手段</h2>
              <div className={styles.grid2}>
                <div className={styles.field}>
                  <span className={styles.label}>連絡希望手段</span>
                  <div className={styles.radioGroup} role="radiogroup" aria-label="連絡希望手段">
                    {CONTACT_METHOD_OPTIONS.map((option) => (
                      <label key={option.value}>
                        <input
                          type="radio"
                          value={option.value}
                          {...register('contactMethod')}
                        />{' '}
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="requests">
                    ご要望（自由記述）
                  </label>
                  <textarea
                    id="requests"
                    className={styles.textarea}
                    placeholder="気になる点や体質などがあればご記入ください"
                    {...register('requests')}
                  />
                </div>
              </div>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>事前アンケート</h2>
              <div className={styles.field}>
                <span className={styles.label}>
                  1 どこの脱毛が気になりますか？（複数選択可）
                </span>
                <Controller
                  control={control}
                  name="hairRemovalAreas"
                  render={({ field }) => {
                    const currentValue = Array.isArray(field.value) ? field.value : [];
                    return (
                      <div className={styles.checkboxGroup}>
                        {AREAS.map((area) => {
                          const checked = currentValue.includes(area);
                          return (
                            <label key={area}>
                              <input
                                type="checkbox"
                                value={area}
                                checked={checked}
                                onChange={(event) => {
                                  const { checked: isChecked } = event.target;
                                  const nextValue = isChecked
                                    ? [...currentValue, area]
                                    : currentValue.filter((item) => item !== area);
                                  field.onChange(nextValue);
                                }}
                              />{' '}
                              {area}
                            </label>
                          );
                        })}
                      </div>
                    );
                  }}
                />
              </div>
              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="visitedOtherSalon">
                    2 他の脱毛サロンに行ったことはあります？（サロン名）
                  </label>
                  <input
                    id="visitedOtherSalon"
                    className={styles.input}
                    placeholder="（例）◯◯サロン"
                    {...register('visitedOtherSalon')}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="interestLevel">
                    4 脱毛に対する興味度（1-5）
                  </label>
                  <input
                    id="interestLevel"
                    className={styles.input}
                    type="number"
                    min={1}
                    max={5}
                    {...register('interestLevel', { valueAsNumber: true })}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="motivation">
                  3 脱毛しようと思ったきっかけ、タイミング
                </label>
                <textarea
                  id="motivation"
                  className={styles.textarea}
                  placeholder="自由記述"
                  {...register('motivation')}
                />
              </div>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>同意事項</h2>
              <div className={styles.agreement}>
                <ul>
                  <li>予約は当社からの確定連絡後に成立すること</li>
                  <li>キャンセル規定／個人情報の取扱いへの同意</li>
                </ul>
                <label className={styles.agreementCheck}>
                  <input
                    type="checkbox"
                    aria-invalid={Boolean(errors.agreed)}
                    {...register('agreed')}
                  />{' '}
                  同意します<span className={styles.required}>*</span>
                </label>
                {errors.agreed && (
                  <div className={styles.error} role="alert" aria-live="assertive">
                    {errors.agreed.message}
                  </div>
                )}
              </div>
            </div>

            {submissionError && (
              <div className={styles.error} role="alert" aria-live="assertive">
                {submissionError}
              </div>
            )}

            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={submitting}
              >
                <span>{submitting ? '送信中...' : '送信する'}</span>
                <img src={arrowIcon} alt="" width={16} height={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={handleReset}
                disabled={submitting}
              >
                リセット
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReserveForm;
