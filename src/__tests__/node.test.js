import Node from "../node";

test("that an expect works", () => {
  expect("hello").not.toEqual("chicken");
});
