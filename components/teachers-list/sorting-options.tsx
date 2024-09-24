import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SortingOptions() {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">All Teachers</h2>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Most Popular</SelectItem>
          <SelectItem value="rating">Highest Rated</SelectItem>
          <SelectItem value="price">Lowest Price</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}