import { type MenuItem } from "@/data/menu";

function formatRupiah(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="menu-card relative border border-[#B4682A]/30 rounded-sm px-3 py-2.5 bg-[#F3EBD9]">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          {item.isFavorite ? (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge-favorit text-sm font-body font-medium break-words text-[#C43A2F]">
                {item.name}
              </span>
              <span className="text-[10px] font-display uppercase tracking-widest bg-[#C43A2F]/10 text-[#C43A2F] px-1.5 py-0.5 rounded-sm border border-[#C43A2F]/20">
                Best Seller
              </span>
            </div>
          ) : (
            <span className="text-sm font-body font-medium text-[#241611] break-words">
              {item.name}
            </span>
          )}
        </div>
        <span
          className="text-sm font-body shrink-0 tabular-nums"
          style={{ color: "#B4682A", fontWeight: 600 }}
        >
          {formatRupiah(item.price)}
        </span>
      </div>
    </div>
  );
}
