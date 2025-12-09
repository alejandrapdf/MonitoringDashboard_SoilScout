"use client";

import { useState } from "react";
import MetricToggle from "./components/dashboard/MetricToggle";
import MetricDisplaySection from "./components/dashboard/MetricDisplaySection";

/* =============================================================================
   HomePage — Dashboard Overview
   -----------------------------------------------------------------------------
   Entry view for site health monitoring.

   Contains:
   • MetricToggle — lets user switch sensor view mode
   • MetricDisplaySection — summary cards + time-series chart

   UX Flow:
   1. User selects metric type (moisture/temperature)
   2. Page updates visual insights instantly via shared state
============================================================================= */

export default function HomePage() {
  const [metric, setMetric] = useState("moisture"); // initial view defaults to moisture

  return (
    <div className="flex flex-col gap-10">
      
      {/* ================= METRIC VISUALIZATION ================ */}
      <section>
        <h3 className="text-xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">
          Metrics
        </h3>

        <MetricToggle metric={metric} setMetric={setMetric} />

        {/* Summary cards + trend chart */}
        <MetricDisplaySection metric={metric} />
      </section>
      
    </div>
  );
}
