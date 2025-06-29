import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StagewiseToolbar } from '@stagewise/toolbar-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Stagewise Toolbar - 開発環境でのみ表示
if (process.env.NODE_ENV === 'development') {
  const toolbarConfig = {
    plugins: [], // カスタムプラグインはここに追加
  };

  document.addEventListener('DOMContentLoaded', () => {
    const toolbarRoot = document.createElement('div');
    toolbarRoot.id = 'stagewise-toolbar-root';
    document.body.appendChild(toolbarRoot);

    ReactDOM.createRoot(toolbarRoot).render(
      <React.StrictMode>
        <StagewiseToolbar config={toolbarConfig} />
      </React.StrictMode>
    );
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
