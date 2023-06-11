import { Link } from 'react-router-dom';
import CartLogo from '../Icons/CartLogo'
import FavouriteLogo from '../Icons/FavouriteLogo'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Header.scss'

const Header = () => {

    const cartCount = useSelector(state => state.cart.cartToLocal)
    const favCount = useSelector(state => state.favourite.favouriteToLocal)



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartCount))
        localStorage.setItem("favourite", JSON.stringify(favCount))

    }, [cartCount, favCount])
    return (
        <>

            <div className="header">
                <Link to="/" style={{ textDecoration: 'none' }}> <h1 className='devices'>Apple store</h1></Link>

                <div className='header-svg-wrapp'>
                    <sup className='counter'>{favCount.length}</sup>
                    <Link to="/favourites">
                        <FavouriteLogo />
                    </Link>
                    <sup className='counter'>{cartCount.length}</sup>
                    <Link to="/cartitems">
                        <CartLogo />
                    </Link>


                </div>

            </div>
        </>
    )
}

export default Header






