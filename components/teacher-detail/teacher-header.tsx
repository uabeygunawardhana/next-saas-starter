import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeacherProfile } from "@/lib/db/schema"

export default function TeacherHeader({ teacher }: { teacher: TeacherProfile }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src="/profile.png" alt={teacher.name} />
        <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">{teacher.name}</h1>
        <p className="text-xl text-muted-foreground">Mathematics Expert</p>
      </div>
    </div>
  )
}