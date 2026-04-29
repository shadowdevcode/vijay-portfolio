import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from './Projects';

describe('Projects', () => {
  it('renders a proof-led default set when All filter is active', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Case Studies/i })).toBeInTheDocument();
    expect(screen.getByText(/GitHub-for-PMs Agent/i)).toBeInTheDocument();
    expect(screen.queryByText(/Swish Quick-Commerce/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Show 4 more projects/i })).toBeInTheDocument();
  });

  it('expands the full project list from the default view', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole('button', { name: /Show 4 more projects/i }));

    expect(screen.getByText(/Swish Quick-Commerce/i)).toBeInTheDocument();
  });

  it('prioritizes the intended proof-led project order', () => {
    render(<Projects />);

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent);

    expect(headings.slice(0, 4)).toEqual([
      'ProductOS',
      'WhatsApp: Smart Muting',
      'GitHub-for-PMs Agent',
      'Blinkit (QComm)',
    ]);
  });

  it('filters projects by segment when chip is clicked', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const quickCommerceChip = screen.getByRole('button', { name: /Quick Commerce/i });
    await user.click(quickCommerceChip);

    expect(screen.getByText(/Swish Quick-Commerce/i)).toBeInTheDocument();
    expect(screen.getByText(/Blinkit \(QComm\)/i)).toBeInTheDocument();
    expect(screen.queryByText(/GitHub-for-PMs Agent/i)).not.toBeInTheDocument();
  });

  it('shows filter chips for each segment', () => {
    render(<Projects />);
    expect(screen.getByRole('button', { name: /^All/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AI/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Quick Commerce/i })).toBeInTheDocument();
  });
});
