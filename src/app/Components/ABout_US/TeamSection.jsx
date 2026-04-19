export default function TeamSection() {
    const teamMembers = [
        {
            name: "Blake Matthews",
            role: "CEO & Co-Founder",
            imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Jack Newman",
            role: "CTO",
            imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Sarinia Martins",
            role: "Marketing",
            imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Spencer Wright",
            role: "Project management",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Caroline Ming",
            role: "Sales",
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Anna Mills",
            role: "Design lead",
            imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <section className="w-full bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
                
                <div className="lg:w-1/3 flex flex-col gap-4 sticky top-10">
                    <h2 className="text-[36px] font-bold text-[#1D2130] leading-tight">
                        Our talented Team
                    </h2>
                    <p className="text-[#52525B] leading-relaxed max-w-md">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                    </p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col rounded-[20px] overflow-hidden"
                        >
                            <div className="h-[240px] w-full overflow-hidden bg-gray-200">
                                <img 
                                    src={member.imageUrl} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="bg-[#E6E9FD] p-5 flex flex-col gap-1">
                                <h3 className="font-bold text-lg text-[#1D2130]">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-[#52525B]">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}