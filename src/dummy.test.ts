// first test

import dummyAdd from "./dummy";

describe("dummy", () => {
  it("add", () => {
    expect(dummyAdd(3, 4)).toEqual(7);
  });
});
