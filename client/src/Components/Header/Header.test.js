import Header from "./Header"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../store/store"
import { MemoryRouter } from "react-router-dom"
import '@testing-library/jest-dom'
describe('Header', () => {

    test("Header snapshot", () => {
        const header = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>)
        expect(header).toMatchSnapshot()
    });

    test("checking text", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText("Devices list"))
    });
    test("checking class", () => {
        const { container } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );
        const headerDescription = container.querySelector(".header")
        expect(headerDescription).toBeInTheDocument()
    })

})