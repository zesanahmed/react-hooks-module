import { ChangeEvent, useState } from "react";

const ChangeEventFunc = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log({ [name]: value });
    setUser({ ...user, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        className="border border-2 bg-slate-100"
      />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        className="border border-2 bg-slate-100"
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ChangeEventFunc;
