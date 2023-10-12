import React from "react";
import { useForm, Controller } from "react-hook-form";

const SearchBar = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex md:flex-row md:justify-between justify-center items-start md:px-20 px-10 flex-col"
    >
      <div className="flex items-center text-gray-600 mb-4">
        <Controller
          name="search"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="w-[26rem] rounded-lg p-4 focus:outline-none shadow-md"
              placeholder="Search for a country..."
            />
          )}
        />
        <button type="submit" className="hidden">
          Search
        </button>
      </div>
      <div className="relative text-gray-600">
        <Controller
          name="region"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              className="w-[12rem] rounded-lg p-4 focus:outline-none shadow-md text-bold"
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          )}
        />
      </div>
    </form>
  );
};

export default SearchBar;
