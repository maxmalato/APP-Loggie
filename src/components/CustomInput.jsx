export default function CustomInput({ type, placeholder }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className="py-2 px-4 rounded-lg focus:outline-none"
            />
        </>
    )
}