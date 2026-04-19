// app/layout.js
import "./styles/globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <nav></nav>

                <main>{children}</main>

                <footer></footer>
            </body>
        </html>
    );
}
