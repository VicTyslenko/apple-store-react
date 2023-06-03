import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import AddToList from "./AddToList";


describe("AddToList", () => {
    test("button exists", () => {
        render(
            <AddToList />
        )
        const btn = screen.getByTestId("add-btn")
        expect(btn).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
        expect(btn).not.toBeDisabled()
    })
    test("test button default props text", () => {
        const { getByText } = render(<AddToList text="test" />)
        const addToCart = getByText(/test/i)
        expect(addToCart).toBeInTheDocument()
    })
    test("checking click fn", () => {
        const mockClickEvent = jest.fn()
        const { getByRole } = render(<AddToList onClick={mockClickEvent} />);
        fireEvent.click(getByRole("button"))
        expect(mockClickEvent).toHaveBeenCalledTimes(1)
    })


});

