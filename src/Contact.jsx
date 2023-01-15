import React from 'react';
export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex flex-col self-center justify-center">
      <div className="paraText">
        If you are interested in having a conversation about working
        together or are looking for more information, feel free to
        reach out through the form below.
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col self-center p-8"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="py-3 pl-4 pr-40 m-4 border-2 border-black rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="py-3 pl-4 pr-40 m-4 border-2 border-black rounded"
        />
        <textarea
          placeholder="Message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          className="py-3 pl-4 pr-40 m-4 border-2 border-black rounded"
        />
        <button className="px-12 py-3 m-4 border-2 border-black rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
