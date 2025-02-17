import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  image,
  title,
  price,
  category,
  slug,
}: {
  image: string;
  title: string;
  price: string;
  category: string;
  slug: string; // Added slug for dynamic routing
}) => {
  return (
    <div className="w-full h-full rounded-xl shadow-[1px_1px_5px_black] flex flex-col">
      <Link
        href={`/${category}/${slug}`}
        className="block w-full h-full no-underline text-inherit"
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL={image}
          className="w-full rounded-t-xl object-cover"
        />

        {/* TypoGraphy Sections */}
        <div className="flex flex-col flex-grow justify-between text-center py-2 px-0.5">
          <h3 className="text-md font-semibold  flex-1 pt-2">{title}</h3>
          <div className="mt-auto pt-6">
            <p className="text-gray-500 text-xs italic pb-2">{category}</p>
            <span className="text-xl font-bold">${price}</span>
          </div>
        </div>
      </Link>
      {/* Buttons Sections */}
      <button className="w-full bg-gray-700 text-white py-2 font-semibold rounded-b-lg cursor-pointer">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
