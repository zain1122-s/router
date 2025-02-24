import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({ loggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();

    const isLoggedIn = loggedIn(email, password);
    if (isLoggedIn) {
      navigate(" /card"); // Redirect to the navbar page after successful login
    }
    setEmail("");
    setPasssword("");
  };

  return (
    
    <div class="border-1 w-100 h-130 mt-50 ml-170 ">
      <form onSubmit={handleSubmit}>
        <div class="flex flex-col gap-5 ml-9 mt-20">
          <label class="text-2xl">email</label>
          <input 
            class="border-1 max-w-80 h-10 "
            style={{ margin: "0 5px" }}
            type="email"
            value={email}
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="text-2xl">password</label>
          <input
            class="border-1 w-80 h-10"
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={(e) => setPasssword(e.target.value)}
          />
          <a class="text-blue-950">forgoten password</a>
        </div>
        <div class="mt-10 ml-9">
          <button class="bg-blue-600 w-30 h-10 border-1 border-amber-100" type="submit">
            login
          </button>
        </div>
      </form>
    </div>

  );
}