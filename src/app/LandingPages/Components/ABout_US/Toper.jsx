const productData = [
  { id: 1, src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159", alt: "Coding" },
  { id: 2, src: "https://images.unsplash.com/photo-1552664730-d307ca884978", alt: "Workspace" },
  { id: 3, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", alt: "Collaboration" }
];

export default function AboutUS_Topper() {
  return (
    <section className="text-center py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
        We are proud of our products
      </h2>

      <p className="text-gray-500 max-w-3xl mx-auto text-lg mb-16">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 px-6">
        {productData.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={item.src}
              alt={item.alt}
              className="w-65 h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}