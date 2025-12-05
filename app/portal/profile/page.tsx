import Link from "next/link";
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, ShieldCheck } from "lucide-react";

interface EmployeeProfile {
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  employeeId: string;
}

const profile: EmployeeProfile = {
  name: "John Doe",
  position: "Senior Software Engineer",
  department: "Technology",
  email: "john.doe@cjtp.com",
  phone: "+62 812-3456-7890",
  address: "Jl. Sudirman No. 123, Jakarta Selatan",
  joinDate: "15 Januari 2022",
  employeeId: "EMP-2022-001",
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="p-6 pb-2 flex items-center justify-between absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10">
        <Link href="/portal" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg font-bold text-gray-900">Profil</h1>
        <div className="w-10 h-10" /> {/* Spacer for balance */}
      </div>

      <div className="px-6 pb-6 pt-24 flex-1 flex flex-col">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-[#1e3a8a] rounded-full flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.position}</p>
          <p className="text-xs text-gray-500">{profile.department}</p>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm text-gray-900">{profile.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Nomor Telepon</p>
                  <p className="text-sm text-gray-900">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Alamat</p>
                  <p className="text-sm text-gray-900">{profile.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Informasi Pekerjaan</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">ID Karyawan</p>
                  <p className="text-sm text-gray-900">{profile.employeeId}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Tanggal Bergabung</p>
                  <p className="text-sm text-gray-900">{profile.joinDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button className="w-full py-3 px-4 rounded-xl bg-[#1e3a8a] text-white text-sm font-semibold hover:bg-blue-900 transition-colors">
            Edit Profil
          </button>
          <button className="w-full py-3 px-4 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors">
            Ganti Kata Sandi
          </button>
          <Link href="/login" className="w-full">
            <button className="w-full py-3 px-4 rounded-xl border border-red-300 text-red-600 text-sm font-semibold hover:bg-red-50 transition-colors">
              Keluar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
