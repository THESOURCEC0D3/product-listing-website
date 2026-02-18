import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <p>This Page does not have any content yet</p>
        <Link to="/" className="p-3 bg-purple-500 text-white rounded-2xl">Go Home</Link>
      </div>
    </>
  );

};

export default Contact;
