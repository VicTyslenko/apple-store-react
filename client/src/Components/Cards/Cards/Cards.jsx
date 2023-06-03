import { useState, useContext } from "react";
import Modal from "../../Modal/Modal";
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { modalClose, addToCart } from "../../../reducers";
import { SelectContext } from "../../../Context/index"
import { ReactComponent as CardView } from "../images/cardsView.svg"
import { ReactComponent as TableView } from "../images/tableView.svg"
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton"
import "./Cards.scss"

const Cards = () => {
  const dispatch = useDispatch()
  const { tableView, showTable, showCard } = useContext(SelectContext)

  const fetchData = useSelector(state => state.data.data)
  const modal = useSelector(state => state.modal.isModal)

  const [selectedProduct, setSelectedProduct] = useState([])

  const productsRender = fetchData.map(product =>
    <Card
      key={product.id}
      setProduct={() => setSelectedProduct(product)}

      item={product}

    />)


  return (
    <>
      <div className="products-wrapper">
        <div className="icon-block">
          <span className="view">Card</span>
          <ConfirmButton className="view-btn" onClick={showCard} text={<CardView fill='white' width='20px' />}>
          </ConfirmButton>

          <span className="view">Table</span>
          <ConfirmButton onClick={showTable} text={
            <TableView fill='white' width='20px' height="20px" />
          } className="view-btn">
          </ConfirmButton>
        </div>

        {tableView || <> {productsRender}</>}
        {tableView && <div className="table-view">
          {productsRender}
        </div>}


      </div>

      {modal && <Modal text='Do you want to continue?'
        onCancel={() => { dispatch(modalClose()) }}
        onConfirm={() => {

          dispatch(addToCart(selectedProduct))
          dispatch(modalClose())

        }
        }

      />}
    </>
  )

};

Cards.propTypes = {
  onAddItem: PropTypes.func,
  closeModal: PropTypes.func

};

export default Cards;









