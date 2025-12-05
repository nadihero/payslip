import { ArrowLeft, User, ChevronDown, FileText, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PortalPage() {
  return (
    <div className="flex flex-col min-h-full">
        {/* Header */}
        <div className="p-6 pb-2 flex items-center justify-between absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10">
            <Link href="/login" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6" />
            </Link>
            <Link href="/portal/profile" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <User className="w-5 h-5 text-gray-500" />
            </Link>
        </div>

        <div className="px-6 pb-6 pt-24 flex-1 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Histori Slip Gaji</h2>
            
            {/* Filter */}
            <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-between border border-gray-100">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>2024</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                <button className="flex-1 bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-between border border-gray-100">
                    <span>Semua Bulan</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
            </div>

            {/* List */}
            <div className="space-y-3">
                
                {/* Card 1 - Active/Latest */}
                <Link href="/portal/payslip" className="block bg-white border border-blue-100 rounded-lg p-3 shadow-sm hover:border-blue-300 transition-all group relative overflow-hidden">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#465fff]"></div>
                   <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-gray-800 group-hover:text-[#465fff] transition-colors">November 2024</h3>
                            <p className="text-xs text-gray-500">Diterima 25 Nov 2024</p>
                        </div>
                        <span className="bg-blue-50 text-[#465fff] text-[10px] font-bold px-2 py-1 rounded-full">
                            BARU
                        </span>
                   </div>
                   <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <FileText className="w-3.5 h-3.5 text-gray-400" />
                            <span>Slip Gaji Bulanan</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1e3a8a]" />
                   </div>
                </Link>

                {/* Card 2 */}
                <Link href="/portal/payslip" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-all group">
                   <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-gray-800 group-hover:text-[#1e3a8a] transition-colors">Oktober 2024</h3>
                            <p className="text-xs text-gray-500">Diterima 25 Okt 2024</p>
                        </div>
                   </div>
                   <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <FileText className="w-3.5 h-3.5 text-gray-400" />
                            <span>Slip Gaji Bulanan</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1e3a8a]" />
                   </div>
                </Link>

                {/* Card 3 */}
                <Link href="/portal/payslip" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-all group">
                   <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-gray-800 group-hover:text-[#1e3a8a] transition-colors">September 2024</h3>
                            <p className="text-xs text-gray-500">Diterima 25 Sep 2024</p>
                        </div>
                   </div>
                   <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <FileText className="w-3.5 h-3.5 text-gray-400" />
                            <span>Slip Gaji Bulanan</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1e3a8a]" />
                   </div>
                </Link>

                 {/* Card 4 */}
                <Link href="/portal/payslip" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-all group">
                   <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-gray-800 group-hover:text-[#1e3a8a] transition-colors">Agustus 2024</h3>
                            <p className="text-xs text-gray-500">Diterima 25 Agu 2024</p>
                        </div>
                   </div>
                   <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <FileText className="w-3.5 h-3.5 text-gray-400" />
                            <span>Slip Gaji Bulanan</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1e3a8a]" />
                   </div>
                </Link>
                
                 {/* Card 5 */}
                <Link href="/portal/payslip" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-all group">
                   <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-gray-800 group-hover:text-[#1e3a8a] transition-colors">Juli 2024</h3>
                            <p className="text-xs text-gray-500">Diterima 25 Jul 2024</p>
                        </div>
                   </div>
                   <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <FileText className="w-3.5 h-3.5 text-gray-400" />
                            <span>Slip Gaji Bulanan</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1e3a8a]" />
                   </div>
                </Link>

            </div>
        </div>
    </div>
  );
}
