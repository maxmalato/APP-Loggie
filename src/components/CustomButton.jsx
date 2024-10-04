 const CustomButton = ({ label }) => {
    return (
        <button className="bg-gradient-to-r from-[#19fc56] to-[#5cfc88] my-8 py-4 px-8 rounded-full font-bold tracking-wider drop-shadow-md transition duration-500 hover:-translate-y-2">
        { label }
        </button>
    )
}

export default CustomButton;