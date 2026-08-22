
const Layout = () => {
    return (
        <div>
           {/* <div className="flex justify-around">
             <div className="p-12 bg-amber-300 text-2xl  text-center">1</div>
            <div className="p-12 bg-sky-400 text-2xl  text-center">2</div>
            <div className="p-12 bg-green-400 text-2xl  text-center">3</div>
           </div> */}

           {/* <div className="grid grid-cols-3 grid-rows-2 gap-6">
             <div className="p-12 bg-amber-300 text-2xl  text-center row-span-2">1</div>
            <div className="p-12 bg-sky-400 text-2xl  text-center col-span-2">2</div>
            <div className="p-12 bg-green-400 text-2xl  text-center col-span-2">3</div>
           </div> */}
             <section>
                <div className="text-center mt-6 mb-12">
                    <p className="text-3xl font-bold" >Prodact</p>
                    <p>Chouse Youer Prodact</p>
                </div>
             </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 lg:px-16">
                <div className="  shadow-2xl">
                <img src="https://images.pexels.com/photos/9261414/pexels-photo-9261414.jpeg" alt="" />
                <div className="p-2">
                <p className="font-bold">Primiyem wath</p>
                <p>Price $12</p>
                <p>Stock</p>
                </div>
            </div>
             <div className=" shadow-2xl">
                <img src="https://images.pexels.com/photos/9261414/pexels-photo-9261414.jpeg" alt="" />
                <div className="p-2">
                <p className="font-bold">Primiyem wath</p>
                <p>Price $12</p>
                <p>Stock</p>
                </div>
            </div>
              <div className=" shadow-2xl">
                <img src="https://images.pexels.com/photos/9261414/pexels-photo-9261414.jpeg" alt="" />
                <div className="p-2">
                <p className="font-bold">Primiyem wath</p>
                <p>Price $12</p>
                <p>Stock</p>
                </div>
            </div>
              <div className=" shadow-2xl">
                <img src="https://images.pexels.com/photos/9261414/pexels-photo-9261414.jpeg" alt="" />
                <div className="p-2">
                <p className="font-bold">Primiyem wath</p>
                <p>Price $12</p>
                <p>Stock</p>
                </div>
            </div>

              <div className=" shadow-2xl">
                <img src="https://images.pexels.com/photos/9261414/pexels-photo-9261414.jpeg" alt="" />
                <div className="p-2">
                <p className="font-bold">Primiyem wath</p>
                <p>Price $12</p>
                <p>Stock</p>
                </div>
            </div>

              <div className=" shadow-2xl">
                <img src="https://images.pexels.com/photos/9261414/pexels-photo-9261414.jpeg" alt="" />
                <div className="p-2">
                <p className="font-bold">Primiyem wath</p>
                <p>Price $12</p>
                <p>Stock</p>
                </div>
            </div>

            </div>
            
        </div>
    );
};

export default Layout;