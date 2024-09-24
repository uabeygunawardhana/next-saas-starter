import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative mb-8">
      <Input
        type="text"
        placeholder="Search by subject, name, or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
}