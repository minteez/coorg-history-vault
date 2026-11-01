import { describe, test } from "node:test";
import { deepStrictEqual } from "node:assert";
import { filterTimeline } from "./timeline-filter";
import { timelineSorted } from "../data/timeline";

describe("separate war and rebellion chronology", () => {
  test("the 1834 war selection contains the war event", () => {
    deepStrictEqual(filterTimeline(timelineSorted, { eventId: "coorg-war" }).map((event) => event.sort), [1834]);
  });
  test("rebellion selection contains 1837, not the 1834 war", () => {
    deepStrictEqual(filterTimeline(timelineSorted, { tag: "rebellion" }).map((event) => event.sort), [1837]);
  });
});