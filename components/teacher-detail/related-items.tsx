import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function RelatedItems() {
  const relatedItems = [
    "Advanced Physics with Dr. Alex Lee",
    "Chemistry Fundamentals by Prof. Maria Garcia",
    "Biology 101 with Dr. James Smith",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>You May Also Like</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {relatedItems.map((item, index) => (
            <li key={index}>
              <Link href="#" className="flex items-center justify-between hover:underline">
                {item}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}