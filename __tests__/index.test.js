// __tests__/index.test.js
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    });
    test('run a case insensitive search', () => {
        render(<Home />)
        const heading = screen.getByText(/home/i)
        expect(heading).toBeInTheDocument()
    })
})