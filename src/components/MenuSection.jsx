import MenuItem from "./MenuItem";

export default function MenuSection({ title, items }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold border-b border-gray-300 mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
