"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const filters = [
  { label: "All Cabins", value: "all" },
  { label: "Small Cabins", value: "small" },
  { label: "Medium Cabins", value: "medium" },
  { label: "Large Cabins", value: "large" },
];

function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(value) {
    const params = new URLSearchParams(searchParams);

    if (value === "all") {
      params.delete("capacity");
    } else {
      params.set("capacity", value);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilter(filter.value)}
          className={`px-5 py-2 transition ${
            currentFilter === filter.value
              ? "bg-primary-700 text-white"
              : "hover:bg-primary-700"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
