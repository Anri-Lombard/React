import { render, screen } from '@testing-library/react';
import Greetings from './Greetings'

test('renders Hello World as a text', () => {
    // Arrange
    render(<Greetings />);

    // Act
    // ---

    // Assert
    const helloWorldElement = screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument();
})