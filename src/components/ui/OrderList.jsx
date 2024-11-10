import React from 'react'
// import Product from './Product';
import OrderCard from './OrderCard';
// import Navbar from './shared/Navbar'
// import Footer from './shared/Footer'
// import FilterCard from './FilterCard'
// import Job from './Job';

const orderArray = [1, 2, 3, 4, 5, 6, 7, 8];

function OrderList() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    {/* <div className='w-20%'>
                        <FilterCard />
                    </div> */}
                    
                        {
                            orderArray.length == 0 ? <span>Order not found</span> : (
                                <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                    <div className='grid grid-cols-3 gap-4'>
                                        {
                                            orderArray.map((item, index) => (
                                                <div>
                                                    <OrderCard />
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

export default OrderList