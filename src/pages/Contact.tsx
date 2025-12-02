import React, { useState, useRef, useEffect } from 'react';
import {
  Wrapper,
  Title,
  Form,
  Field,
  Label,
  Input,
  Select,
  TextArea,
  ErrorText,
  Button,
  ModalOverlay,
  ModalBox,
  CloseBtn,
} from '../styles/pages/Contact.styles';

type DocType = 'DNI' | 'CE';

type FormState = {
  name: string;
  email: string;
  docType: DocType;
  docNumber: string;
  subject: string;
  message: string;
};

type ErrorsState = {
  name?: string;
  email?: string;
  docNumber?: string;
  subject?: string;
  message?: string;
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    docType: 'DNI',
    docNumber: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  const [modal, setModal] = useState<{ open: boolean; message: string }>({
    open: false,
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Helper: validate single field
  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case 'name': {
        if (!value.trim()) return 'El nombre es obligatorio.';
        // Allow letters (including spanish accents), spaces, apostrophe and hyphen
        const nameRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]+$/;
        if (!nameRegex.test(value)) return 'El nombre no puede contener números ni símbolos.';
        return '';
      }
      case 'email':
        if (!value.trim()) return 'El email es obligatorio.';
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Email inválido.';
        return '';
      case 'docNumber':
        if (!value.trim()) return 'El número de documento es obligatorio.';
        if (!/^[0-9]+$/.test(value)) return 'Solo se permiten números.';
        return '';
      case 'subject':
        return value.trim().length >= 3 ? '' : 'El asunto es obligatorio (mín 3 caracteres).';
      case 'message':
        return value.trim().length >= 10 ? '' : 'El mensaje debe tener al menos 10 caracteres.';
      default:
        return '';
    }
  };

  // onBlur validation
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof FormState;
    const value = e.target.value;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // onChange: prevent numbers in 'name' input by filtering them out immediately
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof FormState;
    let value = e.target.value;

    if (name === 'name') {
      // remove any digit characters while typing
      const filtered = value.replace(/[0-9]/g, '');
      value = filtered;
    }

    setForm((prev) => ({ ...prev, [name]: value }));

    // opcional: actualizar el error del campo en tiempo real si ya existía
    const errorKey = name as keyof ErrorsState;
    setErrors((prev) => ({
      ...prev,
      [errorKey]: prev[errorKey] ? validateField(name, value) : prev[errorKey],
    }));
  };

  // Validate all fields, return boolean indicating if there are errors
  const validateAll = (): boolean => {
    const newErrors: ErrorsState = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      docNumber: validateField('docNumber', form.docNumber),
      subject: validateField('subject', form.subject),
      message: validateField('message', form.message),
    };

    // remove empty strings
    Object.keys(newErrors).forEach((k) => {
      if ((newErrors as any)[k] === '') delete (newErrors as any)[k];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all fields
    const hasErrors = validateAll();
    if (hasErrors) {
      setModal({ open: true, message: 'Por favor corrige los errores en el formulario.' });
      return;
    }

    try {
      setSubmitting(true);
      // Simula llamada POST
      await new Promise((res) => setTimeout(res, 900));
      setModal({ open: true, message: 'Mensaje enviado correctamente ✔️' });
      // reset form opcional
      setForm({
        name: '',
        email: '',
        docType: 'DNI',
        docNumber: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (err) {
      setModal({ open: true, message: 'Ocurrió un error al enviar. Intenta de nuevo.' });
    } finally {
      setSubmitting(false);
    }
  };

  // Focus en el botón close cuando modal abre
  useEffect(() => {
    if (modal.open && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [modal.open]);

  return (
    <Wrapper>
      <Title>Contacto</Title>

      <Form noValidate onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={!!errors.name}
            type="text"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && <ErrorText id="error-name">{errors.name}</ErrorText>}
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={!!errors.email}
            type="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && <ErrorText id="error-email">{errors.email}</ErrorText>}
        </Field>

        <Field>
          <Label htmlFor="docType">Tipo de documento</Label>
          <Select
            id="docType"
            name="docType"
            value={form.docType}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </Select>
        </Field>

        <Field>
          <Label htmlFor="docNumber">Número de documento</Label>
          <Input
            id="docNumber"
            name="docNumber"
            value={form.docNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={!!errors.docNumber}
            type="number"
            inputMode="numeric"
            aria-invalid={!!errors.docNumber}
            aria-describedby={errors.docNumber ? 'error-docNumber' : undefined}
          />
          {errors.docNumber && (
            <ErrorText id="error-docNumber">{errors.docNumber}</ErrorText>
          )}
        </Field>

        <Field>
          <Label htmlFor="subject">Asunto</Label>
          <Input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={!!errors.subject}
            type="text"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'error-subject' : undefined}
          />
          {errors.subject && <ErrorText id="error-subject">{errors.subject}</ErrorText>}
        </Field>

        <Field>
          <Label htmlFor="message">Mensaje</Label>
          <TextArea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={!!errors.message}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'error-message' : undefined}
          />
          {errors.message && <ErrorText id="error-message">{errors.message}</ErrorText>}
        </Field>

        <Button type="submit" disabled={submitting}>
          {submitting ? 'Enviando...' : 'Enviar'}
        </Button>
      </Form>

      {modal.open && (
        <ModalOverlay role="dialog" aria-modal="true" aria-label="Resultado del envío">
          <ModalBox>
            <p>{modal.message}</p>
            <CloseBtn
              ref={closeBtnRef}
              onClick={() => setModal({ open: false, message: '' })}
            >
              Cerrar
            </CloseBtn>
          </ModalBox>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};
