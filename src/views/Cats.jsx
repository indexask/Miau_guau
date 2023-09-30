import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MyContext } from "../context/MyContext"

const Cats = () => {
  const chile = new Intl.NumberFormat("es-CL")
  const { products } = useContext(MyContext)
  const { catProducts, setcatProducts } = useContext(MyContext)
  const { countProducts, setCountProducts } = useContext(MyContext)
  const { total, setTotal } = useContext(MyContext)

  const onAddProduct = (product) => {
    if (catProducts.find((item) => item.id == product.id)) {
      const products = catProducts.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
      setTotal(total + product.price * product.qty)
      setCountProducts(countProducts + product.qty)
      return setcatProducts([...products])
    }

    setTotal(total + product.price * product.qty)
    setCountProducts(countProducts + product.qty)
    setcatProducts([...catProducts, product])
  }

  const navigate = useNavigate()
  const handleClick = (product) => {
    navigate(`/${product.id}`)
  }

  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" id={product.id} key={product.id}>
            <div className="img-container" onClick={() => handleClick(product)}>
              <img src={product.img} alt={product.name} />
            </div>
            <h2 onClick={() => handleClick(product)}>
              {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </h2>
            <p>{product.ingredients.join(", ")}</p>
            <button onClick={() => onAddProduct(product)}>
              Agregar ${chile.format(product.price)}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cats
