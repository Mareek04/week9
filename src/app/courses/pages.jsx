import React from "react";
import coursecard from './Coursecard'


export default function Courses(){
    return(
        <div className="grid grid-cols-3 gap-3 grid-rows-[200px_200px">
        <Coursecard title = 'html' desc = 'all about elements' num = '14' social = 'instagram' color = 'bg-red-600'/>
        <Coursecard title = 'html' desc = 'all about elements' num = '14'/>
        <Coursecard title = 'html' desc = 'all about elements' num = '14'/>
        <Coursecard title = 'html' desc = 'all about elements' num = '14'/>
        <Coursecard title = 'html' desc = 'all about elements' num = '14'/>
        </div>
    )
}