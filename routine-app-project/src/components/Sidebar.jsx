const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'routines', label: 'Routines' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'stats', label: 'Stats' },
]

function Sidebar() {
    return (
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>{link.label}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Sidebar