import test from "ava"
import leftpad from "../"

test("left pad", (t) => {
  t.is(leftpad("foo", 5), "  foo")
  t.is(leftpad("foobar", 6), "foobar")
  t.is(leftpad(1, 2, 0), "01")
  t.is(leftpad(1, 2, "-"), "-1")
})
