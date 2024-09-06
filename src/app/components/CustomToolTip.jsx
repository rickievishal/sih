// CustomTooltipContent.js or within the same file for simplicity

import React from 'react';

// Define your custom tooltip content
export const CustomToolTip = ({ payload, label, indicator }) => {
  if (!payload || !payload.length) return null;

  return (
    <div
      className="custom-tooltip bg-black text-white p-2 rounded-md shadow-lg"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
        fontSize: '14px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p className="label font-bold">{label}</p>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="tooltip-item flex items-center gap-1">
          <span
            className="indicator"
            style={{
              width: 8,
              height: 8,
              backgroundColor: entry.color,
              borderRadius: '50%',
              display: indicator ? 'inline-block' : 'none',
            }}
          ></span>
          <span>{`${entry.name}: ${entry.value}`}</span>
        </div>
      ))}
    </div>
  );
};
