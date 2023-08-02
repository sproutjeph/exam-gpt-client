import { Heading } from "@/components/base-components";
import { renderWithQueryClient } from "@/test-utils";
import { Music } from "lucide-react";

it("should", () => {
  expect(true).toBe(true);
});

describe("Render Component", () => {
  renderWithQueryClient(<Heading title={""} description={""} icon={Music} />);
});
