"use client";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { DashboardContent } from "./components/DashboardContent";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header with Menu Toggle */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#465fff]">CJTP HR</h1>
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
        <Header />
        <main className="p-4 lg:p-6 min-h-[calc(100vh-64px)]">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}
