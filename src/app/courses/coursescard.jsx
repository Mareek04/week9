import React from "react";
import coursecard from './coursecard'
import Link from "next/link";

export default function Courses() {
    return(
        <div className="{`border-red-500 border-4 rounded-md shadow-lg text-center py-3`">
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>num</p>
            <p className={`${color} w-3/5 py-2 rounded-sm m-auto`}><Link href={`https://www.${social}.com`} target = '_blank'> {social}  </Link></p>
        </div>
    )
}