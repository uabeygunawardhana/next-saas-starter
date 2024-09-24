import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function RatingsAndReviews() {
  const reviews = [
    {
      name: "John D.",
      comment: "Sarah's advanced calculus course was challenging but incredibly rewarding. Her explanations are clear and she's always willing to help.",
    },
    {
      name: "Emily S.",
      comment: "Thanks to Sarah's SAT prep course, my daughter's math score improved by 100 points! Highly recommended.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ratings and Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-primary" />
            ))}
          </div>
          <span className="ml-2 text-lg font-semibold">4.9 out of 5</span>
        </div>
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index}>
              <p className="font-semibold">{review.name}</p>
              <p className="text-muted-foreground">{review.comment}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}