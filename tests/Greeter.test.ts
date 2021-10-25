import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
  test("does the thing", () => {
    const result = new Greeter("Hello");
    expect(result.greeting).toBe("Hello");
  });
  test("does the thing", () => {
    const result = new Greeter("get em");
    expect(result.greet("taco")).toBe("get em taco");
  });
});
