import Link from "next/link";
import { 
  LayoutDashboard, 
  Upload, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  ShieldCheck
} from "lucide-react";

export function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/", active: true },
    { name: "Unggah Data", icon: Upload, href: "/upload", active: false },
    { name: "Manajemen Karyawan", icon: Users, href: "/employees", active: false },
    { name: "Log Audit", icon: FileText, href: "/audit", active: false },
    { name: "Pengaturan", icon: Settings, href: "/settings", active: false },
  ];

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col p-6 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 text-[#465fff] font-bold text-xl">
        <ShieldCheck className="w-8 h-8 fill-[#465fff] text-white" />
        <span>CJTP</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
              ${item.active 
                ? "bg-[#ecf3ff] text-[#465fff]" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? "text-[#465fff]" : "text-gray-400"}`} />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Bottom Action */}
      <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors mt-auto">
        <LogOut className="w-5 h-5" />
        Keluar
      </Link>
    </aside>
  );
}
