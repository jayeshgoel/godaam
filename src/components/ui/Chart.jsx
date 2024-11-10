// components/ui/chart.jsx

import React from 'react';
import { BarChart, Bar } from 'recharts';

// ChartConfig for desktop and mobile
export const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)', // Uses the CSS variable for color
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)', // Uses the CSS variable for color
  },
};

// Container for the chart

export const ChartContainer = ({ config, children, className }) => {
  return (
    <div className={`chart-container ${className}`}>
      <style jsx>{`
        .chart-container {
          --color-desktop: ${config.desktop.color};
          --color-mobile: ${config.mobile.color};
          width: 100%;
          height: 100%;
        }
      `}</style>
      {children}
    </div>
  );
};
