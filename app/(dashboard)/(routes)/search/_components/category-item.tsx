"use client";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface CategoryItemProps {
  label: string;
  value?: string;
  icon?: IconType;
}

export const CategoryItem = ({
  label,
  value,
  icon: Icon,
}: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");
  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const query = {
      title: currentTitle || undefined, // Keep other query params
      categoryId: isSelected ? undefined : value, // Toggle category
    };

    const url = qs.stringifyUrl(
      { url: pathname, query },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <div>
      <button
        onClick={onClick}
        aria-pressed={isSelected}
        aria-label={`Category ${label}`}
        className={cn(
          "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
          isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
        )}
        type="button"
      >
        {Icon && <Icon size={20} />}
        <div className="truncate">{label}</div>
      </button>
    </div>
  );
};
