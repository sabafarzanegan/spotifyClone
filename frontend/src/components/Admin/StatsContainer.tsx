import { useMusicStore } from "@/stores/useMusicStore";
import { DiscAlbum, Disc, SquareChartGantt, User } from "lucide-react";
import StatsCard from "./StatsCard";

function StatsContainer() {
  const { stats } = useMusicStore();

  const statsArray = [
    {
      title: "آلبوم ها",
      icon: DiscAlbum,
      number: stats.totalAlbums,
      color: "text-green-500",
    },
    {
      title: "آهنگ ها",
      icon: Disc,
      number: stats.totalSongs,
      color: "text-red-500",
    },
    {
      title: "هنرمندان",
      icon: SquareChartGantt,
      number: stats.totalArtists,
      color: "text-purple-600",
    },
    {
      title: "کاربران",
      icon: User,
      number: stats.totalUsers,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="flex items-center justify-center md:justify-between flex-wrap gap-2  px-4">
      {statsArray.map((stats) => (
        <StatsCard data={stats} />
      ))}
    </div>
  );
}

export default StatsContainer;
