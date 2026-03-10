import { FaHome } from "react-icons/fa"
import NavUnit from "./NavUnit"

const NavbarForLoggedOut = () => {
    return (
        <>
        <div>
            <NavUnit icon={<FaHome /> } label="Home" />
        </div>
        </>
    )
}

export default NavbarForLoggedOut