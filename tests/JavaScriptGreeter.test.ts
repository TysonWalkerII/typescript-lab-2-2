import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("does the thing", () => {
    const result = new JavaScriptGreeter("wat it is");
    expect(result.greet("bum")).toBe("console.log(wat it is bum)");
  });
});
