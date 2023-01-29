import { useState } from "react";
import axios from "axios";
import { URI } from "./URI";

export const Create = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [add, setAdd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      name,
      city
    });
    setName("");
    setCity("");
    setAdd(true);
  };

  return (
    <div>
      <h1>Create user</h1>
      <form>
        Name :{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        City :{" "}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSubmit}>Add user</button>
      </form>
      <span>{add ? "added" : ""}</span>
    </div>
  );
};
