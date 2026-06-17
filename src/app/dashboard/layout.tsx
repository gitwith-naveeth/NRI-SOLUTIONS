"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, ClipboardList, FileText, Mail, LogOut, ShieldCheck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Skip authorization check on login page
    if (pathname === "/dashboard/login") {
      setAuthorized(true);
      return;
    }

    const session = localStorage.getItem("nri_session");
    if (!session) {
      router.push("/dashboard/login");
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("nri_session");
    localStorage.removeItem("nri_user");
    router.push("/dashboard/login");
  };

  const navItems = [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "Service Requests", href: "/dashboard/requests", icon: ClipboardList },
    { label: "Documents", href: "/dashboard/documents", icon: FileText },
    { label: "Messages", href: "/dashboard/messages", icon: Mail },
  ];

  if (pathname === "/dashboard/login") {
    return <>{children}</>;
  }

  if (!authorized) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500 mx-auto"></div>
          <p className="text-xs text-navy-300">Loading secure environment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden bg-navy-950 text-white h-16 px-4 flex items-center justify-between border-b border-white/10 z-40">
        <Link href="/dashboard">
          <span className="font-bold tracking-tight text-sm">
            <span className="text-gold-500">NRI</span> Solutions
          </span>
        </Link>
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger className="text-white hover:bg-white/10 p-2 rounded-xl transition-colors cursor-pointer">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-navy-950 border-r border-white/10 text-white p-6 w-72">
            <SheetTitle className="text-left text-xl font-bold tracking-tight text-white mb-8 border-b border-white/10 pb-4">
              <span className="text-gold-500">NRI</span> Portal
            </SheetTitle>
            <div className="flex flex-col justify-between h-[calc(100vh-120px)]">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-gold-500 text-navy-950"
                          : "text-navy-200 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
              <Button
                onClick={() => {
                  setSidebarOpen(false);
                  handleLogout();
                }}
                className="w-full bg-red-600 hover:bg-red-500 text-white rounded-xl py-3 font-semibold text-sm flex items-center justify-center"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop Left Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-navy-950 text-white border-r border-white/5 p-6 flex-shrink-0 justify-between">
        <div>
          {/* Logo / branding */}
          <Link href="/dashboard" className="block mb-10 pb-6 border-b border-white/10">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-gold-500">NRI</span> Solutions
            </span>
            <span className="block text-[10px] text-navy-300 font-semibold uppercase tracking-wider mt-1">
              Client Portal
            </span>
          </Link>

          {/* Navigation links */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/10"
                      : "text-navy-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info / Logout */}
        <div className="border-t border-white/10 pt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-gold-500 text-navy-950 font-bold rounded-full text-xs flex items-center justify-center">
              RS
            </div>
            <div className="overflow-hidden">
              <span className="font-bold text-xs block text-white truncate">Rajesh Sharma</span>
              <span className="text-[10px] text-navy-300 block truncate">demo@nri.com</span>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full text-left justify-start hover:bg-white/5 hover:text-red-400 text-navy-200 rounded-xl px-4 py-3"
          >
            <LogOut className="h-4 w-4 mr-3 text-red-500" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Right panel */}
      <main className="flex-1 p-6 md:p-10 max-h-screen overflow-y-auto">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
