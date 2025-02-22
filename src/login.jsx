import React from "react";
import { useState } from "react";

export default function Login({ loggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();

    loggedIn(email, password);
    setEmail("");
    setPasssword("");
  };
  return (
    <div class="  border-1 w-100 h-100 mt-50 ml-170 ">
      <form onSubmit={handleSubmit}>
      <div class="flex flex-col gap-10 ml-9 mt-20 ga">
  <label>email</label>
        <input
          class="border-1 max-w-80 "
          style={{ margin: "0 5px" }}
          type="email"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          class="border-1 w-80  "
          type="password"
          value={password}
          placeholder="enter your password"
          onChange={(e) => setPasssword(e.target.value)}
        />
        <a class="text-blue-950">forgoten password</a>
      </div>
      <div class="mt-10 ml-9">
        <button class="bg-amber-400 w-30 h-10 border-1 border-amber-100 " type="submit">
          login
        </button>
      </div>
      </form>
      
    </div>
  );
}
