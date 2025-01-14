import Link from "next/link";
import React from "react";
import { MdHomeFilled } from "react-icons/md";
import TransitionLink from "./transition-link";

type RedirectButtonProps = {
  href: string;
  title: string;
};

export default function RedirectButton({ href, title }: RedirectButtonProps) {
  return (
    <TransitionLink href={href} className="z-50">

      <button className="mt-4 rounded-md bg-black cursor-pointer">
        <span
          className="block cursor-pointer -translate-x-2 -translate-y-2 rounded-md border-2 border-black bg-yellow-500 p-4 text-2xl  hover:-translate-y-3 
    active:translate-x-0 active:translate-y-0
    transition-all"
        >
          {" "}
          {title}{" "}
        </span>
      </button>
    </TransitionLink>
  );
}
