interface NavUnitProps {
    icon: React.ReactElement,
    label: string
}

const NavUnit = ({icon, label}: NavUnitProps) => {
    return (
        <>
        <div>
            {icon}
            <h1> {label} </h1>
        </div> 
        </>
    )
}

export default NavUnit;