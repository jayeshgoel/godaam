import React from 'react'
import Product from './Product';
// import Navbar from './shared/Navbar'
// import Footer from './shared/Footer'
// import FilterCard from './FilterCard'
// import Job from './Job';

const productArray = [1, 2, 3, 4, 5, 6, 7, 8];

function ProductList() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    {/* <div className='w-20%'>
                        <FilterCard />
                    </div> */}
                    
                        {
                            productArray.length == 0 ? <span>Product not found</span> : (
                                <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                    <div className='grid grid-cols-1 gap-4'>
                                        {
                                            productArray.map((item, index) => (
                                                <div>
                                                    <Product />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )

                        }
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default ProductList