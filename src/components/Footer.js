import React from 'react';

import '../styles/footer.css';

export default function Footer() {
    return (
        <footer>
            copyright © {new Date().getFullYear()} ssbbd
        </footer>
    )
}