import RemoveIcon from "../RemoveIcon/RemoveIcon";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, modalClose, modalOpen, modalSubmitClose, emptyCart } from "../../reducers";
import ConfirmButton from "../Buttons/ConfirmButton/ConfirmButton";
import { formOpen } from "../../reducers/modal.reducer";
import UserForm from "../Form/Components/UserForm";
import ModalOnSubmit from "../Modal/ModalOnSubmit/ModalOnSubmit";
import './CartItems.scss'

const CartItems = () => {



    const dispatch = useDispatch()
    const modal = useSelector(state => state.modal.isModal)
    const cart = useSelector(state => state.cart.cartToLocal)
    const form = useSelector(state => state.modal.isForm)
    const submission = useSelector(state => state.modal.isModalSubmit)
    return (

        <>

            {cart.length === 0 && <div className='cart-empty'>
                <strong className="desc"> Cart is empty</strong>
            </div>}
            <div className="products-wrapper">

                {cart.map((el) => <div key={el.id}>

                    <div className="card-wrapper">
                        <RemoveIcon onClick={() => {
                            dispatch(modalOpen())

                        }} />


                        <div className="img-wrapper">
                            <img className="image" src={el.img} alt={el.name} />
                        </div>
                        <div className="flex-wrapp">
                            <h1 className="device-name">{el.name}</h1>

                        </div>
                        <p className="art">Art: {el.art}</p>
                        <p className="color">Color: {el.color}</p>
                        <div className="price-wrapp">

                            <p className="price">$ {el.price}</p>
                            <ConfirmButton className="buy-now" text="Buy now" onClick={() => {
                                dispatch(formOpen())
                            }} />
                            {modal && <Modal text='Do you want to continue?'
                                onCancel={() => { dispatch(modalClose()) }}
                                onConfirm={() => {

                                    dispatch(removeFromCart(el))
                                    dispatch(modalClose())
                                }
                                }
                            />}
                        </div>
                    </div>
                </div>
                )}
                {form && <UserForm />}
                {submission && <ModalOnSubmit text="Thank you for choosen our product!" onCancel={() => { dispatch(modalSubmitClose()) }}
                    onConfirm={() => {
                        dispatch(emptyCart())
                        dispatch(modalSubmitClose())

                    }} />}
            </div>
        </>

    )

};

export default CartItems








