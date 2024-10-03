import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TeacherProfile } from "@/lib/db/schema"
const teacher_static = 
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "/placeholder.svg?height=100&width=100",
    qualifications: "Ph.D. in Mathematics, 10+ years experience",
    subjects: ["Mathematics", "Calculus", "Statistics"],
    rating: 4.9,
    reviews: 120,
    featured: true
  }

export default function TeacherCard({ teacher }: { teacher: TeacherProfile }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/profile.png" alt={teacher.name} />
          <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{teacher.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{teacher.data.summary}</p>
        </div>
      </CardHeader>
      {/* <CardContent>
        <div className="mb-2">
          {teacher_static.subjects.map(subject => (
            <Badge key={subject} variant="secondary" className="mr-1 mb-1">
              {subject}
            </Badge>
          ))}
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-semibold mr-2">{teacher_static.rating}</span>
          <span className="text-sm text-muted-foreground">({teacher_static.reviews} reviews)</span>
        </div>
      </CardContent> */}
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/teachers/${teacher.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}