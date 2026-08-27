import React from "react";
import { useFormStatus } from "react-dom";

const App = () => {
  const handleForm = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("Submitted!!!");
  };
  const Form = () => {
    const {pending} = useFormStatus();
    console.log(pending)
    return (
      <div>
          <input type="text" placeholder="Enter username" />
          <input type="text" placeholder="Enter password" />
          <button type="submit" disabled={pending}>{pending?"submitting...":"submit"}</button>
        
      </div>
    );
  };
  return <div>
    <form action={handleForm}>
      <Form/>
    </form>
  </div>;
};

export default App;
