import React from "react";

const Form = () => (
  <form
    method="POST"
    action="/uploads"
    encType="multipart/form-data"
    className="UploadForm"
  >
    <input type="file" name="uploads" />
    <button type="submit">submmit</button>
  </form>
);

export default Form;
