import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// simple tests for app functionality by student practice
test("renders the app heading", () => {
  render(<App />);
  const heading = screen.getByText(/Moringa Student Project Showcase/i);
  expect(heading).toBeInTheDocument();
});

test("renders the initial projects", () => {
  render(<App />);
  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
  expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
});

test("can add a new project", () => {
  render(<App />);

  // type in the title
  fireEvent.change(screen.getByPlaceholderText(/Enter project title/i), {
    target: { value: "My New Project" },
  });

  // type in the description
  fireEvent.change(screen.getByPlaceholderText(/Enter project description/i), {
    target: { value: "This is my new project" },
  });

  // click the add button
  fireEvent.click(screen.getByText("Add"));

  // check that it shows up
  expect(screen.getByText("My New Project")).toBeInTheDocument();
});

test("search filters projects", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/Search Projects/i), {
    target: { value: "Todo" },
  });

  expect(screen.getByText(/Todo App/i)).toBeInTheDocument();
  expect(screen.queryByText(/Weather App/i)).not.toBeInTheDocument();
});

test("can delete a project", () => {
  render(<App />);

  // there should be delete buttons
  const deleteButtons = screen.getAllByText("Delete");
  expect(deleteButtons.length).toBeGreaterThan(0);

  // click the first delete button
  fireEvent.click(deleteButtons[0]);

  // there should be one less project now
  const remainingDeleteButtons = screen.getAllByText("Delete");
  expect(remainingDeleteButtons.length).toBe(deleteButtons.length - 1);
});
