const ProducatsCard = ({producats}) => {
    console.log("producat from com:",producats)

    return (
        <div className="shadow-2xl p-12">
            <img className="w-full" src={producats.image} alt=""></img>
            <p className="text-red-500">category:{producats.category}</p>
            <p className="text-amber-500">price:{producats.price}</p>
             <p className="text-blue-500">Rating Count: {producats?.rating?.count}</p>
            <p className="text-black">Rating Count: {producats?.rating?.rate}</p>
            
        </div>
    );
};

export default ProducatsCard;
