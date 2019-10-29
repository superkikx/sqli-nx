import React from "react";
import { render } from "@testing-library/react";

import AudioPlayer from "./audio-player";

describe(" AudioPlayer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AudioPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
