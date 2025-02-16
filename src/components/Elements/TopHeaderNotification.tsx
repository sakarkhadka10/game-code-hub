"use client";
import { NOTIFICATION_DESKTOP } from "../../../config";

const TopHeaderNotification = () => {
  if (!NOTIFICATION_DESKTOP.isActive) return null;

  return (
    <div className="bg-amber-300 px-2 py-3 font-bold text-center text-md">
      <h3>{NOTIFICATION_DESKTOP.message}</h3>
    </div>
  );
};

export default TopHeaderNotification;
