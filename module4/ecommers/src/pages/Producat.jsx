import ProducatsCard from "../Componets/ProducatsCard";
import useFeth from "../hook/useFeth";



const Producat = () => {
    const {producat,loding,err}=useFeth()
    if(loding){
        return <p>loding</p>
    }
    if(err){
        return<p>{err}</p>
    }
       return (
        <div className="all-producat-cart">
     
        <div className="all-producat-cart">
        {producat.map((pd) => (
          <ProducatsCard key={pd.id} producats={pd} />
        ))}
      </div>
        </div>
    );
};

export default Producat;