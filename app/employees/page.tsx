"use client";

import { Sidebar } from "../components/Sidebar";
import { Users, Search, Filter, Eye, Edit, Trash2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function EmployeesPage() {
  const employees = [
    { id: 1, name: "Ahmad Fauzi", email: "ahmad@cjtp.com", position: "Senior Developer", department: "IT", status: "Active" },
    { id: 2, name: "Siti Nurhaliza", email: "siti@cjtp.com", position: "HR Manager", department: "HR", status: "Active" },
    { id: 3, name: "Budi Santoso", email: "budi@cjtp.com", position: "Marketing Lead", department: "Marketing", status: "Active" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header with Menu Toggle */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#465fff]">Karyawan</h1>
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
          <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 mb-4 lg:mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-6">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-0">Manajemen Karyawan</h1>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="w-4 h-4 lg:w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Cari karyawan..." 
                    className="w-full lg:w-auto pl-10 pr-4 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465fff]"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700">Nama</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700 hidden lg:table-cell">Email</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700">Jabatan</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700 hidden md:table-cell">Departemen</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700 hidden sm:table-cell">Status</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base font-medium text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base">{employee.name}</td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base hidden lg:table-cell">{employee.email}</td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base">{employee.position}</td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base hidden md:table-cell">{employee.department}</td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-sm lg:text-base hidden sm:table-cell">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{employee.status}</span>
                      </td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4">
                        <div className="flex items-center gap-1 lg:gap-2">
                          <button className="text-[#465fff] hover:text-[#3a4fe0] p-1">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-[#465fff] hover:text-[#3a4fe0] p-1">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-500 hover:text-red-700 p-1">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
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
