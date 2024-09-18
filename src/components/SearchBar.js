import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({  }) {
    return (
        <div className="w-full mx-auto mb-10 -mt-8 max-sm:-mt-20 max-sm:mb-0">
            <form action="" className="flex gap-4 border-b-2 border-secondary p-2 max-sm:p-1">
                <input type="text" placeholder="Search" name="search-query" id="src-qry" className="text-xl max-sm:text-xs text-secondary placeholder-secondary-50% focus:outline-none w-full"/>
                <button type="submit">
                    <IoSearch className="text-secondary text-2xl max-sm:text-sm"/>
                </button>
                <button type="button">
                    <BsCalendar2Date className="text-secondary text-2xl max-sm:text-sm"/>
                </button>
            </form>
        </div>
    )
}