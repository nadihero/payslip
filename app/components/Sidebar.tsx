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
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col p-4 lg:p-6 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6 lg:mb-10 text-[#465fff] font-bold text-lg lg:text-xl">
        <ShieldCheck className="w-6 h-6 lg:w-8 lg:h-8 fill-[#465fff] text-white" />
        <span>CJTP</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1 lg:space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-lg text-sm font-medium transition-colors
              ${item.active 
                ? "bg-[#ECF3FF] text-[#465fff]" 
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
              >
                <item.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${item.active ? "text-[#465fff]" : "text-gray-400"}`} />
                <span className="text-xs lg:text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="mt-auto">
        <Link
          href="/login"
          className="flex items-center gap-2 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
          <span className="text-xs lg:text-sm">Keluar</span>
        </Link>
      </div>
    </aside>
  );
}
