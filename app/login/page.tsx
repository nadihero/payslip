import { ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white md:bg-gray-50 flex items-center justify-center md:p-4">
      <div className="w-full md:max-w-[380px] bg-white md:rounded-3xl md:shadow-xl p-8 min-h-screen md:min-h-[700px] flex flex-col relative">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12 mt-8 text-blue-900 font-bold text-xl">
          <ShieldCheck className="w-8 h-8 fill-blue-900 text-white" />
          <span>CJTP</span>
        </div>

        {/* Form */}
        <div className="flex-1">
          <h2 className="text-gray-600 text-center mb-8">Masuk ke Portal Gaji Kamu</h2>

          <div className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="NIK Karyawan"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-700 placeholder:text-gray-400 bg-gray-50/50"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Kata Sandi"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all text-gray-700 placeholder:text-gray-400 bg-gray-50/50"
              />
            </div>

            <Link href="/portal" className="block w-full">
              <button className="w-full bg-blue-900 text-white font-bold py-3 rounded-xl mt-4 hover:bg-blue-950 transition-colors shadow-xl shadow-blue-900/10 cursor-pointer">
                MASUK
              </button>
            </Link>

            <div className="flex justify-between items-center mt-6 text-xs text-gray-500">
              <Link href="#" className="hover:text-blue-700">Lupa Kata Sandi?</Link>
              <Link href="#" className="flex items-center gap-1 text-orange-500 font-medium hover:text-orange-600">
                <HelpCircle className="w-4 h-4 bg-orange-100 rounded-full p-0.5" />
                Bantuan?
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 mb-4 text-[10px] text-gray-400">
          Aman & Terpercaya by CJTP
        </div>
        
      </div>
    </div>
  );
}
