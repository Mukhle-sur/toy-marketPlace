import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabCategory from "./TabCategory/TabCategory";
import "./ShopCategory.css";

const ShopByCategory = () => {
  const [toysCategories, setToysCategories] = useState([]);
  const [twoCategories, setTwoCategories] = useState([]);
  const [threeCategories, setThreeCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-side-dun.vercel.app/subCategory1")
      .then((res) => res.json())
      .then((data) => setToysCategories(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment-11-server-side-dun.vercel.app/subCategory2")
      .then((res) => res.json())
      .then((data) => setTwoCategories(data));
  }, []);

  useEffect(() => {
    fetch("https://assignment-11-server-side-dun.vercel.app/subCategory3")
      .then((res) => res.json())
      .then((data) => setThreeCategories(data));
  }, []);

  return (
    <div className="bg-pink-50 p-12 mt-12 rounded-lg">
      <div
        className="text-center"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2 className="text-3xl font-bold text-black mb-3">
          Show by category All Toys
        </h2>
        <p className="text-xl font-medium text-black md:max-w-[700px] mx-auto">
          Entertainment Earth has been the premier online destination for the
          latest and greatest toys, the most exciting action figures, and the
          coolest gifts and collectibles pop culture has to offer. From
          television, movies, sports, celebrities, comics, Internet memes, and
          every
        </p>
      </div>
      <div className="mt-10">
        <Tabs>
          <TabList>
            <Tab>Action Toys</Tab>
            <Tab>Super Hero</Tab>
            <Tab>PlaySets</Tab>
          </TabList>

          <TabPanel>
            {toysCategories.map((category) => (
              <TabCategory key={category._id} category={category}></TabCategory>
            ))}
          </TabPanel>

          <TabPanel>
            {twoCategories.map((category) => (
              <TabCategory key={category._id} category={category}></TabCategory>
            ))}
          </TabPanel>
          <TabPanel>
            {threeCategories.map((category) => (
              <TabCategory key={category._id} category={category}></TabCategory>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
