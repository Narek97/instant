import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CustomDropDown from "./custom-drop-down.tsx";
import { whiteboardContentMenuItems } from "../../../constants/dropdown";
import { GeneralAppProvider } from "../../../providers/GeneralAppProvider.tsx";
import { userEvent } from "../../../utils/test-utils.tsx";

describe("CustomDropDown", () => {
  it("calls onSelect when an item is clicked", async () => {
    const onSelectMock = vi.fn();
    render(
      <MemoryRouter initialEntries={["/workspace/10/outcome/11"]}>
        <Routes>
          <Route
            path="/workspace/:workspaceID/outcome/:outcomeID"
            element={
              <CustomDropDown
                menuItems={whiteboardContentMenuItems}
                defaultValue={"All"}
                onSelect={onSelectMock}
                selectItemValue={"All"}
                onChange={() => {}}
              />
            }
          />
        </Routes>
      </MemoryRouter>,
      { wrapper: GeneralAppProvider }
    );
    const sectionSelected = document.querySelector(
      "#demo-simple-select-standard"
    );
    expect(sectionSelected).toBeInTheDocument();
    if (sectionSelected) {
      await userEvent.click(sectionSelected);
    }
    await userEvent.click(screen.getByText("My canvas"));
  });
});
