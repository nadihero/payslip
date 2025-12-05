import { MobileBottomNav } from "../components/MobileBottomNav";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100dvh] bg-gray-50 md:flex md:items-center md:justify-center md:p-4">
      <div className="w-full md:max-w-[380px] bg-white md:rounded-3xl md:shadow-2xl md:shadow-gray-200/50 h-full md:h-[800px] flex flex-col relative overflow-hidden md:ring-8 md:ring-gray-900/5">
        
        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth relative">
            {children}
            {/* Spacer for Bottom Nav */}
            <div className="h-28"></div>
        </div>

        {/* Bottom Navigation */}
        <MobileBottomNav />
        
      </div>
    </div>
  );
}
