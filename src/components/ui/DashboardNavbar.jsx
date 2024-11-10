import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
// import { Label } from './label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from 'sonner'; // Ensure sonner is properly installed and configured
import { Label } from '@radix-ui/react-label';
import { Link } from 'react-router-dom';
import { SearchProduct } from './SearchProduct';

function DashboardNavbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State to control the sheet visibility
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [company, setCompany] = useState('');
  const [profit, setProfit] = useState('');

  // Function to handle the opening of the sheet
  const handleOpenSheet = () => {
    setIsSheetOpen(true);
  };

  // Function to handle the closing of the sheet
  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  // Function to handle form submission (product creation)
  const handleSubmitProduct = (e) => {
    e.preventDefault();
    
    // Basic validation: ensure all fields are filled
    if (productName && productCategory && productType && quantity && costPrice && company && profit) {
      // Simulate product creation logic here (e.g., API call)
      toast.success('New product added successfully!');
      setIsSheetOpen(false); // Close the sheet after successful submission

      // Clear form fields
      setProductName('');
      setProductCategory('');
      setProductType('');
      setQuantity('');
      setCostPrice('');
      setCompany('');
      setProfit('');
    } else {
      toast.error('Please fill in all the fields');
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 w-full">
      {/* Centered Search Bar */}
      <div className="flex justify-center w-full max-w-4xl mx-auto ml-20">
        <SearchProduct />
      </div>

      {/* Right-aligned Buttons */}
      <div className="ml-auto">
        <Button className="bg-gray-800 text-white" onClick={handleOpenSheet}>
          Add Product
        </Button>
      </div>
      <div className="ml-auto">
        <Link to=''>
          <Button className="hover:bg-red-600">
            Logout
          </Button>
        </Link>
      </div>

      {/* Sheet for adding a product */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
            <SheetDescription>
              Enter the details of the new product below.
            </SheetDescription>
          </SheetHeader>

          {/* Sheet Content */}
          <form onSubmit={handleSubmitProduct} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="productName" className="text-right">
                Product Name
              </Label>
              <Input
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter product name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="productCategory" className="text-right">
                Product Category
              </Label>
              <Input
                id="productCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                placeholder="Enter product category"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="productType" className="text-right">
                Product Type
              </Label>
              <Input
                id="productType"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                placeholder="Enter product type"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="costPrice" className="text-right">
                Cost Price
              </Label>
              <Input
                id="costPrice"
                type="number"
                value={costPrice}
                onChange={(e) => setCostPrice(e.target.value)}
                placeholder="Enter cost price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                Company
              </Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter company name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="profit" className="text-right">
                Profit
              </Label>
              <Input
                id="profit"
                type="number"
                value={profit}
                onChange={(e) => setProfit(e.target.value)}
                placeholder="Enter profit"
                className="col-span-3"
              />
            </div>

            {/* Sheet Footer with Save and Cancel buttons */}
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save Product</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="outline" onClick={handleCloseSheet}>
                  Cancel
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default DashboardNavbar;
