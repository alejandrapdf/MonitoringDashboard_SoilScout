"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

/**
 * MetricCard Component
 * ---------------------
 * A small UI block used to display key site-health metrics such as temperature or soil moisture.
 * 
 * Props:
 *  - `label`   : Name of the metric (e.g., "Soil Moisture")
 *  - `value`   : Current reading displayed prominently as the card focus
 *  - `critical`: When true, visually emphasises the card to warn the user of unhealthy soil levels
 *
 * UI Reasoning & Visual Intent:
 *  - High contrast value text ensures the latest reading is scannable at a glance
 *  - Hover elevation (`hover:shadow-md`) makes UI feel responsive + modern
 *  - Rounded borders and muted surfaces reduce visual fatigue over long monitoring sessions
 * 
 * Future Scope:
 *  - `critical` may later be tied to automated insights such as "moisture too low" or 
 *    "temperature unsafe," guiding users toward soil-care actions directly from the dashboard.
 */
export default function MetricCard({ label, value, critical }) {
  return (
    <Card
      className={`
        shadow-sm transition hover:shadow-md
        rounded-xl border border-[#444B4F]

        ${critical
          ? "bg-[#3A2F31] text-red-400 border-red-500" // Alert state — visually signals degraded soil conditions
          : "bg-[#2B2F31] text-gray-200"               // Default neutral state — balanced and non-distracting
        }
      `}
    >
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground tracking-tight">
          {label} {/* Metric label — subtle size to keep focus on numeric value */}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-4xl font-semibold leading-none">
          {value} {/* Main reading — large for immediate readability */}
        </p>
      </CardContent>
    </Card>
  );
}
