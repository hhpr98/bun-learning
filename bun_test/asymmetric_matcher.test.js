import { test, expect } from "bun:test";
expect.extend({
  toCustomEqual(actual, expected) {
    return { pass: this.equals(actual, expected) };
  },
});

test("asymmetric matchers", () => {
  expect(1).toCustomEqual(expect.anything());
  expect(1).toCustomEqual(expect.any(Number));
});
