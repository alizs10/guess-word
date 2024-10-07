// import TriangleIcon from '../ui/icons/TriangleIcon'

import { TriangleIcon } from "lucide-react"

function TriangleDesign() {

    return (
        <div className="px-2 py-1 bg-gray-300 rounded-full shadow-sm cursor-pointer w-fit dark:bg-gray-800 sm:py-2 sm:px-3 xl:px-5">
            <div className="flex items-center leading-3 text-gray-800 gap-x-1 sm:gap-x-2 dark:text-gray-400 fill-gray-800 dark:fill-gray-400">
                <span className="text-[9px] sm:text-[12px] font-semibold font-sans select-none">Triangle Design</span>
                <div className="text-blue-800 dark:text-blue-600 ">
                    <TriangleIcon className="size-2 sm:size-4" />
                </div>
            </div>
        </div>
    )
}

export default TriangleDesign