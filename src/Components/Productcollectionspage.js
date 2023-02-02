import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Productspage from './Productspage'

export default function Productcollectionspage() {
  const [products, setProducts]=useState([
    {
      availability:true,
      price: 100,
      colour: "red",
      name:"Limited Edition Sports Trainer",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
    },
    {
      availability:false,
      price: 200,
      colour: "green",
      name:"shoes",
      image: "https://assets.ajio.com/medias/sys_master/root/20220726/h6R0/62deed5bf997dd03e2f5fb56/-473Wx593H-464078071-grey-MODEL.jpg"
    },
    {
      availability:true,
      price: 90,
      colour: "violet",
      name:"watch",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735"
    },
    {
      availability:true,
      price: 1000,
      colour: "green",
      name:"jacket",
      image: "https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets-500x500.jpg"
    },
    {
      availability:false,
      price: 200,
      colour: "green",
      name:"shoes",
      image: "https://m.media-amazon.com/images/I/715TLEvzxUS._UY500_.jpg"
    },
    {
      availability:false,
      price: 200,
      colour: "green",
      name:"shoes",
      image: "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/s/i/l/10-2031-blu-wht-44-bruton-blue-original-imagfmdubtgj8ebj-bb.jpeg?q=70"
    },
    {
      availability:true,
      price: 900,
      colour: "red",
      name:"pants",
      image: "https://cdn.shopify.com/s/files/1/1231/6442/products/M-PANTS-16181-20250-OLIVE_7.jpg?v=1663670982&width=1920"
    },
  ])
  const [instock, setinstock]= useState(false)
  const [lowerlimit, setlowerlimit]= useState(0)
  const [upperlimit, setupperlimit]= useState(0)

  const handlereset=()=>{
    document.getElementById('FilterPriceFrom').value=0
    document.getElementById('FilterPriceTo').value=0
    setlowerlimit(0)
    setupperlimit(0)
  }
  const handlechange=(e)=>{
    if(instock==true){
      setinstock(false)
    }else{
      setinstock(true)
    }
  }
  const location= useLocation()
  console.log(location);
  const handlefromchange=(e)=>{
    setlowerlimit(e.target.value)
  }
  const handletochange=(e)=>{
    setupperlimit(e.target.value)
  }
  return (
    <div>
    <Navbar/>
    <h1>{location.state}</h1>
    <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>
  
            <p class="max-w-md mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
              natus?
            </p>
          </header>
  
          <div class="block mt-8 lg:hidden">
            <button
              class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
            >
              <span class="text-sm font-medium"> Filters & Sorting </span>
  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
  
          <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div class="hidden space-y-4 lg:block">
              <div>
                <label for="SortBy" class="block text-xs font-medium text-gray-700">
                  Sort By
                </label>
  
                <select id="SortBy" class="mt-1 text-sm border-gray-300 rounded">
                  <option>Sort By</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>
  
              <div>
                <p class="block text-xs font-medium text-gray-700">Filters</p>
  
                <div class="mt-1 space-y-2">
                  <details
                    class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary
                      class="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer"
                    >
                      <span class="text-sm font-medium"> Availability </span>
  
                      <span class="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>
  
                    <div class="bg-white border-t border-gray-200">
  
                      <ul class="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label
                            for="FilterInStock"
                            class="inline-flex items-center gap-2 hover:cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              class="w-5 h-5 border-gray-300 rounded"
                              onChange={handlechange}
                              className="hover:cursor-pointer"
                              
                            />
                            <span class="text-sm font-medium text-gray-700">
                              In Stock
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
  
                  <details
                    class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary
                      class="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer"
                    >
                      <span class="text-sm font-medium"> Price </span>
  
                      <span class="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>
  
                    <div class="bg-white border-t border-gray-200">
                      <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700">
                          The highest price is $600
                        </span>
  
                        <button
                          type="button"
                          class="text-sm text-gray-900 underline underline-offset-4"
                          onClick={handlereset}
                        >
                          Reset
                        </button>
                      </header>
  
                      <div class="p-4 border-t border-gray-200">
                        <div class="flex justify-between gap-4">
                          <label
                            for="FilterPriceFrom"
                            class="flex items-center gap-2"
                          >
                            <span class="text-sm text-gray-600">$</span>
  
                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                              onChange={handlefromchange}
                            />
                          </label>
  
                          <label for="FilterPriceTo" class="flex items-center gap-2">
                            <span class="text-sm text-gray-600">$</span>
  
                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                              onChange={handletochange}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>
  
                  <details
                    class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary
                      class="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer"
                    >
                      <span class="text-sm font-medium"> Colors </span>
  
                      <span class="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>
  
                    <div class="bg-white border-t border-gray-200">
                      <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700"> 0 Selected </span>
  
                        <button
                          type="button"
                          class="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>
  
                      <ul class="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label
                            for="FilterRed"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterRed"
                              class="w-5 h-5 border-gray-300 rounded"
                            />
  
                            <span class="text-sm font-medium text-gray-700">
                              Red
                            </span>
                          </label>
                        </li>
  
                        <li>
                          <label
                            for="FilterBlue"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterBlue"
                              class="w-5 h-5 border-gray-300 rounded"
                            />
  
                            <span class="text-sm font-medium text-gray-700">
                              Blue
                            </span>
                          </label>
                        </li>
  
                        <li>
                          <label
                            for="FilterGreen"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterGreen"
                              class="w-5 h-5 border-gray-300 rounded"
                            />
  
                            <span class="text-sm font-medium text-gray-700">
                              Green
                            </span>
                          </label>
                        </li>
  
                        <li>
                          <label
                            for="FilterOrange"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOrange"
                              class="w-5 h-5 border-gray-300 rounded"
                            />
  
                            <span class="text-sm font-medium text-gray-700">
                              Orange
                            </span>
                          </label>
                        </li>
  
                        <li>
                          <label
                            for="FilterPurple"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPurple"
                              class="w-5 h-5 border-gray-300 rounded"
                            />
  
                            <span class="text-sm font-medium text-gray-700">
                              Purple
                            </span>
                          </label>
                        </li>
  
                        <li>
                          <label
                            for="FilterTeal"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterTeal"
                              class="w-5 h-5 border-gray-300 rounded"
                            />
  
                            <span class="text-sm font-medium text-gray-700">
                              Teal
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            {products.filter(items=>{
              if(instock){
                return products && items.availability
              }else if(upperlimit>0 && lowerlimit>0){
                return products && items.price<upperlimit && items.price>lowerlimit
              }
              return products && items.price>lowerlimit
            }).map((items)=>{ 
              return(
                <li className='list-none hover:cursor-pointer'>
                    <img 
                      src={items.image}
                      alt=""
                      class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                    />
                    <div class="relative pt-3 bg-white">
                      <h3
                        class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                      >
                        {items.name}
                      </h3>

                      <div class="mt-1.5 flex items-center justify-between text-gray-900">
                        <p class="tracking-wide">${items.price}</p>

                        <p class="text-xs tracking-wide uppercase">{items.colour}</p>
                      </div>
                      <button class="block mt-2 w-full p-4 text-sm font-medium transition bg-yellow-400 rounded hover:scale-105">
                        Add to Cart
                      </button>
                    </div>
                </li>
              )
            })}
            {/* product cards end here */}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
