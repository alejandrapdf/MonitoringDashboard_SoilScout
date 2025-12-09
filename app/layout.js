// ============================================================================
// Root Layout
// ----------------------------------------------------------------------------
// Global application shell used across all routes.
//
// Responsibilities:
// • Persist Sidebar across page transitions using the App Router
// • Provide a consistent Topbar for navigation / user controls
// • Render dynamic page content inside <main /> via {children}
//
// Layout Stack (visual):
//
// ┌──────────────────────────────────────────────────────────────┐
// │ Sidebar  |  Topbar (fixed top of content column)              │
// │          |  ────────────────────────────────────────────────  │
// │          |  Page Content (scrollable)                         │
// │          |                                                    │
// └──────────────────────────────────────────────────────────────┘
//
// UX Rationale:
// - Sidebar anchors navigation spatially → reduces cognitive load
// - Content region scrolls independently for better readability
// - Topbar sits above content to create a clear information hierarchy
// ============================================================================

import "./globals.css";
import Sidebar from "./components/dashboard/Sidebar";
import Topbar from "./components/dashboard/Topbar";

export const metadata = {
  title: "SoilScout Dashboard",
  description: "Live system monitoring interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-background text-foreground">

        {/* Persistent Navigator */}
        <Sidebar />

        {/* Main Application Column */}
        <div className="flex flex-col flex-1">
          <Topbar />

          {/* Route-Rendered Page Content */}
          <main className="p-6 lg:p-10">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
