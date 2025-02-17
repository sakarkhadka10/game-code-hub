import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Catgory 1 */}
        <Link href="#">
          <Image
            src="/productimg1.webp"
            alt="Games Cat"
            width={500}
            height={350}
          />
        </Link>
      </div>
    </>
  );
};

export default Categories;
