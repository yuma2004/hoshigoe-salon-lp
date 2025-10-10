import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Metric } from 'web-vitals';
import { RouterProvider } from './router/RouterProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// Stagewise Toolbar - 開発環境でのみ表示
if (process.env.NODE_ENV === 'development') {
  const toolbarConfig = {
    plugins: [], // カスタムプラグインはここに追加
  };

  document.addEventListener('DOMContentLoaded', () => {
    import('@stagewise/toolbar-react').then(({ StagewiseToolbar }) => {
      const toolbarRoot = document.createElement('div');
      toolbarRoot.id = 'stagewise-toolbar-root';
      document.body.appendChild(toolbarRoot);

      ReactDOM.createRoot(toolbarRoot).render(
        <React.StrictMode>
          <StagewiseToolbar config={toolbarConfig} />
        </React.StrictMode>
      );
    }).catch(error => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Stagewise Toolbar の読み込みに失敗しました', error);
      }
    });
  });
}

type MetricWithRating = Metric & { rating?: string };

const logWebVital = (metric: Metric) => {
  const { rating } = metric as MetricWithRating;

  const summary = {
    name: metric.name,
    value: Number(metric.value.toFixed(2)),
    id: metric.id,
    ...(rating ? { rating } : {}),
  };

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.info('[web-vitals]', summary);
  }

  const globalScope = window as typeof window & { dataLayer?: unknown[] };
  if (Array.isArray(globalScope.dataLayer)) {
    globalScope.dataLayer.push({ event: 'web-vitals', ...summary });
  }
};

reportWebVitals(logWebVital);
