import { CloudUpload, Download, FileSpreadsheet } from "lucide-react";
import { SalaryChart } from "./SalaryChart";

export function DashboardContent() {
  return (
    <main className="p-8 ml-64 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          
          {/* Status Card */}
          <div className="bg-[#465fff] rounded-xl p-6 text-white relative overflow-hidden shadow-lg shadow-blue-900/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <h3 className="text-blue-100 text-sm font-medium mb-1">Status Pengiriman Gaji</h3>
              <p className="text-blue-200 text-xs mb-4">November 2024</p>
              
              <div className="text-3xl font-bold mb-1">1000/1000</div>
              <div className="text-lg font-medium opacity-90 mb-6">Berhasil</div>
              
              <button className="text-xs text-blue-100 hover:text-white underline decoration-blue-300/50 hover:decoration-white transition-all">
                Klik untuk lihat detail
              </button>
            </div>
          </div>

          {/* Upload Zone */}
          <div className="bg-white rounded-xl border border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center hover:border-[#465fff] hover:bg-[#ecf3ff] transition-colors cursor-pointer group h-full">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CloudUpload className="w-6 h-6 text-[#465fff]" />
            </div>
            
            <h4 className="text-gray-900 font-medium mb-1">Tarik file Excel (.xlsx)</h4>
            <p className="text-gray-500 text-sm mb-6">atau klik cari file</p>
            
            <p className="text-xs text-gray-400 mb-4 max-w-[200px]">
              Terakhir diperbarui oleh Sinta pada 19 November 2024
            </p>

            <div className="flex flex-col gap-2 w-full max-w-[200px]">
               <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#039855]"></span>
                  Realisasi Gaji
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                  Estimasi
                </div>
              </div>
               <button className="flex items-center gap-2 text-xs text-[#465fff] font-medium hover:underline">
                  <Download className="w-3 h-3" />
                  Unduh Template Excel
               </button>
            </div>
          </div>

        </div>

        {/* Right Column - Chart */}
        <div className="col-span-12 lg:col-span-7">
          <SalaryChart />
        </div>

      </div>
    </main>
  );
}
