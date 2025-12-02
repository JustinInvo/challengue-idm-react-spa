// src/pages/Contact.styles.ts
import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 680px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.l};
  background: ${({ theme }) => theme.colors.surface || theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacings.m};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
`;

export const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacings.m};
  grid-template-columns: 1fr;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.s};
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.error : '#d0d7db')};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  outline: none;
  transition: box-shadow 120ms ease, border-color 120ms ease;

  &:focus {
    box-shadow: 0 0 0 3px
      ${({ theme }) =>
        theme.colors.primary ? `${theme.colors.primary}22` : 'rgba(0,0,0,0.06)'};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.s};
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.error : '#d0d7db')};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  outline: none;
`;

export const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.s};
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.error : '#d0d7db')};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 140px;
  font-size: 1rem;
  resize: vertical;
`;

export const ErrorText = styled.span`
  margin-top: 0.35rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.spacings.m};
  padding: 0.8rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* Modal */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
`;

export const ModalBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacings.l};
  border-radius: 10px;
  width: min(520px, 92%);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  text-align: center;
`;

export const CloseBtn = styled.button`
  margin-top: ${({ theme }) => theme.spacings.m};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 0.6rem 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-weight: 600;
`;
