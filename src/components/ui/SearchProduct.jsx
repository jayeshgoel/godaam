import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchProduct() {
  return (
    <div className="flex w-full max-w-screen-lg items-center space-x-6 ml-32">
      <Input type="text" placeholder="Search products ..." className="flex-grow" />
      <Button type="submit" className="bg-[#01AAC1] hover:bg-[#086e7b]" >Search</Button>
    </div>
  );
}
