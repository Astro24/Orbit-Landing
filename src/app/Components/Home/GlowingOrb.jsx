export default function GlowingOrb() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 opacity-30 blur-3xl animate-pulse"></div>
        </div>
    );
}