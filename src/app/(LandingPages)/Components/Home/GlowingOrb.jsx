export default function GlowingOrb({ className = "" }) {
    return (
        <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-300/40 to-blue-400/30 blur-[60px] animate-pulse" />
        </div>
    );
}