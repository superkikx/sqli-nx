import React from "react";
import { render } from "@testing-library/react";

import DemoSofiane from "./demo-sofiane";

describe(" DemoSofiane", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DemoSofiane />);
    expect(baseElement).toBeTruthy();
  });
});
