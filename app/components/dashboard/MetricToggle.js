"use client";

/* ============================================================================
   MetricToggle
   ---------------------------------------------------------------------------
   Toggles between two available sensor metrics:
   › Soil Moisture  (%)  
   › Temperature    (°C)

   Component Philosophy:
   - The toggle does not manage its own state — it delegates changes upward
     through `setMetric()`. Parent components remain the source of truth.
   - Ensures all downstream UI elements (summary cards + chart) remain in sync.

   Accessibility Notes:
   - Uses `role="tablist"` and `aria-selected` for screen reader clarity.
   - Selection is visually and semantically marked for inclusive UX.

   Visual Behaviour:
   - Active metric shows green highlight and subtle elevation → communicates selection.
   - Inactive metric remains neutral with hover feedback → indicates interactivity
     without overpowering the active state.
============================================================================ */


export default function MetricToggle({ metric, setMetric }) {
  return (
    <div className="flex gap-3 mt-6" role="tablist">
      {["moisture", "temperature"].map(m => {
        const active = metric === m;

        return (
          <button
            key={m}
            onClick={() => setMetric(m)}
            aria-selected={active}
            className={`
              px-5 py-2 rounded-lg font-semibold transition
              border
              ${active
                ? "bg-[#2e2e2e] text-[#8FFFA2] border-[#72e06a] shadow-sm"  // MATCHES YOUR SIDEBAR
                : "bg-transparent text-gray-300 border-gray-500 hover:text-white hover:border-gray-300"
              }
            `}
          >
            {m === "moisture" ? "Moisture" : "Temperature"}
          </button>
        );
      })}
    </div>
  );
}