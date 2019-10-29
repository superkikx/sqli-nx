import React from "react";
import { render } from "@testing-library/react";

import { MenuSofiane } from "./menu-sofiane";

describe(" MenuSofiane", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MenuSofiane />);
    expect(baseElement).toBeTruthy();
  });
});
