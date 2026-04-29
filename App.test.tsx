import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders main sections', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Proof of Impact/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Case Studies/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Skills & Expertise/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Latest Thoughts/i })).toBeInTheDocument();
  });

  it('renders chat trigger button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /open chat/i })).toBeInTheDocument();
  });

  it('places projects before current-focus content', () => {
    render(<App />);

    const projectsHeading = screen.getByRole('heading', { name: /Case Studies/i });
    const nowNextHeading = screen.getByRole('heading', { name: /Now & Next/i });

    expect(
      projectsHeading.compareDocumentPosition(nowNextHeading) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });
});
