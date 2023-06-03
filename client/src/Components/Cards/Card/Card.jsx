import AddToList from "../../Buttons/AddToList/AddToList"
import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { SelectContext } from "../../../Context/index"
import { addToFavourite, modalOpen, removeFromFavourite } from "../../../reducers";
import { useDispatch } from "react-redux";
import { CardWrapper, ImgWrapp, DeviceDescription, Color, Art, Description, DescriptionWrapper, Footer, Price, PriceWrapp } from "./StyledCardTable"
import './Card.scss'


const Card = ({ item, setProduct }) => {

  const { name, price, art, img, color, id, desc } = item;
  const dispatch = useDispatch()

  const { tableView } = useContext(SelectContext)


  const favourite = Boolean(JSON.parse(localStorage.getItem('favourite'))?.find((favourite) => favourite.id === id))

  const [addFavorites, setAddFavorites] = useState(!favourite ? false : true)
  const [notFavorites, setNotFavorites] = useState(favourite ? false : true)

  return (

    <>
      {!tableView && <div className="card-wrapper">
        <div className="img-wrapper">
          <img className="image" src={img} alt={name} />
        </div>
        <div className="flex-wrapp">
          <h1 className="device-name">{name}</h1>
          <div className="svg-wrapp">
            {notFavorites && <svg className='grey-svg' onClick={() => {
              dispatch(addToFavourite(item))
              setAddFavorites(true)
              setNotFavorites(false)
            }} xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" width="32" height="32" viewBox="0 0 32 32">
              <path
                d="M29.95 12.68A1 1 0 0 0 29 12h-9.26L17 2.77a1 1 0 0 0-1.91 0L12.26 12H3a1 1 0 0 0-.6 1.8l7.39 5.54-3.72 9.29a1 1 0 0 0 1.54 1.16L16 23.27l8.39 6.52a1 1 0 0 0 1.54-1.16l-3.72-9.29 7.39-5.54a1 1 0 0 0 .35-1.12Z" />
            </svg>}
            {addFavorites && <svg className='blue-svg' onClick={() => {
              dispatch(removeFromFavourite(item))
              setNotFavorites(true)
              setAddFavorites(false)
            }} xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" width="32" height="32" viewBox="0 0 32 32">
              <path
                d="M29.95 12.68A1 1 0 0 0 29 12h-9.26L17 2.77a1 1 0 0 0-1.91 0L12.26 12H3a1 1 0 0 0-.6 1.8l7.39 5.54-3.72 9.29a1 1 0 0 0 1.54 1.16L16 23.27l8.39 6.52a1 1 0 0 0 1.54-1.16l-3.72-9.29 7.39-5.54a1 1 0 0 0 .35-1.12Z" />
            </svg>}

          </div>
        </div>
        <p className="art">Art: {art}</p>
        <p className="color">Color: {color}</p>
        <div className="price-wrapp">
          <p className="price">$ {price}</p>
          <AddToList text='Add to Cart' onClick={() => {
            dispatch(modalOpen())
            setProduct()
          }}

          />
        </div>
      </div>}

      {tableView && <CardWrapper>
        <ImgWrapp>
          <img className="image" src={img} alt={name} />
        </ImgWrapp>
        <DeviceDescription>
          <h1 className="device-name">{name}</h1>
          <Color fontSize='20px'>Color: {color}</Color>
          <Art>Art: {art}</Art>
        </DeviceDescription>

        <DescriptionWrapper>
          <Description>
            {desc}
          </Description>
        </DescriptionWrapper>
        <PriceWrapp>
          <p className="dollar">$</p>
          <Price fontSize="25px"> {price}</Price>

        </PriceWrapp>
        <Footer>
          {notFavorites && <svg className='grey-svg' onClick={() => {
            dispatch(addToFavourite(item))
            setAddFavorites(true)
            setNotFavorites(false)
          }} xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M29.95 12.68A1 1 0 0 0 29 12h-9.26L17 2.77a1 1 0 0 0-1.91 0L12.26 12H3a1 1 0 0 0-.6 1.8l7.39 5.54-3.72 9.29a1 1 0 0 0 1.54 1.16L16 23.27l8.39 6.52a1 1 0 0 0 1.54-1.16l-3.72-9.29 7.39-5.54a1 1 0 0 0 .35-1.12Z" />
          </svg>}
          {addFavorites && <svg className='blue-svg' onClick={() => {
            dispatch(removeFromFavourite(item))
            setNotFavorites(true)
            setAddFavorites(false)
          }} xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" width="32" height="32" viewBox="0 0 32 32">
            <path
              d="M29.95 12.68A1 1 0 0 0 29 12h-9.26L17 2.77a1 1 0 0 0-1.91 0L12.26 12H3a1 1 0 0 0-.6 1.8l7.39 5.54-3.72 9.29a1 1 0 0 0 1.54 1.16L16 23.27l8.39 6.52a1 1 0 0 0 1.54-1.16l-3.72-9.29 7.39-5.54a1 1 0 0 0 .35-1.12Z" />
          </svg>}
          <AddToList text='Add to Cart' onClick={() => {
            dispatch(modalOpen())
            setProduct()
          }}

          />
        </Footer>

        
      </CardWrapper>}


    </>
  )
};

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  art: PropTypes.number,
  color: PropTypes.string,
  colorChange: PropTypes.func,
  onAddFavourite: PropTypes.func

};

export default Card








