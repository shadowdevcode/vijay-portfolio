import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatWidget from './ChatWidget';

// Mock the gemini service
vi.mock('../services/geminiService', () => ({
  sendMessageToGemini: vi.fn().mockResolvedValue('Here is my response.'),
}));

describe('ChatWidget', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows chat trigger button when closed', () => {
    render(<ChatWidget />);
    expect(screen.getByRole('button', { name: /open chat/i })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens dialog when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<ChatWidget />);

    await user.click(screen.getByRole('button', { name: /open chat/i }));

    expect(screen.getByRole('dialog', { name: /Vijay/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/ask about my experience/i)).toBeInTheDocument();
  });

  it('displays welcome message when opened', async () => {
    const user = userEvent.setup();
    render(<ChatWidget />);
    await user.click(screen.getByRole('button', { name: /open chat/i }));

    expect(screen.getByText(/Hi! I'm Vijay's AI assistant/i)).toBeInTheDocument();
  });

  it('closes dialog when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<ChatWidget />);
    await user.click(screen.getByRole('button', { name: /open chat/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close chat/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
