import { ChangeEvent, useState } from "react";

const UseStateForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border border-2 bg-slate-100"
      />
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
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

export default UseStateForm;
