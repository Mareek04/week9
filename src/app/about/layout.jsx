import { IBM_Plex_Mono } from "next/font/google";
import { Children } from "react" ;

const ibm = IBM_Plex_Mono({subsets : ["latin"],weight:['400','700']});

export const metadata = {
    title : "about eCommerce",
    description : "fundamentals of react",
};

export default function AboutLayout({children}) {
    return (
        <div className={ibm.className}>

        <div> this is about layout</div>
        {children}

        </div>
    )
}