import { useState } from 'react';

/**
 * useForm - small helper hook for keeping form fields in state.
 * I used this for practice with controlled form inputs.
 */
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm };
}

export default useForm;
