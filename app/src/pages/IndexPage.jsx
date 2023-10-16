import { useContext, useState } from "react";

import Layout from "../components/Layout";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/ThemeContext";
import { UserDispatchContext } from "../context/ThemeContext";

const IndexPage = () => {
  const themeContext = useContext(ThemeContext);
  const userDispatch = useContext(UserDispatchContext);
  const userContext = useContext(UserContext);
  const [nameInput, setnameInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  function handleOnChange(name, value) {
    if (name === "name") {
      setnameInput(value);
    } else if (name === "image") {
      setImageInput(value);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const updatedUser = {
      ...userContext,
      name: nameInput,
      image: imageInput,
    };
    userDispatch(updatedUser);
    setnameInput("");
    setImageInput("");
  }

  return (
    <Layout title="Learn Contexts ">
      <form onSubmit={(e) => handleClick(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={nameInput}
          onChange={(e) => handleOnChange("name", e.target.value)}
          required
        />
        <label htmlFor="image">Proifle pic</label>
        <input
          id="image"
          type="text"
          placeholder="Enter url"
          name="image"
          value={imageInput}
          onChange={(e) => handleOnChange("image", e.target.value)}
          required
        />
        <button type="submit">login</button>
      </form>
    </Layout>
  );
};

export default IndexPage;
