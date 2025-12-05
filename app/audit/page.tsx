"use client";

import { Sidebar } from "../components/Sidebar";
import { FileText, Calendar, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function AuditPage() {
  const auditLogs = [
    { id: 1, action: "Upload data karyawan", user: "Ibu Dita", date: "2024-11-19", time: "14:30", status: "Success" },
    { id: 2, action: "Update profil karyawan", user: "Sinta", date: "2024-11-19", time: "13:15", status: "Success" },
    { id: 3, action: "Download laporan gaji", user: "Budi", date: "2024-11-18", time: "16:45", status: "Success" },
    { id: 4, action: "Hapus karyawan", user: "Ibu Dita", date: "2024-11-18", time: "11:20", status: "Success" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header with Menu Toggle */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#465fff]">Log Audit</h1>
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
      <div className="lg:ml-64">
        <div className="max-w-7xl mx-auto p-4 lg:p-6">
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Log Audit</h1>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700">Aksi</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700">Pengguna</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700 hidden lg:table-cell">Tanggal</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700">Waktu</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base">
                        <div className="flex items-center gap-1 lg:gap-2">
                          <FileText className="w-4 h-4 text-[#465fff]" />
                          <span className="text-sm lg:text-base">{log.action}</span>
                        </div>
                      </td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base">
                        <div className="flex items-center gap-1 lg:gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm lg:text-base">{log.user}</span>
                        </div>
                      </td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base hidden lg:table-cell">
                        <div className="flex items-center gap-1 lg:gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm lg:text-base">{log.date}</span>
                        </div>
                      </td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base">{log.time}</td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{log.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
