import { Star } from "lucide-react";

export const Rating = ({ value }: { value: number }) => {
  const size = 24;
  const fullStars = Math.floor(value); // Math.floor คือปัดลง
  const partialStar = value - fullStars;
  const emptyStars = 5 - Math.ceil(value); // math.ceil คือปัดขึ้น

  console.log(value, fullStars, partialStar, emptyStars);

  return (
    <div className="flex items-center gap-1">
      {/* ดาวเต็ม */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <div key={`full-${index}`} className="relative">
          <Star size={size} className="fill-yellow-400 text-yellow-400" />
        </div>
      ))}

      {/* ดาวบางส่วน */}
      {partialStar > 0 && (
        <div key="partial" className="relative inline-block">
          {/* ดาวเปล่า (พื้นหลัง) */}
          <Star size={size} className="text-yellow-400" />
          {/* ดาวเต็ม (ตัดบางส่วน) คูณ 100 เพิ่อหา % พื้นที่ */}
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${partialStar * 100}% ` }}>
            <Star size={size} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}

      {/* ดาวเปล่า */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <div key={`empty-${index}`} className="relative">
          <Star size={size} className="text-gray-300" />
        </div>
      ))}
    </div>
  );
};
