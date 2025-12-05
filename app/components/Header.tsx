import { Bell, Plus } from "lucide-react";

export function Header() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 ml-64 sticky top-0 z-40">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-500 text-right">
          Halo, <span className="font-medium text-gray-900">Ibu Dita HRD</span>
        </div>

        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        <button className="bg-[#465fff] hover:bg-[#3a4fe0] text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm shadow-blue-900/20">
          <Plus className="w-4 h-4" />
          Unggah Data Baru
        </button>
      </div>
    </header>
  );
}
