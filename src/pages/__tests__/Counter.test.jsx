import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {
  it('renders initial state correctly', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('5');
  });

  it('increments count on click', () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByText('Increment');
    
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
  });

  it('decrements count on click', () => {
    render(<Counter initialCount={5} />);
    const decrementBtn = screen.getByText('Decrement');
    
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('4');
  });

  it('respects minimum limit boundaries', () => {
    render(<Counter initialCount={0} min={0} />);
    const decrementBtn = screen.getByText('Decrement');
    
    expect(decrementBtn).toBeDisabled();
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });

  it('respects maximum limit boundaries', () => {
    render(<Counter initialCount={10} max={10} />);
    const incrementBtn = screen.getByText('Increment');
    
    expect(incrementBtn).toBeDisabled();
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('10');
  });
});