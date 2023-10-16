import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Country = () => {
  const { id } = useParams();
  const [responseData] = useOutletContext();

  return (
    <div className="min-h-[93.8vh] dark:bg-very-dark-blue-bg flex md:flex-row flex-col md:items-center justify-center md:ml-0 ml-6 dark:text-white">
      <div className="md:w-1/2 w-[90%] md:mb-0 mb-10 flex items-center justify-center">
        <img
          src={responseData[id].flags.png}
          alt="flag"
          className="w-[500px] border border-black/10"
        />
      </div>
      <div className="md:w-1/2 space-y-5 flex flex-col">
        <h1 className="font-bold text-3xl">{responseData[id].name}</h1>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 space-y-2">
            <h1 className="font-bold">
              Native Name:{" "}
              <span className="font-light">{responseData[id].nativeName}</span>{" "}
            </h1>
            <h1 className="font-bold">
              Population:{" "}
              <span className="font-light">{responseData[id].population}</span>{" "}
            </h1>
            <h1 className="font-bold">
              Region:{" "}
              <span className="font-light">{responseData[id].region}</span>{" "}
            </h1>
            <h1 className="font-bold">
              Sub Region:{" "}
              <span className="font-light">{responseData[id].subregion}</span>{" "}
            </h1>
            <h1 className="font-bold">
              Capital:{" "}
              <span className="font-light">{responseData[id].capital}</span>{" "}
            </h1>
          </div>
          <div className="md:w-1/2 space-y-2">
            <h1 className="font-bold">
              Top Level Domain:{" "}
              <span className="font-light">
                {responseData[id].topLevelDomain[0]}
              </span>{" "}
            </h1>
            <h1 className="font-bold">
              Currencies:{" "}
              <span className="font-light">
                {responseData[id].currencies[0].name}
              </span>{" "}
            </h1>
          </div>
        </div>
        {responseData[id].borders && (
          <div className="mt-5">
            <h1 className="mr-5 mb-3">Border Countries:</h1>
            <div className="flex flex-wrap gap-2">
              {responseData[id].borders.map((border) => (
                <p
                  key={id}
                  className="dark:bg-dark-blue border border-black/10 rounded-sm px-5"
                >
                  {" "}
                  {border}{" "}
                </p>
              ))}{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
