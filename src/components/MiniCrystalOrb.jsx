import React from 'react';
import { CrystalOrb } from './CrystalOrb';

/**
 * Mini animated crystal orb for the Crystal Guide and miniature widgets
 */
export const MiniCrystalOrb = ({ size = 160, theme = 'purple', className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <CrystalOrb
        size={size}
        theme={theme}
        showPlatform={true}
        interactive={true}
      />
    </div>
  );
};
