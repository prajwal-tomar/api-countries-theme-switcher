const Dashboard = ({ filteredData }) => {
  return (
    <main className="mt-10">
      <div className="flex flex-wrap justify-center mx-20">
        {filteredData.map((country, index) => (
          <div
            key={index}
            className="card shadow-lg w-64 h-80 bg-white rounded-lg flex flex-col m-5"
          >
            <img
              src={country.flags.png}
              alt="flag"
              className="rounded-tr-lg rounded-tl-lg h-1/2"
            />
            <div className="h-max flex flex-col space-y-2 py-4 px-4">
              <h1 className="font-bold text-lg">{country.name}</h1>
              <p className="text-sm font-bold">
                Population:{" "}
                <span className="font-light">{country.population}</span>{" "}
              </p>
              <p className="text-sm font-bold">
                Region: <span className="font-light">{country.region}</span>{" "}
              </p>
              <p className="text-sm font-bold">
                Capital: <span className="font-light">{country.capital}</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
