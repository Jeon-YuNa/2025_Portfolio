"use client";
import { getTodayVisitorCount } from "@/utils/api";
import { useEffect, useState } from "react";

const MainObjectText = () => {
  const [todayVisitorCount, setTodayVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await getTodayVisitorCount();
        console.log("오늘 방문자 수:", count);
        setTodayVisitorCount(count);
      } catch (error) {
        console.error("방문자 수 가져오기 실패:", error);
      }
    };

    fetchCount();
  }, []);
  // console.log(todayVisitorCount);
  return (
    <p className="font-bold text-right w-[93%] text-sm">
      <span className="mr-16">Today's Visitor: {todayVisitorCount}</span>
      <span>Website Production period : 2 week</span>
    </p>
  );
};
export default MainObjectText;
