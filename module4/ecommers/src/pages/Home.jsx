// import { Link } from "react-router";
// import useFeth from "../hook/useFeth";
// import ProducatsCard from "../Componets/ProducatsCard";

// const Home = () => {
//    const{ producat,loding,err}=useFeth()
//    if(loding){
//    return <p> Loading...</p>
//    }
//    if(err){
//     return <p>{err}</p>
//    }
//     return (
//         <div>
//             <div className="all-producat-cart">{
//                  producat.slice(0,4).map((pd,ind)=>{
//             <ProducatsCard key={ind} producatsCard={pd}/>
//             })
//             }

//         </div>
//        <button> <Link to={"Producat"} >See all producat</Link></button>
//         </div>
//     );
// };

// export default Home;
import { Link } from "react-router";
import useFeth from "../hook/useFeth";
import ProducatsCard from "../Componets/ProducatsCard";

const Home = () => {
  const { producat, loding, err } = useFeth();

  if (loding) {
    return <p>Loading...</p>;
  }

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <div>
      <div className="all-producat-cart">
        {producat.slice(0, 4).map((pd) => (
          <ProducatsCard key={pd.id} producats={pd} />
        ))}
      </div>

      <button>
        <Link to="/Producat">See all product</Link>
      </button>
    </div>
  );
};

export default Home;
