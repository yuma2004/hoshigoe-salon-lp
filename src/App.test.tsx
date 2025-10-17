import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { RouterProvider } from './router/RouterProvider';

const renderApp = () =>
  render(
    <RouterProvider>
      <App />
    </RouterProvider>,
  );

describe('App routing', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  it('renders landing sections on the root route', () => {
    renderApp();
    expect(screen.getByRole('heading', { name: /自信を手に/ })).toBeInTheDocument();
  });

  it('navigates to reserve form when CTA is clicked', async () => {
    renderApp();

    const [primaryCta] = screen.getAllByRole('button', { name: '無料カウンセリングを申し込む' });
    await userEvent.click(primaryCta);

    expect(
      await screen.findByRole('heading', { name: '無料カウンセリング予約フォーム' }),
    ).toBeInTheDocument();
  });

  it('renders thanks page when hash route is /thanks', () => {
    window.location.hash = '#/thanks';
    renderApp();

    expect(screen.getByRole('heading', { name: '送信が完了しました' })).toBeInTheDocument();
  });
});
