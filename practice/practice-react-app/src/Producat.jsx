
import ProductsCart from "./ProductsCart";
const products = [
    {
      name: "Wireless Headphones",
      description:
        "Noise-cancelling wireless headphones with high-quality sound.",
      price: 2500,
      isStock: true,
    },
    {
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with blue switches.",
      price: 3500,
      isStock: true,
    },
    {
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI.",
      price: 1200,
      isStock: false,
    },
    {
      name: "Smart Watch",
      description:
        "Smart watch with fitness tracking and heart-rate monitoring.",
      price: 4500,
      isStock: true,
    },
    {
      name: "USB-C Hub",
      description:
        "Multi-port USB-C hub with HDMI, USB 3.0, and SD card support.",
      price: 1800,
      isStock: false,
    },
  ];
// const products=[]
const Producat = () => {
    return (
        <div className="producat-continer">


          
            <h1 className="all-cart">all producat</h1>
            <div className="producat-ditels">
            {
               products.length===0 ? "products is not found": products.map((pd,ind)=>{
                    return <ProductsCart key={ind} pd={pd} />
                })
            }
            </div>
           

         
        </div>
    );
};

export default Producat;

