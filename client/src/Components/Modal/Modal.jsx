
import ConfirmButton from '../Buttons/ConfirmButton/ConfirmButton';
import './Modal.scss'

const Modal = (props) => {

    const { text, onCancel, onConfirm } = props;



    return (
        <div className="total-wrapper" data-testid="modal-test-id" onClick={onCancel}>
            <div className='modal-wrapper' role="modalWrapper" onClick={(e) => {
                e.stopPropagation()
            }}>

                <div className="main-wrapper">
                    {text}

                </div>
                <div className="btn-wrapper">
                    <ConfirmButton text='ok' onClick={onConfirm} data-testid="some-btn" className="confirm-btn" />
                    <ConfirmButton text='cancel' onClick={onCancel} className="confirm-btn" />
                </div>
            </div>
        </div>

    )
}
export default Modal





