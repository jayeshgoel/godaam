import React, { useState } from 'react';
import { Button } from './button';
import { Bookmark } from 'lucide-react';
import { Badge } from '@radix-ui/themes';
import { toast } from 'sonner'; // Importing toast from sonner for notifications

function Product() {
  const [showQuantityInput, setShowQuantityInput] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [showOrderInput, setShowOrderInput] = useState(false); // State for showing order input
  const [orderCount, setOrderCount] = useState(''); // State for the number of orders to be created
  
  // Handle "Add Stock" button click
  const handleAddStockClick = () => {
    setShowQuantityInput(true);
  };

  // Handle "Create Order" button click
  const handleCreateOrderClick = () => {
    setShowOrderInput(true);
  };

  // Handle quantity change for stock
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Handle order count change
  const handleOrderCountChange = (e) => {
    setOrderCount(e.target.value);
  };

  // Handle stock submission
  const handleSubmitQuantity = (e) => {
    e.preventDefault();
    if (quantity) {
      toast.success('Stocks added');
      setShowQuantityInput(false); // Hide input after submission
      setQuantity(''); // Clear the quantity input field
    } else {
      toast.error('Please enter a valid quantity');
    }
  };

  // Handle order submission
  const handleSubmitOrderCount = (e) => {
    e.preventDefault();
    if (orderCount) {
      toast.success('Order created');
      setShowOrderInput(false); // Hide input after submission
      setOrderCount(''); // Clear the order count input field
    } else {
      toast.error('Please enter a valid order count');
    }
  };

  return (
    <div className='border border-gray-100 shadow-xl p-5 bg-white rounded-md'>
      <div className='flex items-center justify-between w-full'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <div>
          <h1 className='text-lg font-medium'>Product Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Company Name</h1>
        <p className='text-sm text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem minus sit asperiores qui nobis pariatur ipsum?
        </p>
      </div>
      <div className='flex items-center gap-5 mt-4'>
        <Badge className={'text-blue-700 font-bold border border-gray-300 rounded-md px-3 py-2'} variant="">Price</Badge>
        <Badge className={'text-[#01AAC1] font-bold border border-gray-300 rounded-md px-3 py-2'} variant="ghost">Profit</Badge>
        <Badge className={'text-[#d4af4b] font-bold border border-gray-300 rounded-md px-3 py-2'} variant="ghost">Quantity</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline" onClick={handleAddStockClick}>Add Stock</Button>
        <Button className="bg-[#d4af4b]" onClick={handleCreateOrderClick}>Create Order</Button>
      </div>

      {/* Add Stock Quantity Input */}
      {showQuantityInput && (
        <form onSubmit={handleSubmitQuantity} className="mt-4">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter quantity"
            className="border border-gray-300 p-2 rounded-md"
          />
          <Button type="submit" className="ml-2 bg-green-500 text-white">Submit</Button>
        </form>
      )}

      {/* Create Order Count Input */}
      {showOrderInput && (
        <form onSubmit={handleSubmitOrderCount} className="mt-4">
          <input
            type="number"
            value={orderCount}
            onChange={handleOrderCountChange}
            placeholder="Enter number of orders"
            className="border border-gray-300 p-2 rounded-md"
          />
          <Button type="submit" className="ml-2 bg-blue-500 text-white">Submit</Button>
        </form>
      )}
    </div>
  );
}

export default Product;
