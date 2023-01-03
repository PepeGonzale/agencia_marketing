import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import {  Link, useLocation } from "react-router-dom"
const products = [
    {
      id: 1,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    // More products...
  ]
function CategoriesHeader({categories}) {

    const location = useLocation()
    
    return (
        <div className="w-full bg-gray-100 py-8">
            <div className="grid grid-cols-12">
                <div className="col-span-10">
                    <div className="space-x-8 px-12">
                    <div className="relative">
                            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                                <ul
                                    role="list"
                                
                                    className="mx-4 inline-flex space-x-6 sm:mx-6 "
                                >
                                  {
                                        categories&&categories.map((category,index)=>(
                                            <Link key={index} to={`/category/${category.slug}`}
                                            className={`${location.pathname === `/category/${category.slug}` ? "text-orange-500 bg-white":"text-gray-900 border border-gray-100 hover:border-gray-200"} py-2 px-6 rounded-md text-lg font-regular`}>
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                    
                                </ul>
                        </div>
                    </div>
                        

                    </div>
                
                </div>
                <form className="relative col-span-2 mr-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ml-2">
                        <i className="bx bx-search-alt text-gray-800"></i> </div>
                        <input type='search' id='search' 
                        // value= {term}
                        className={`py-2.5 pl-10 pr-3 block w-full rounded-md border-gray-200 focus:border-gray-200 `}
        
                        ></input>
                   
                </form>
            </div>
           
        </div>
    )
}
export default CategoriesHeader