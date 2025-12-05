import { CloudUpload, Download, FileSpreadsheet } from "lucide-react";
import { SalaryChart } from "./SalaryChart";

export function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div className="col-span-1 lg:col-span-5 flex flex-col gap-4 lg:gap-6">
        
        {/* Status Card */}
        <div className="bg-[#465fff] rounded-lg lg:rounded-xl p-4 lg:p-6 text-white relative overflow-hidden shadow-lg shadow-blue-900/10">
          <div className="absolute top-0 right-0 w-20 h-20 lg:w-32 lg:h-32 bg-white opacity-5 rounded-full -mr-5 -mt-5 lg:-mr-10 lg:-mt-10"></div>
          <div className="relative z-10">
            <h3 className="text-blue-100 text-sm font-medium mb-1">Status Pengiriman Gaji</h3>
            <p className="text-blue-200 text-xs mb-2 lg:mb-4">November 2024</p>
            <div className="text-2xl lg:text-3xl font-bold mb-1">1000/1000</div>
            <div className="text-base lg:text-lg font-medium opacity-90 mb-3 lg:mb-6">Berhasil</div>
            <button className="text-xs text-blue-100 hover:text-white underline decoration-blue-300/50 hover:decoration-white transition-all">
              Klik untuk lihat detail
            </button>
          </div>
        </div>

        {/* Upload Zone */}
        <div className="bg-white rounded-lg lg:rounded-xl border border-dashed border-gray-300 p-4 lg:p-8 flex flex-col items-center justify-center text-center hover:border-[#465fff] hover:bg-[#ecf3ff] transition-colors cursor-pointer group">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2 lg:mb-4 group-hover:scale-110 transition-transform">
            <CloudUpload className="w-5 h-5 lg:w-6 lg:h-6 text-[#465fff]" />
          </div>
          
          <h4 className="text-gray-900 font-medium mb-1 text-sm lg:text-base">Tarik file Excel (.xlsx)</h4>
          <p className="text-gray-500 text-xs lg:text-sm mb-3 lg:mb-6">atau klik cari file</p>
          
          <p className="text-xs text-gray-400 mb-3 lg:mb-4 max-w-[200px]">
            Terakhir diperbarui oleh Sinta pada 19 November 2024
          </p>
          
          <div className="flex flex-col gap-1 lg:gap-2 w-full max-w-[180px] lg:max-w-[200px]">
            <div className="flex items-center gap-1 lg:gap-2 text-xs text-[#465fff] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#465fff]"></span>
              Hanya file .xlsx
            </div>
            <button className="flex items-center gap-1 lg:gap-2 text-xs text-[#465fff] font-medium hover:underline">
              <Download className="w-3 h-3" />
              Unduh Template Excel
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-7">
        <SalaryChart />
      </div>
    </div>
  );
}
