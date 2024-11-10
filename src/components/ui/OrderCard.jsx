import React, { useState } from 'react';
import { Button } from './button';
import { Bookmark } from 'lucide-react';
import { Badge } from '@radix-ui/themes';
import { toast } from 'sonner'; // Importing toast from sonner for notifications

function OrderCard() {

  // Sample order data
  const order = {
    productName: 'Product Name',
    customerName: 'Customer Name',
    customerCompany: 'Customer Company',
    quantity: 5,
    totalPrice: 250,
    date: '2024-11-01',
    time: '12:30 PM',
    status: 'pending',
  };
  return (
    <div className='border border-gray-100 shadow-xl p-5 bg-white rounded-md'>
      <div className='flex items-center justify-between w-full'>
        <p className='text-sm text-gray-500'>{order.date} - {order.time}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      
      <div className='flex items-center gap-2 my-2'>
        <div>
          <h1 className='text-lg font-medium'>{order.productName}</h1>
          <p className='text-sm text-gray-500'>{order.customerCompany}</p>
        </div>
      </div>
      
      <div>
        <h1 className='font-bold text-lg my-2'>{order.customerName}</h1>
      </div>
      
      <div className='flex items-center gap-5 mt-4'>
        <Badge className={'text-blue-700 font-bold border border-gray-300 rounded-md px-3 py-2'} variant="">Total Price</Badge>
        <Badge className={'text-[#01AAC1] font-bold border border-gray-300 rounded-md px-3 py-2'} variant="ghost">Profit</Badge>
        <Badge className={'text-[#d4af4b] font-bold border border-gray-300 rounded-md px-3 py-2'} variant="ghost">Quantity</Badge>
      </div>
    </div>
  );
}

export default OrderCard;
