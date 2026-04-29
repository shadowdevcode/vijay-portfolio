import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { HIRE_INFO } from '../constants';

describe('Hero', () => {
  it('shows target role intent even when availability status is separate content', () => {
    render(<Hero />);

    for (const role of HIRE_INFO.roles) {
      expect(screen.getByText(role)).toBeInTheDocument();
    }
  });
});
