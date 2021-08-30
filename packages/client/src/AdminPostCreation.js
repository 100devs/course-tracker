import { useState } from "react";

// Data looks like this (for backend)
// console.log({
//     title:'string',
//     body:'string',
//     publish:boolean
// })

let backend = "https://localhost3000";
let endpoint = `${backend}/api/createPost`;
function AdminPostCreation() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [publish, setPublish] = useState(false);

  const handleSubmit = async (e) => {
    // we might want to go to the next page to see the published post (have to verify this)
    e.preventDefault();
    if (!title || !body) {
      // lets remove this at some point before google deprecates it
      alert("Please add a body/text");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          publish,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      {/* Title Section */}
      <section className="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </section>

      {/* Body Text Section */}
      <section className="">
        <label htmlFor="body">Body of Post</label>
        <textarea
          type="textarea"
          name="body"
          placeholder="Body Info"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </section>

      {/* Publish and Submit Section */}
      <section className="">
        <label htmlFor="publish">Publish</label>
        <input
          type="checkbox"
          name="publish"
          checked={publish}
          value={publish}
          onChange={(e) => setPublish(e.currentTarget.checked)}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </section>
    </form>
  );
}

export default AdminPostCreation;
