import { forwardRef } from "react"

const CustomInput = forwardRef((props, ref) => {
    return (
        <>
            <input
                className="py-2 px-4 rounded-lg focus:outline-none"
                ref={ref}
                {...props}
            />
        </>
    )
})

export default CustomInput;