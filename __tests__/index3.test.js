// __tests__/index.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/app/page';

// Mock the fetch call
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ message: 'Fetched Data' }),
    })
);

test('displays data after fetching from API', async () => {
    // Render the component
    render(<App />);

    // Click the "Fetch Data" button
    userEvent.click(screen.getByText('Fetch Data'));

    // Wait for the async data to load and be displayed
    const fetchedData = await screen.findByText('Fetched Data');

    // Assert that the expected data is rendered
    expect(fetchedData).toBeInTheDocument();
});
