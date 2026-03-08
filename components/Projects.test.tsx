import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from './Projects';

describe('Projects', () => {
  it('renders all projects when All filter is active', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Case Studies/i })).toBeInTheDocument();
    expect(screen.getByText(/GitHub-for-PMs Agent/i)).toBeInTheDocument();
    expect(screen.getByText(/Swish Quick-Commerce/i)).toBeInTheDocument();
  });

  it('filters projects by segment when chip is clicked', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const quickCommerceChip = screen.getByRole('button', { name: /Quick Commerce/i });
    await user.click(quickCommerceChip);

    expect(screen.getByText(/Swish Quick-Commerce/i)).toBeInTheDocument();
    expect(screen.getByText(/Blinkit Growth Teardown/i)).toBeInTheDocument();
    expect(screen.queryByText(/GitHub-for-PMs Agent/i)).not.toBeInTheDocument();
  });

  it('shows filter chips for each segment', () => {
    render(<Projects />);
    expect(screen.getByRole('button', { name: /^All/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AI/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Quick Commerce/i })).toBeInTheDocument();
  });
});
