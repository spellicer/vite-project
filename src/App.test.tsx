import { render, screen } from '@testing-library/react';
import { Mock, describe, expect, it } from "vitest";
import App from './App.tsx';
const fetch = global.fetch as Mock<[URL], Promise<Response>>;
describe("App", () => {
  it('renders learn react link', () => {
    const resp: Response = new Response(JSON.stringify({ stuff: 'stuff' }));
    fetch.mockResolvedValue(resp);
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
  });
});
