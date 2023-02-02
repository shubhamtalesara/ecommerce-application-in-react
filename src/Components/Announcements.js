import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Announcements() {
  let navigate= useNavigate();
  const handleclick=()=>{
    navigate("/Productcollectionspage")
  }
  return (
    <div class="bg-indigo-600 px-4 py-3 text-white hover:cursor-pointer " onClick={handleclick}>
        <p class="text-center text-sm font-medium">
            <a class="underline"> 50% off on mens clothing!* </a>
        </p>
    </div>
  )
}
