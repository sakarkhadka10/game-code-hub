import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SlugDescriptionReview = () => {
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        {/*+++++++++++++ Tabs List Comes Here ++++++++++++++++++ */}
        <TabsList className="grid w-full grid-cols-3 text-black">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        {/* This is Details Page */}
        <TabsContent value="description">
          <div className="p-4">
            {/* Content of Description */}
            <h1 className="font-bold text-3xl">Product Details</h1> <br />
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              arcu id mauris molestie vulputate. Donec euismod, mauris vel
              efficitur consectetur, lectus felis dignissim ex, in commodo justo
              mauris at velit. Donec sed nunc vel nunc sagittis elementum. In
              hac habitasse platea dictumst.
            </p>{" "}
            <br />
            <h1 className="font-bold text-3xl">Features</h1> <br />
            <ul className="list-disk text-lg font-medium">
              <li>This is a complete game ready to release.</li>
              <li>This is a complete game ready to release.</li>
              <li>This is a complete game ready to release.</li>
              <li>This is a complete game ready to release.</li>
              <li>This is a complete game ready to release.</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="review">
          This Features Will Be Added Soon
        </TabsContent>
        <TabsContent value="comments">
          This Features Will Be Added Soon
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SlugDescriptionReview;
