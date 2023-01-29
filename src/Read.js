import { useEffect, useState } from "react";
import { URI } from "./URI";
import axios from "axios";

export const Read = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(URI);
    setData(res.data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <>
          {data.map((data) => (
            <div key={data.id}>
              <p>Name : {data.name}</p>
              <p>City : {data.city}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
