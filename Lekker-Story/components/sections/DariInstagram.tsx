import { instaPosts } from "@/data/instagram";
import { Heart } from "lucide-react";

export default function DariInstagram() {
  return (
    <section id="instagram" className="bg-[#F3EBD9] bg-grid-notebook py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-[#3A2318] leading-tight mb-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Dari Instagram
            </h2>
            <p className="font-body text-[#241611]/70 text-base">
              Momen yang bikin kamu mau langsung pesan.
            </p>
          </div>
          <a
            href="https://www.instagram.com/lekkerstory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-[#3A2318] border-b border-[#3A2318]/50 pb-0.5 hover:border-[#3A2318] transition-colors shrink-0"
          >
            Lihat semua di @lekkerstory
          </a>
        </div>

        {/* Asymmetric masonry-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[300px]">
          {instaPosts.map((post, i) => (
            <div
              key={post.id}
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 ? "md:row-span-2" : i === 6 ? "md:col-span-2" : ""
              }`}
              
            >
              <img
                src={post.imgUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#3A2318]/0 group-hover:bg-[#3A2318]/60 transition-colors duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <p className="font-body text-[#F3EBD9] text-sm leading-snug line-clamp-2">
                  {post.caption}
                </p>
                {post.likes && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <Heart size={14} className="text-[#E8A93B]" fill="currentColor" />
                    <span className="font-body text-[#F3EBD9]/80 text-xs">{post.likes}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
