import { useContext } from "react"
import { useParams } from "react-router-dom"
import { MyContext } from "../context/MyContext"

const Detailproduct = () => {
  const { allProducts, setAllProducts } = useContext(MyContext)
  const { countProducts, setCountProducts } = useContext(MyContext)
  const { total, setTotal } = useContext(MyContext)
  const { products } = useContext(MyContext)
  const { id } = useParams()
  const i = products.findIndex((x) => x.id === id)
  const name = products[i].name
  const chile = new Intl.NumberFormat("es-CL")

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id == product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
      setTotal(total + product.price * product.qty)
      setCountProducts(countProducts + product.qty)
      return setAllProducts([...products])
    }

    setTotal(total + product.price * product.qty)
    setCountProducts(countProducts + product.qty)
    setAllProducts([...allProducts, product])
  }

  return (
    <>
      <div className="detail-container">
        <div className="detail">
          <div className="detail-l">
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <p>
              <span>Ingredientes: </span>
              {products[i].ingredients.join(", ")}
            </p>
            <p>{products[i].desc}</p>
            <div className="buy">
              <button
                onClick={() => onAddProduct(products[i])}
                className="add-detail"
              >
                Agregar
              </button>
              <h3>${chile.format(products[i].price)}</h3>
            </div>
          </div>
          <div className="detail-r">
            <div className="detail-img">
              <img src={products[i].img} alt={name} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detailproduct
