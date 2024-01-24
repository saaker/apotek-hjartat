import React from "react";
import { render, screen } from "@testing-library/react";
import Prescriptions from "./Prescriptions";

test("renders learn react link", () => {
  render(<Prescriptions handlePrescriptionClick={() => {}} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
