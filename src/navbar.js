export default function NavBar(){
    return <nav className="nav">
        <a href="/" className="site-title">Homepage</a>
        <ul> 
            <li>
                <a href="/landscape">Landscaping Services</a>
            </li>
            <li>
                <a href="/projects">Projects Gallery</a>
            </li>
            <li>
                <a href="/faq">FAQS</a>
            </li>
            <li>
                <a href="/contactus">Contact Us</a>
            </li>
        </ul>
    </nav>
}