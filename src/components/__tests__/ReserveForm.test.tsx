import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider } from '../../router/RouterProvider';
import { useForm as useFormMock } from '@formspree/react';
import ReserveForm from '../ReserveForm';

const mockSubmit = jest.fn();
const mockReset = jest.fn();

jest.mock('@formspree/react', () => ({
  __esModule: true,
  useForm: jest.fn(),
}));

const renderForm = () =>
  render(
    <RouterProvider>
      <ReserveForm />
    </RouterProvider>,
  );

describe('ReserveForm', () => {
  beforeEach(() => {
    mockSubmit.mockResolvedValue(undefined);
    mockSubmit.mockClear();
    mockReset.mockClear();
    (useFormMock as jest.Mock).mockReturnValue([
      {
        submitting: false,
        succeeded: false,
        errors: null,
        result: null,
      },
      mockSubmit,
      mockReset,
    ]);
  });

  afterEach(() => {
    (useFormMock as jest.Mock).mockReset();
  });

  it('shows validation errors when required fields are missing', async () => {
    renderForm();

    await userEvent.click(screen.getByRole('button', { name: '送信する' }));

    expect(await screen.findByText('お名前は必須です')).toBeInTheDocument();
    expect(screen.getByText('メールアドレスの形式が正しくありません')).toBeInTheDocument();
    expect(screen.getByText('電話番号は必須です')).toBeInTheDocument();
    expect(
      screen.getByText('第1〜第3希望のいずれかに日付と時間をご入力ください'),
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it('submits sanitized payload when form is valid', async () => {
    renderForm();

    await userEvent.type(screen.getByLabelText(/お名前/), '山田 太郎');
    await userEvent.type(screen.getByLabelText(/メールアドレス/), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/電話番号/), '080-1234-5678');
    await userEvent.type(
      screen.getByLabelText(/連絡希望時間帯/),
      '平日18時以降だと助かります',
    );

    const [firstDateInput] = screen.getAllByLabelText(/第1希望 日付/);
    await userEvent.type(firstDateInput, '2025-05-01');
    await userEvent.selectOptions(screen.getByLabelText(/第1希望 時間/), '12:00');

    await userEvent.click(screen.getByLabelText(/同意します/));

    await userEvent.click(screen.getByRole('button', { name: '送信する' }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          name: '山田 太郎',
          email: 'test@example.com',
          phone: '08012345678',
          preferences: ['第1希望: 2025-05-01 12:00'],
          agreed: '同意済み',
        }),
      );
    });
  });
});
