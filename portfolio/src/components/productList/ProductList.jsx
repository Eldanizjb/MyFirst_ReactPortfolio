import './productList.css'
import Product from '../product/Product'
import {products} from '../../data'
const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-text">
            <h1 className="pl-title">Lorem</h1>
            <p className="pl-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium quam dolorem aut saepe dolorum minus expedita?
            Commodi tempore similique maxime nostrum corporis numquam, voluptas est vero soluta officiis assumenda.
            </p>
            <div className="pl-products">
               {products.map(item =>(<Product key={item.id} img={item.img} link={item.link} color={item.color}/>))}
            </div>
         </div>
    </div>
  )
}

export default ProductList