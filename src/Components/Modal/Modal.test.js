import { render, fireEvent, screen, getByText } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import Modal, { onCancel } from "./Modal";
import ConfirmButton from "../Buttons/ConfirmButton/ConfirmButton"
// const button = jest.mock("../Buttons/ConfirmButton/ConfirmButton", () => () => <p>tested button</p>)



describe("Modal", () => {

    let props;
    beforeEach(() => {
        props = {
            onCancel: jest.fn(),
            onConfirm: jest.fn(),
            text: "text",
        }

    })

    test("test modal fn on click", () => {
        const { getByTestId } = render(<Modal {...props} />)
        fireEvent.click(getByTestId("modal-test-id"));
        expect(props.onCancel).toHaveBeenCalledTimes(1)
    })

    test("test stopPropagation", () => {
        const mockClick = jest.fn();
        const { getByRole } = render(<Modal />);
        const elTest = getByRole("modalWrapper");
        elTest.onclick(mockClick)
        fireEvent.click(elTest)
        expect(elTest).toBeInTheDocument()
    });
    // test("checking if Modal closes onClick confirm or close buttons", () => {
    //     // const mockClick = jest.fn();
    //     const { getByRole, getByTestId } = render(<Modal />);
    //     const modal = getByRole("modalWrapper");
    //     const totalWrapp = getByTestId("modal-test-id")
    //     // totalWrapp.onclick(mockClick);
    //     userEvent.click(totalWrapp)
    //     // <ConfirmButton onClick={mockClick} />
    //     // fireEvent.click(screen.getByText(/cancel/i))
    //     // console.log(button);
    //     // button.onclick(mockClick);
    //     expect(modal).toBeNull()
    // })

    test("checking text props", () => {
        const { getByText } = render(<Modal {...props} />);
        expect(getByText("text")).toHaveTextContent("text")
    })
})

