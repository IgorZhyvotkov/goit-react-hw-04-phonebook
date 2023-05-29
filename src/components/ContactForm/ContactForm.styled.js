import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormS = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const Label = styled.label`
  display: block;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const Input = styled(Field)`
  display: block;
  padding: 0.5rem 1rem;
  color: #111827;
  width: 85%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const Button = styled.button`
  display: flex;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #7499a5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;
  justify-content: center;
  width: 60%;
  border-radius: 0.375rem;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  :hover {
    background-color: #4e9a9a;
  }
`;