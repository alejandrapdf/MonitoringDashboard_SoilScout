import { useState, useEffect } from "react";
import { mockSensorData } from "@/lib/data/mockSensorData";

/* =============================================================================
   useSensorData(metric)
   -----------------------------------------------------------------------------
   Returns time-series values + summary statistics for a given metric.
   Intended as the single source of truth for sensor transformations.

   Inputs:
   • metric: "moisture" | "temperature"

   Returns:
   • values      → full array of readings for the selected metric
   • latest      → most recent data point
   • min / max   → historical extremes for quick reference
   • timestamps  → raw time objects for chart axis rendering

   Why this hook matters:
   - Centralises extraction + data preparation logic
   - Keeps UI components purely presentational
   - Allows quick scaling for multiple sensor types in the future
============================================================================= */

export function useSensorData(metric) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    // Extract only the metric requested from the dataset
    const extracted = mockSensorData.map(d =>
      metric === "moisture" ? d.moisture : d.temp
    );

    setValues(extracted);
  }, [metric]); // Recalculate when metric type switches


  return {
    values,
    latest: values.at(-1),           // Last entry in series — assumed most recent
    min: Math.min(...values),        // Useful for warning/threshold systems later
    max: Math.max(...values),        // Helps indicate performance boundaries
    timestamps: mockSensorData.map(d => d.time)  // Returned separately for chart labels
  };
}
