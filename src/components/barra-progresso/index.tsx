"use client";
import { Typography } from "@mui/material";

export function BarraProgresso({ percentage }: { percentage: number }) {
  return (
    <div className="relative w-full h-5 bg-custom_light_blue rounded-full overflow-hidden">
      <div
        className="h-full bg-custom_dark_blue rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
      <Typography
        variant="body1"
        className="absolute inset-0 flex justify-center items-center text-custom_dark_grey"
      >
        {percentage}%
      </Typography>
    </div>
  );
}
