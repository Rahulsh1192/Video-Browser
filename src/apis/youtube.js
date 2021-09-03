import React from "react";
import axios from "axios";
const KEY = "AIzaSyC1szoxDTdn-2XaabSaW__k3XZOIpz7bkI";


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        maxResult:5,
        key:KEY

    }
})