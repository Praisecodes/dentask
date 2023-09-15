"use client";

import { NoNotification } from "@/components/templates";
import { useState } from "react";

const Page = ():React.ReactNode => {
  const [notifications, setNotifications] = useState<any[]>([]);

  return (
    notifications.length < 1 ? (<NoNotification />): (<></>)
  )
}

export default Page;
