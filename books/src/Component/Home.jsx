import React from "react";
import TypingEffect from "./TypingEffect";
import book from "../assets/book-magic.webp"

export default function Home() {
  return (
    <div>
        <div className="flex justify-evenly mb-5 mt-20">
            <img className="h-36" src={book} alt="book" />
        </div>
      <TypingEffect/>
    
    </div>
  )
}
