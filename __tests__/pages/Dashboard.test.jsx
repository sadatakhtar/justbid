import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/pages/Dashboard';
import { useNavigate } from "react-router-dom";

// Mock useNavigate with Jest
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));

  describe('Dashboard Screen',() => {
    test('renders Dashboard screen', () => {
        const page = render(<Dashboard />);
        expect(page).toMatchSnapshot();
      });

  })

