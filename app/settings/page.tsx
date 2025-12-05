"use client";

import { Sidebar } from "../components/Sidebar";
import { Settings, User, Bell, Shield, Palette, Menu, X } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header with Menu Toggle */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#465fff]">Pengaturan</h1>
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
        <div className="max-w-4xl mx-auto p-4 lg:p-6">
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 mb-4 lg:mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Pengaturan</h1>
            
            <div className="space-y-6">
              {/* Profil Perusahaan */}
              <div>
                <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 lg:w-5 lg:h-5 text-[#465fff]" />
                  Profil Perusahaan
                </h2>
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 lg:mb-2">Nama Perusahaan</label>
                    <input type="text" defaultValue="CJTP" readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm lg:text-base" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 lg:mb-2">Email</label>
                    <input type="email" defaultValue="info@cjtp.com" readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm lg:text-base" />
                  </div>
                </div>
              </div>

              {/* Notifikasi */}
              <div>
                <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                  <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-[#465fff]" />
                  Notifikasi
                </h2>
                <div className="space-y-2 lg:space-y-3">
                  <label className="flex items-center gap-2 lg:gap-3">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#465fff]" />
                    <span className="text-sm lg:text-base">Email notifikasi untuk upload data baru</span>
                  </label>
                  <label className="flex items-center gap-2 lg:gap-3">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#465fff]" />
                    <span className="text-sm lg:text-base">Email notifikasi untuk perubahan data</span>
                  </label>
                </div>
              </div>

              {/* Keamanan */}
              <div>
                <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-[#465fff]" />
                  Keamanan
                </h2>
                <div className="space-y-3 lg:space-y-4">
                  <button className="bg-[#465fff] text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-[#3a4fe0] transition-colors text-sm lg:text-base">
                    Ubah Password
                  </button>
                  <button className="border border-gray-300 px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm lg:text-base">
                    Backup Data
                  </button>
                </div>
              </div>

              {/* Tema */}
              <div>
                <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                  <Palette className="w-4 h-4 lg:w-5 lg:h-5 text-[#465fff]" />
                  Tema Aplikasi
                </h2>
                <div className="space-y-2 lg:space-y-3">
                  <label className="flex items-center gap-2 lg:gap-3">
                    <input type="radio" name="theme" defaultChecked className="text-[#465fff]" />
                    <span className="text-sm lg:text-base">Mode Terang</span>
                  </label>
                  <label className="flex items-center gap-2 lg:gap-3">
                    <input type="radio" name="theme" className="text-[#465fff]" />
                    <span className="text-sm lg:text-base">Mode Gelap</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
