import React from 'react'
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {collection, getDocs, query, orderBy, limit} from "firebase/firestore"
import {db} from "../firebase.config"


function Slider() {
  return (
    <div>
        Slider
    </div>
  )
}

export default Slider