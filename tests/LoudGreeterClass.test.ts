import { LoudGreeter } from "../src/LoudGreeterClass";

describe("LoudGreeter", () => {
  test("does the thing", () => {
    const result = new LoudGreeter("yo wassup");
    expect(result.greet("pudgy")).toBe("yo wassup pudgy!");
  });
  test("does the thing", () => {
    const result = new LoudGreeter("yo wassup");
    result.addVolume();
    result.addVolume();
    result.addVolume();
    result.addVolume();
    expect(result.greet("pudgy")).toBe("yo wassup pudgy!!!!!");
  });
});
