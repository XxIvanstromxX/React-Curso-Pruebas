function Header() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1>My Application</h1>
            <ul className="flex space-x-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Header;