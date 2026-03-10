import { FaHouse } from "react-icons/fa6"
import NavUnit from "./NavUnit"

const NavbarForLoggedIn = () => {

    return (
        <>
            <NavUnit icon={ <FaHouse /> } label="Home" />
        </>
    )
}

export default NavbarForLoggedIn