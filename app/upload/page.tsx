"use client";

import { Sidebar } from "../components/Sidebar";
import { Upload, FileText, Menu, X } from "lucide-react";
import { useState } from "react";

export default function UploadPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header with Menu Toggle */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#465fff]">Unggah Data</h1>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#465fff]">Menu</h2>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:ml-64 p-4 lg:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Unggah Data Karyawan</h1>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg lg:rounded-xl p-6 lg:p-8 text-center hover:border-[#465fff] hover:bg-[#ecf3ff] transition-colors cursor-pointer">
              <Upload className="w-10 h-10 lg:w-12 lg:h-12 text-[#465fff] mx-auto mb-3 lg:mb-4" />
              <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-1 lg:mb-2">Tarik file Excel (.xlsx)</h3>
              <p className="text-sm lg:text-base text-gray-500 mb-3 lg:mb-4">atau klik untuk cari file</p>
              <input type="file" accept=".xlsx" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="bg-[#465fff] text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg cursor-pointer hover:bg-[#3a4fe0] transition-colors text-sm lg:text-base">
                Pilih File
              </label>
            </div>
            
            <div className="mt-4 lg:mt-6">
              <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">Template & Format</h3>
              <div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-[#465fff]" />
                  <span className="font-medium text-[#465fff] text-sm lg:text-base">Format yang didukung:</span>
                </div>
                <ul className="text-xs lg:text-sm text-gray-600 space-y-1">
                  <li>• File Excel (.xlsx) dengan kolom: Nama, Email, Jabatan, Departemen</li>
                  <li>• Maksimal 1000 baris data</li>
                  <li>• Tidak ada duplikat email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
