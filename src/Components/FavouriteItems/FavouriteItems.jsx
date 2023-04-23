import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavourite, addToCart } from '../../reducers';
import AddToList from '../Buttons/AddToList/AddToList';
import './favourite.scss'




const FavouriteItems = () => {
    const dispatch = useDispatch()
    const favouriteItems = useSelector(state => state.favourite.favouriteToLocal)
 
    return (
        <>

            {!favouriteItems.length && <strong className='cart-empty'>No favourite items</strong>}
            {
                <div className="products-wrapper">
                    {favouriteItems.map((el) => <div key={el.id}>

                        <div className="card-wrapper">


                            <div className="img-wrapper">
                                <img className="image" src={el.img} alt={el.name} />
                            </div>
                            <div className="flex-wrapp">
                                <h1 className="device-name">{el.name}</h1>
                                <div className="svg-wrapp">
                                    <svg className="blue-svg" onClick={() => {
                                        dispatch(removeFromFavourite(el))

                                    }} xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" width="32" height="32" viewBox="0 0 32 32">
                                        <path
                                            d="M29.95 12.68A1 1 0 0 0 29 12h-9.26L17 2.77a1 1 0 0 0-1.91 0L12.26 12H3a1 1 0 0 0-.6 1.8l7.39 5.54-3.72 9.29a1 1 0 0 0 1.54 1.16L16 23.27l8.39 6.52a1 1 0 0 0 1.54-1.16l-3.72-9.29 7.39-5.54a1 1 0 0 0 .35-1.12Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="art">Art: {el.art}</p>
                            <p className="color">Color: {el.color}</p>
                            <div className="price-wrapp">

                                <p className="price">$ {el.price}</p>
                                <AddToList text='Add to Cart' onClick={() => {
                                    dispatch(addToCart(el))
                                    dispatch(removeFromFavourite(el))
                                }}

                                />

                            </div>

                        </div>


                    </div>

                    )}

                </div>}
        


        </>
    )

};

export default FavouriteItems





