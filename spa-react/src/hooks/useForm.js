import { useState } from 'react';

/**
 * useForm — lightweight controlled-form hook.
 * Manages field values, handles change events, and exposes a reset helper.
 *
 * @param {Object} initialValues - key/value pairs for each field
 * @returns {{ values, handleChange, resetForm }}
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
