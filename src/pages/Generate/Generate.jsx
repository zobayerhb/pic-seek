const Generate = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    console.log(prompt);

    const form = new FormData();
    form.append("prompt", prompt);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": import.meta.env.VITE_CD_API_KEY, // api key
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        // buffer here is a binary representation of the returned image
        const blob = new Blob([buffer], { type: "image/png" });
        const url = URL.createObjectURL(blob);
        console.log(url);
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-3">Image Generateor</h1>
      <form onSubmit={handleForm} className="mx-40 pt-10">
        <fieldset className="w-full">
          <div className="flex">
            <input
              type="text"
              name="prompt"
              placeholder="Please type your credentials"
              className="input input-bordered join-item w-full focus:outline-0"
            />
            <button type="submit" className="btn btn-primary join-item">
              Generate
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Generate;
