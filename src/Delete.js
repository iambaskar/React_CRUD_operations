import { useEffect, useState } from "react";
import { URI } from "./URI";
import axios from "axios";

export const Delete = () => {
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

  const handleDelete = async (id) => {
    await axios.delete(URI + id);
    getData();
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
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
