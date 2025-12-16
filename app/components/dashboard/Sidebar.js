"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Icons (lucide-react)
import { Home, Cpu, Map } from "lucide-react";

// Brand assets
import logo from "../../../public/soilScout.png";
import smallLogo from "../../../public/icon.png";

/* =============================================================================
   <Sidebar />
   -----------------------------------------------------------------------------
   Collapsible navigation sidebar used across the UI.

   Interaction & Behavior:
   • Expands for full navigation context
   • Collapses to save horizontal space when needed
   • Active route is highlighted for orientation
   • Icons remain visible even when collapsed (prevents navigation loss)

   UX Intent:
   - The sidebar supports navigation without competing with main content.
   - Collapsed mode reduces visual footprint while retaining usability.
   - Motion/transition help the UI feel responsive and modern.

   Design Principles:
   ✓ Low-contrast dark theme to avoid visual dominance
   ✓ Smooth width animation for state change clarity
   ✓ Icons readable at all sizes, logo adapts automatically
============================================================================= */
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`
        flex flex-col min-h-screen bg-[#2F4F4F]
        transition-all duration-300 shadow-inner h-screen
        ${collapsed ? "w-20" : "w-60"}
      `}
    >

      {/* Logo adjusts based on space — avoids awkward scaling */}
      <div className="flex items-center justify-center py-6">
        {!collapsed && <Image src={logo} alt="SoilScout logo" width={130} />}
        {collapsed && <Image src={smallLogo} alt="SoilScout icon" width={42} />}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-3">
        <SidebarItem href="/"          icon={<Home size={18} />} label="Dashboard"  collapsed={collapsed} pathname={pathname} />
        <SidebarItem href="/secondPage" icon={<Cpu size={18} />} label="Sensors"    collapsed={collapsed} pathname={pathname} />
        <SidebarItem href="/thirdPage"  icon={<Map size={18} />} label="Map"        collapsed={collapsed} pathname={pathname} />
      </nav>

    </aside>
  );
}

/* =============================================================================
   <SidebarItem />
   -----------------------------------------------------------------------------
   Single navigation entry.

   Behavioral Details:
   • Highlights when the current route matches `href`
   • Supports compact mode by hiding label but retaining icon
   • Click target remains large enough for easy interaction

   Why this abstraction matters:
   - Enables scalable navigation without repeated markup
   - Keeps active state styling consistent across all links
   - Works cleanly with new items or nested routes later
============================================================================= */
function SidebarItem({ icon, label, collapsed, href, pathname }) {
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`
          flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md cursor-pointer
          transition hover:bg-zinc-800
          ${isActive ? "bg-zinc-800 text-green-300" : "text-zinc-300"}
        `}
      >
        {icon}
        {!collapsed && <span>{label}</span>} {/* Hidden in compact view for space efficiency */}
      </div>
    </Link>
  );
}
