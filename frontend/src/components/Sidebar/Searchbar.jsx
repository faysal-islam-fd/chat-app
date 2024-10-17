

import { FaSearch } from "react-icons/fa";


const Searchbar = () => {
  return (
    <form action="" className="flex items-center gap-2">
        <input type="text" placeholder="search..." className="input input-bordered rounded-full" />
        <button className="bg-blue-500 hover:bg-gray-800 hover:transition-all p-4 rounded-full text-white"><FaSearch  className="outline-none"/></button>
    </form>
  )
}

export default Searchbar