import cartReducer, { addToCart, removeFromCart, emptyCart } from "../cart.reducer";

const products = [
    {
        "id": "1",
        "name": "Iphone",
        "price": "500",
        "art": "234234",
        "color": "blue",
        "img": "API/img/iphone12.png"
    },
    {
        "id": "2",
        "name": "Ipod",
        "price": "400",
        "art": "534345",
        "color": "green",
        "img": "API/img/ipod.jpg"
    },
    {
        "id": "3",
        "name": "Ipad",
        "price": "300",
        "art": "234214",
        "color": "white",
        "img": "API/img/ipad.jpg"
    },


]

describe("cartReducer", () => {
    test("should return default state", () => {
        // const initialState = { cartToLocal: [] }
        // const result = cartReducer(initialState, { type: "" })

        expect(cartReducer([], { type: undefined })).toEqual([])
    });
    test("adding items to the cart", () => {
        let action = addToCart({
            "id": "4",
            "name": "Samsung",
            "price": "200",
            "art": "5345345",
            "color": "black",
            "img": "API/img/sams.jpg"
        });
        let newState = cartReducer({ cartToLocal: products }, action)
        expect(newState.cartToLocal.length).toBe(4)
    });

    test("removing from cart", () => {
        let action = removeFromCart({
            "id": "3",
            "name": "Ipad",
            "price": "300",
            "art": "234214",
            "color": "white",
            "img": "API/img/ipad.jpg"
        });
        let newState = cartReducer({ cartToLocal: products }, action)
        expect(newState.cartToLocal.length).toBe(2)
    });
    test("cart clearing", () => {
        let action = emptyCart()
        let newState = cartReducer({ cartToLocal: products }, action)
        expect(newState.cartToLocal).toEqual([])
    })
});
