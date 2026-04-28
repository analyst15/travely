import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

const tagColors: Record<string, string> = {
  Highlight: "bg-red-500",
  Trending: "bg-green-500",
  Wilderness: "bg-orange-500",
};

export default function DestinationCard({
  title,
  description,
  image,
  tag,
}: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition">
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <Badge
          className={`absolute top-4 left-4 text-white ${tagColors[tag]}`}
        >
          {tag}
        </Badge>
      </div>

      <div className="p-5">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <MapPin className="w-4 h-4 text-green-600" />
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}