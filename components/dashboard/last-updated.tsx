"use client";

import { useState, useEffect } from 'react';

export function LastUpdated() {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    setTimestamp(new Date().toLocaleString());
    
    // Optional: Update timestamp every minute
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleString());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-muted-foreground">
      Last updated: {timestamp}
    </div>
  );
}