import ProducatCart from "./ProducatCart";
const Producats = () => {
const products = [
  {
    title: "Laptop",
    price: 75000,
    stock: true
  },
  {
    title: "Smartphone",
    price: 35000,
    stock: true
  },
  {
    title: "Headphone",
    price: 2500,
    stock: false
  },
  {
    title: "Keyboard",
    price: 1500,
    stock: true
  },
  {
    title: "Mouse",
    price: 800,
    stock: false
  }
];

//const products=[]  
return (
        <div className="producat-prent">
            <h2 className="all-product">all producat</h2>
            <div className="product-ditls">
                {
                   products.length===0?"Producat not found": products.map((pd,ind)=>{
                        return <ProducatCart key={ind} product={pd}/>
                    })
                }
            </div>
        </div>
    );
};

export default Producats;