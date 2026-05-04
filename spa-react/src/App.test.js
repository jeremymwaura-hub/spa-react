import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App — integration', () => {
  test('renders the page header', () => {
    render(<App />);
    expect(screen.getByText('FOLIO')).toBeInTheDocument();
  });

  test('renders the initial seed projects', () => {
    render(<App />);
    expect(screen.getByText(/Aurum Coffee/i)).toBeInTheDocument();
    expect(screen.getByText(/Vena Magazine/i)).toBeInTheDocument();
    expect(screen.getByText(/Kestrel Architecture/i)).toBeInTheDocument();
  });

  test('adds a new project via the form', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/project title/i), {
      target: { value: 'Test Project' },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: 'A test project description.' },
    });
    fireEvent.click(screen.getByRole('button', { name: /add project/i }));
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  test('shows validation errors on empty submit', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /add project/i }));
    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/description is required/i)).toBeInTheDocument();
  });

  test('filters projects via search', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/search by title/i);
    fireEvent.change(searchInput, { target: { value: 'Aurum' } });
    expect(screen.getByText(/Aurum Coffee/i)).toBeInTheDocument();
    expect(screen.queryByText(/Vena Magazine/i)).not.toBeInTheDocument();
  });

  test('shows empty state when no results match', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/search by title/i), {
      target: { value: 'zzznomatch' },
    });
    expect(screen.getByText(/no projects match/i)).toBeInTheDocument();
  });
});
