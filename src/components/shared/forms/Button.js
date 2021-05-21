import React from 'react'
import ButtonSpinnerSvg from '../ButtonSpinnerSvg'

const Button = ({ title, loadingTitle, loading, ...props }) => (
  <button
    className="inline-flex items-center justify-center text-white w-full py-2.5 px-8 text-sm font-semibold bg-green-400 hover:bg-orange-500 rounded-md focus:outline-none disabled:opacity-50 transition ease-in-out duration-300"
    {...props}
  >
    {loading && <ButtonSpinnerSvg />}
    {loading ? loadingTitle || title : title}
  </button>
)

export default Button
