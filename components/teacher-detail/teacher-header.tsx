import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeacherHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <Avatar className="w-32 h-32">
        <AvatarImage src="/profile.png" alt="Sarah Johnson" />
        <AvatarFallback>SJ</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold">Sarah Johnson</h1>
        <p className="text-xl text-muted-foreground">Mathematics Expert</p>
      </div>
    </div>
  )
}