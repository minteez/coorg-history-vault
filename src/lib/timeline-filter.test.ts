import { describe, expect, test } from "bun:test";
import { filterTimeline } from "./timeline-filter";
import { timelineSorted } from "../data/timeline";

describe("separate war and rebellion chronology", () => {
  test("the 1834 war selection contains the war event", () => {
    expect(filterTimeline(timelineSorted, { eventId: "coorg-war" }).map((event) => event.sort)).toEqual([1834]);
  });
  test("rebellion selection contains 1837, not the 1834 war", () => {
    expect(filterTimeline(timelineSorted, { tag: "rebellion" }).map((event) => event.sort)).toEqual([1837]);
  });
});