import type { MenuItem } from "../data/menu";

type Props = {
  title: string;
  items: MenuItem[];
};

export default function MenuSection({ title, items }: Props) {
  return (
    <div className="menu-section">
      <h2>{title}</h2>
      {items.map(item => (
        <div key={item.id} className="menu-item">
          <div>
            <div className="menu-item-name">{item.name}</div>
            {item.description && (
              <div className="menu-item-desc">{item.description}</div>
            )}
          </div>
          <div className="menu-item-price">₦{item.price}</div>
        </div>
      ))}
    </div>
  );
}
