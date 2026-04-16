export default function DashboardLayout({ children }) {
    return (
        <html className="flex flex-col min-h-screen">
            <main>
                {children}
            </main>
        </html>
    );
}