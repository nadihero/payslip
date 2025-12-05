import Link from "next/link";
import { ArrowLeft, Bell, Clock, CheckCircle, AlertCircle, User } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "info" | "success" | "warning";
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Payslip November 2024",
    message: "Payslip Anda untuk bulan November 2024 telah tersedia",
    time: "2 jam yang lalu",
    type: "success",
    read: false,
  },
  {
    id: "2",
    title: "Pengumuman Kenaikan Gaji",
    message: "Selamat! Anda mendapatkan kenaikan gaji efektif 1 Desember 2024",
    time: "1 hari yang lalu",
    type: "info",
    read: false,
  },
  {
    id: "3",
    title: "Cuti Tahunan",
    message: "Sisa cuti tahunan Anda: 5 hari",
    time: "3 hari yang lalu",
    type: "warning",
    read: true,
  },
  {
    id: "4",
    title: "Pembayaran Berhasil",
    message: "Gaji bulan November 2024 telah ditransfer ke rekening Anda",
    time: "1 minggu yang lalu",
    type: "success",
    read: true,
  },
];

const getIcon = (type: Notification["type"]) => {
  switch (type) {
    case "success":
      return <CheckCircle className="w-5 h-5 text-[#039855]" />;
    case "warning":
      return <AlertCircle className="w-5 h-5 text-orange-600" />;
    case "info":
    default:
      return <Bell className="w-5 h-5 text-blue-600" />;
  }
};

const getBgColor = (type: Notification["type"], read: boolean) => {
  if (read) return "bg-gray-50";
  
  switch (type) {
    case "success":
      return "bg-[#ECFDF3]";
    case "warning":
      return "bg-orange-50";
    case "info":
    default:
      return "bg-blue-50";
  }
};

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="p-6 pb-2 flex items-center justify-between absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10">
        <Link href="/portal" className="text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-900">Notifikasi</h1>
          {unreadCount > 0 && (
            <p className="text-xs text-gray-500">{unreadCount} belum dibaca</p>
          )}
        </div>
        <Link href="/portal/profile" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <User className="w-5 h-5 text-gray-500" />
        </Link>
      </div>

      <div className="px-6 pb-6 pt-24 flex-1 flex flex-col">
        {/* Notification List */}
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border transition-all ${
                getBgColor(notification.type, notification.read)
              } ${
                !notification.read 
                  ? "border-blue-200 shadow-sm" 
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-full ${
                  notification.read ? "bg-gray-100" : "bg-white"
                }`}>
                  {getIcon(notification.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className={`text-sm font-semibold ${
                      notification.read ? "text-gray-700" : "text-gray-900"
                    }`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className={`bg-blue-50 text-[#465fff] text-[10px] font-bold px-2 py-1 rounded-full`}>Baru</span>
                    )}
                  </div>
                  
                  <p className={`text-xs mt-1 ${
                    notification.read ? "text-gray-500" : "text-gray-600"
                  }`}>
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center gap-1 mt-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tidak ada notifikasi</h3>
            <p className="text-sm text-gray-500">Anda akan menerima notifikasi di sini</p>
          </div>
        )}
      </div>
    </div>
  );
}
