import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import '../styles/AddProjectForm.css';

const CURRENT_YEAR = new Date().getFullYear().toString();

/* AddProjectForm — controlled form for submitting new projects */
function AddProjectForm({ onAdd }) {
  const [tagsInput, setTagsInput] = useState('');
  const { values, handleChange, resetForm } = useForm({
    title: '',
    description: '',
    year: CURRENT_YEAR,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!values.title.trim()) errs.title = 'Title is required';
    if (!values.description.trim()) errs.description = 'Description is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    onAdd({ ...values, tags });
    resetForm();
    setTagsInput('');
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="add-form-card">
      <div className="add-form-header">
        <h2 className="add-form-title">Add New Project</h2>
        <p className="add-form-subtitle">Document a piece of work for your portfolio</p>
      </div>

      <form onSubmit={handleSubmit} noValidate aria-label="Add project form">
        <div className="field-group">
          <label className="field-label" htmlFor="title">Project Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className={`field-input${errors.title ? ' field-input--error' : ''}`}
            value={values.title}
            onChange={handleChange}
            placeholder="e.g. Brand Identity — Studio Kestrel"
            aria-describedby={errors.title ? 'title-error' : undefined}
          />
          {errors.title && <span id="title-error" className="field-error" role="alert">{errors.title}</span>}
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className={`field-textarea${errors.description ? ' field-input--error' : ''}`}
            value={values.description}
            onChange={handleChange}
            placeholder="What was the project about? What did you contribute?"
            rows={4}
            aria-describedby={errors.description ? 'desc-error' : undefined}
          />
          {errors.description && <span id="desc-error" className="field-error" role="alert">{errors.description}</span>}
        </div>

        <div className="field-row">
          <div className="field-group field-group--half">
            <label className="field-label" htmlFor="tags">Tags <span className="field-hint">(comma-separated)</span></label>
            <input
              id="tags"
              type="text"
              className="field-input"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="Branding, UI/UX, Print"
            />
          </div>
          <div className="field-group field-group--quarter">
            <label className="field-label" htmlFor="year">Year</label>
            <input
              id="year"
              name="year"
              type="number"
              className="field-input"
              value={values.year}
              onChange={handleChange}
              min="2000"
              max="2099"
            />
          </div>
        </div>

        <div className="add-form-footer">
          <button type="submit" className="btn-submit">
            {submitted ? '✓ Added' : 'Add Project'}
          </button>
          {submitted && <span className="submit-success" role="status">Project added to portfolio</span>}
        </div>
      </form>
    </div>
  );
}

export default AddProjectForm;
