import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Contact } from "../pages/Contact";
import { theme } from "../styles/theme";

describe("Contact Page", () => {
  it("renders the name input", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contact />
      </ThemeProvider>
    );

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
  });
});
