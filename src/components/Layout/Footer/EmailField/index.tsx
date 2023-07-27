import { useState } from "react";

const isValidEmail = (email: string) => {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const EmailField = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // check if email is valid
    if (!isValidEmail(email)) {
      alert("Please enter a valid email");

      return;
    }
    console.log(email);
    setEmail("");
  };

  return (
    <div className="flex flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Join our newsletter"
        className="text-black"
      />
      <button className="mx-2" onClick={handleSubmit}>
        Join
      </button>
    </div>
  );
};

export default EmailField;
