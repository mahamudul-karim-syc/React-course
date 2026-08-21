import ProductCard from "./ProductCard";

const Product = () => {
    const products = [
  {
    name: "Laptop",
    price: 75000,
    isStock: true
  },
  {
    name: "Smartphone",
    price: 35000,
    isStock: true
  },
  {
    name: "Headphone",
    price: 2500,
    isStock: false
  },
  {
    name: "Keyboard",
    price: 1500,
    isStock: true
  },
  {
    name: "Mouse",
    price: 800,
    isStock: false
  }
];
//const products=[]
    return (
      <div className="all-product-card">
             <h1>Welcome to my shop </h1>
            <h1>all product </h1>
            {
              products.length===0 ?(<h1>producat not found</h1>):
              (<div className="product-card">{
                products.map((pd,ind)=>(<ProductCard key={ind} product={pd}/>
                ))}
              </div>
              )}
      </div>

    )          
};

export default Product;