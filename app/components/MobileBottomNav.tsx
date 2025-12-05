"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Bell, User } from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", icon: Home, href: "/portal" },
    { name: "Notifikasi", icon: Bell, href: "/portal/notifications" },
    { name: "Profil", icon: User, href: "/portal/profile" },
  ];

  return (
    <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <div className="flex justify-between items-center relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex-1 flex flex-col items-center justify-center py-2 transition-all duration-300 ease-out group"
            >
              <div 
                className={`
                  relative z-10 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500
                  ${isActive 
                    ? "bg-[#465fff] -translate-y-4 shadow-lg shadow-blue-900/20" 
                    : "bg-transparent text-[#465fff] group-hover:text-[#3a4fe0]"
                  }
                `}
              >
                <item.icon 
                    className={`w-6 h-6 transition-all duration-300 ${isActive ? "text-white scale-110" : "scale-100"}`} 
                    strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              
              <span 
                className={`
                  absolute bottom-1 text-[10px] font-bold transition-all duration-300
                  ${isActive 
                    ? "opacity-100 translate-y-0 text-[#465fff]" 
                    : "opacity-100 translate-y-0 text-[#344054]"
                  }
                `}
              >
                {item.name}
              </span>

              {/* Active Indicator Dot */}
              {isActive && (
                <span className="absolute bottom-8 w-1 h-1 bg-white rounded-full opacity-50"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
