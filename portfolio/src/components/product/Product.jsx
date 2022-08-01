
import './product.css' 
const Product = ({img,link}) => {
  return (
   <div className="pr">
    <div className="pr-browser">
      <div className="pr-circle"></div>
      <div className="pr-circle"></div>
      <div className="pr-circle"></div>
    </div>  
    <a href={link} target="_blank" rel='noreferrer'>
      <img src={img} alt="" className="pr-memory" />
    </a> 
   </div>
  )
}

export default Product
