"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled={isDisabled}
        type={btnType || "button"}
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none cursor-pointer ${containerStyles}`}
        onClick={handleClick}>
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image
                    src={rightIcon}
                    alt="arrow_left"
                    fill
                    className="object-contain"
                />
            </div>
        )}
    </button>
  )
}

export default CustomButton