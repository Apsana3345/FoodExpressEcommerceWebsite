import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";
import Wrapper from "../components/layout/Wrapper";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = (e) => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch,products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <Wrapper>
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10  border-gray-300 p-4">
      <div className="min-w-60">
        {/* filter options */}

        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          {" "}
          Filters
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdownicon}
            alt=""
          />
        </p>

        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 
          ${showFilter ? "" : "hidden"} sm:block `}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Snacks"}
                onChange={toggleCategory}
              />
              Snacks
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Brunch"}
                onChange={toggleCategory}
              />
              Brunch
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Lunch"}
                onChange={toggleCategory}
              />
              Lunch
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Dinner"}
                onChange={toggleCategory}
              />
              Dinner
            </p>
          </div>
        </div>

        {/* subcategory */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Veg"}
                onChange={toggleSubCategory}
              />
              Veg
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Non-Veg"}
                onChange={toggleSubCategory}
              />
              Non-Veg
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Drinks"}
                onChange={toggleSubCategory}
              />
              Drinks
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Desert"}
                onChange={toggleSubCategory}
              />
              Desert
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className="flex-1">
        <div className="flex justify-between items-center mb-12">
          <Title text1={"All "} text2={"Food"} />

          {/* Sort foods*/}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className=" border border-gray-300 rounded text-sm 
                     focus:outline-none px-2 "
          >
            <option value="relavant">Sort by: Relavant</option>
            <option value="high-low">Sort by: High to Low</option>
            <option value="low-high">Sort by: Low to High</option>
          </select>
        </div>

        {/*  products mapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItems
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image[0]}
            />
          ))}
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default Collection;
