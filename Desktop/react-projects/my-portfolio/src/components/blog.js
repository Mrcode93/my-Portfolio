import { useState, useEffect } from "react";
const Blog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the user entered a valid email address.
      if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Send the data to the server.
      const response = await fetch("http://localhost:4000/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      // Check the response status code.
      if (response.status === 200) {
        const result = await response.json();
        console.log(result);

        alert(result.message);
        setEmail("");
        setName("");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <h1> This is a React WebApp </h1>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <button type="submit"> Submit </button>{" "}
      </form>{" "}
      {/* <button onClick={logData}>Log Data</button>{" "} */}{" "}
    </>
  );
};

export default Blog;
