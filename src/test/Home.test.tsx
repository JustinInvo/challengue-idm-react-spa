import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import {theme} from "../styles/theme";
import { Home } from "../pages/Home";

// Mock necesario porque ProductCard usa <Link>
vi.mock("react-router-dom", () => ({
  Link: (props: any) => <a {...props} />,
}));

// Render con theme pero SIN archivo extra
const renderWithTheme = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Home Page", () => {

  it("debería renderizar el título principal", () => {
    renderWithTheme(<Home />);
    expect(
      screen.getByText(/productos bancarios/i)
    ).toBeInTheDocument();
  });
});
