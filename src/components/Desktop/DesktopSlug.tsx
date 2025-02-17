import SlugDescriptionReview from "../Elements/SlugDescriptionReview";
import { Button } from "../ui/button";
import { CiBullhorn } from "react-icons/ci";
import SlugComponent from "../Elements/SlugComponent";

const DesktopSlug = () => {
  return (
    <>
      <div className="container mt-16 mx-6 w-full">
        {/* Flex will make product and Side bar Aside */}
        <div className="flex justify-between gap-4">
          {/* Main Page */}
          <div className="overflow-hidden w-3/4  h-full p-6 shadow-[1px_1px_5px_black] flex flex-col mb-8">
            {/* Products Details */}
            <div>
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mb-1 pb-5">
                New Year Simulation Bundle 10 Best Unity Game Source Code
              </h1>
              <hr className="border-0 border-t-2 border-solid  w-full my-4" />

              <SlugComponent />
            </div>
            {/* Product Description */}
            <div className="mt-8">
              <SlugDescriptionReview />
            </div>
          </div>

          {/* Side Bar */}
          <div className="overflow-hidden text-left w-1/4 h-full p-6 shadow-[1px_1px_5px_black] flex flex-col">
            <div>
              <div className="flex flex-col items-center justify-center">
                <Button className="text-xl w-full">Add to Wishlist</Button>
                <span>Liked By: 0</span>
              </div>
              <hr className=" border-black py-3" />
              {/* Why Chooses Comes Here */}
              <div>
                <h5 className="text-xl font-medium pb-2">Why Choose Us?</h5>
                <ul className="pt-2">
                  <li className="inline-flex items-center gap-2">
                    <CiBullhorn />
                    Free Future Updates
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CiBullhorn />
                    100% Secure
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CiBullhorn />
                    Verified By Seller
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CiBullhorn />
                    Bugs Free Project
                  </li>
                </ul>
              </div>
              {/* Price Comes Here */}
              <div className="text-center font-bold text-6xl mt-3">
                <h1>$15</h1>
              </div>
              {/* Add to Cart & Buy Button */}
              <div className="mt-5 flex flex-col gap-3">
                <Button className="text-xl w-full">Add to Cart</Button>
                <Button className="text-xl w-full">Buy Now</Button>
              </div>

              {/* Short Desctiption */}
              <div className="mt-8">
                <h5 className="text-2xl font-bold text-center">
                  Short Description
                </h5>
                <hr />
                <p className="font-medium text-justify">
                  Here is your chance to buy the 10 Azaming Simulation Games
                  assets at all very low prices and be on the top of the
                  trending page of the Google Play Store. Don’t miss out on this
                  exclusive. Get a discount on the game bundle. Full library of
                  new source codes of worth $899 in this bundle for only $199.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSlug;
