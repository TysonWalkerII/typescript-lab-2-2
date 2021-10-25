import { HtmlGreeter } from "../src/HtmlGreeterClass";

describe("HtmlGreeterClass", () => {
  test("does the thing", () => {
    const result = new HtmlGreeter("sup");
    expect(result.greet("porkii")).toBe("<h1>sup porkii</h1>");
  });
});
