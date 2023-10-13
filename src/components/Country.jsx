import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const Country = () => {
  const { id } = useParams();
  const [responseData] = useOutletContext();
  // {responseData[id].name}

  return (
    <div className="mx-20">
      <div className="flex">
        <div className="w-1/2 flex flex-col space-y-10 justify-center">
          <Link to="/" className="px-10 py-2 shadow-md border border-black/10 w-[150px] hover:shadow-xl">
            Back
          </Link>
          <img
            src={responseData[id].flags.png}
            alt="flag"
            className="w-[500px]"
          />{" "}
        </div>
        <div className="w-1/2 py-10">
          <h1 className="font-bold text-3xl pl-4">{responseData[id].name}</h1>
          <div className="space-y-3 p-5 text-sm">
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
      </div>
    </div>
  );
};

export default Country;
