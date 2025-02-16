import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jessica Carter",
    username: "@jess_carter",
    body: "Great website templates! Easy to customize and looks professional. Highly recommend!",
    img: "/roundavtar1.webp",
  },
  {
    name: "Michael Reynolds",
    username: "@michael_rey",
    body: "Legit game codes! Instant delivery and no issues. Will buy again for sure!",
    img: "/roundavtar1.webp",
  },
  {
    name: "Sophia Bennett",
    username: "@sophia_b",
    body: "Perfect templates! Easy setup, modern design, and great support. Totally worth it!",
    img: "/roundavtar1.webp",
  },
  {
    name: "Daniel Thompson",
    username: "@dan_thompson",
    body: "Fast game code delivery! Everything worked perfectly. Highly recommended for gamers!",
    img: "/roundavtar1.webp",
  },
  {
    name: "Emily Harrison",
    username: "@emily_harrison",
    body: "Affordable templates with clean designs. Launched my site in hours. Loved it!",
    img: "/roundavtar1.webp",
  },
  {
    name: "Christopher Diaz",
    username: "@chris_diaz",
    body: "Best place for game codes! Fast, reliable, and great discounts. Amazing service!",
    img: "/roundavtar1.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt="{name}"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ReviewCardComponent() {
  return (
    <div className="relative my-16 flex w-full  flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
