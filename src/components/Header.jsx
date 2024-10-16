import Logo from "../assets/logo-loggie.png"

function Header({ label }) {
    return (
        <div className="flex flex-col items-center">
            <img src={Logo} className="size-40" />
            <h3 className="text-2xl mb-4">{ label }</h3>
        </div>
    )
}

export default Header