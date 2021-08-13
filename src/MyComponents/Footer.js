import React from 'react'

export const Footer = () => {
    let styleFooter = {
        width: "100%"
    };
    return (
        <footer className="bg-dark text-light py-3" style={styleFooter}>
            <p className="text-center">
                Copyrights &copy; mytodoslist.com
            </p>
        </footer>
    )
}
