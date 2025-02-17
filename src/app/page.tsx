"use client";
import DesktopHero from "@/components/Desktop/DesktopHero";
import DesktopTopSelling from "@/components/Desktop/DesktopTopSelling";
import { ReviewCardComponent } from "@/components/Desktop/ReviewCard";
import Categories from "@/components/Main/Categories";
import FeatureProduct from "@/components/Main/FeatureProduct";
import LatestProduct from "@/components/Main/LatestProduct";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopHero />
        <div className="hidden lg:block">
          <DesktopTopSelling />
          <Categories />
        </div>

        <LatestProduct />
        <FeatureProduct />

        {/* FeedBack Sections */}
        <ReviewCardComponent />
      </div>
    </div>
  );
}
