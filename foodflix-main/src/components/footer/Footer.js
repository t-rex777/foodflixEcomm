import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
    return (
        <footer>
            <p className="footer_item">Made with ❤️ by Manish Kumar Sahu</p>
            <Link to="" className="footer_item">Instagram</Link>
            <Link to="" className="footer_item">Github</Link>
            <Link to="" className="footer_item">LinkedIn</Link>
        </footer>
    )
}

export default Footer
