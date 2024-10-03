import Logo from "../assets/logo-loggie.png"

export default function Header({ label }) {
    return (
        <div className="text-center">
            <img src={Logo} className="size-40" />
            <h3 className="text-2xl mb-4">{ label }</h3>
        </div>
    )
}