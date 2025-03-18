// __tests__/index.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/app/page'

test('displays data after fetching from API', async () => {
    // Render the component
    render(<App />);

    // Click the "Fetch Data" button
    userEvent.click(screen.getByText('Fetch Data'));

    // Wait for the async data to load and be displayed
    await waitFor(() => screen.getByText('Fetched Data'));

    // Assert that the expected data is rendered
    expect(screen.getByText('Fetched Data')).toBeInTheDocument();
});
