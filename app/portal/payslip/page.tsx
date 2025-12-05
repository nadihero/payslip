import { ArrowLeft, User, Download, Share2, Printer } from "lucide-react";
import Link from "next/link";

export default function PayslipPage() {
  return (
    <div className="flex flex-col min-h-full">
        {/* Header */}
        <div className="p-6 pb-2 flex items-center justify-between absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10">
            <Link href="/portal" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6" />
            </Link>
            <Link href="/portal/profile" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <User className="w-5 h-5 text-gray-500" />
            </Link>
        </div>

        <div className="px-6 pb-6 pt-24 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Payslip Detail</h2>
                    <p className="text-sm text-gray-500">November 2024</p>
                </div>
                <div className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                    LUNAS
                </div>
            </div>

            {/* Salary Card */}
            <div className="bg-[#465fff] rounded-xl p-4 text-white shadow-xl shadow-blue-900/10 mb-6 relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                    <p className="text-blue-100 text-xs mb-1">Total Penerimaan Bersih</p>
                    <h3 className="text-2xl font-bold mb-1">Rp 8.500.000</h3>
                    <p className="text-[10px] text-blue-200 opacity-80">
                        *Sudah termasuk pajak & potongan
                    </p>
                </div>
            </div>

            {/* Details List */}
            <div className="space-y-6 mb-8 flex-1">
                {/* Earnings */}
                <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#465fff]"></div>
                        Pendapatan
                    </h4>
                    <div className="space-y-3 pl-3.5 border-l-2 border-gray-100">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Gaji Pokok</span>
                            <span className="font-semibold text-gray-900">Rp 6.000.000</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Tunjangan Jabatan</span>
                            <span className="font-semibold text-gray-900">Rp 2.000.000</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Uang Makan</span>
                            <span className="font-semibold text-gray-900">Rp 1.000.000</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Lembur (12 Jam)</span>
                            <span className="font-semibold text-gray-900">Rp 500.000</span>
                        </div>
                    </div>
                </div>

                {/* Deductions */}
                <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3a4fe0]"></div>
                        Potongan
                    </h4>
                    <div className="space-y-3 pl-3.5 border-l-2 border-gray-100">
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">BPJS Kesehatan</span>
                            <span className="font-semibold text-red-500">- Rp 300.000</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">BPJS Ketenagakerjaan</span>
                            <span className="font-semibold text-red-500">- Rp 200.000</span>
                        </div>
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Pajak PPh 21</span>
                            <span className="font-semibold text-red-500">- Rp 500.000</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Bagikan
                </button>
                <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#465fff] text-white text-sm font-semibold hover:bg-[#3a4fe0] transition-colors shadow-lg shadow-blue-900/20">
                    <Download className="w-4 h-4" />
                    Unduh PDF
                </button>
            </div>

            <div className="text-center mt-6 text-[10px] text-gray-400">
                Aman & Terpercaya by CJTP
            </div>

        </div>
    </div>
  );
}
