import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { ProductDetail } from "../pages/ProductDetail";

// Mock de react-router-dom
vi.mock("react-router-dom", () => ({
  useParams: () => ({ id: "prod-001" }),
  Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

// Render con ThemeProvider (necesario por los spacings)
const renderWithTheme = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("ProductDetail Page", () => {
  it("debería mostrar el botón de volver al home", () => {
    renderWithTheme(<ProductDetail />);

    expect(screen.getByText(/Volver al Home/i)).toBeInTheDocument();
  });
});
