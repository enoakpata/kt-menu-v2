export default function MenuItem({ name, description, description1, price }) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <p className="font-semibold">{name}</p>
        {description && <p className="text-sm italic text-gray-500">{description}</p>}
        {description1 && <p className="text-sm italic text-gray-500">{description1}</p>}
      </div>
      <p className="font-medium">{price}</p>
    </div>
  );
}
