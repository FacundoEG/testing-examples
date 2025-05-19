import { describe, expect, it } from "vitest";
import { multiply } from "./multiply";

describe("multiply function", () => {
  it("multiplies 2 * 3 to equal 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
