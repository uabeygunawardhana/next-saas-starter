import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function CTA() {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="pt-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Book a Class</h2>
        <p className="flex items-center">
          <Mail className="mr-2 h-4 w-4" />
          sarah.johnson@example.com
        </p>
        <p className="flex items-center">
          <Phone className="mr-2 h-4 w-4" />
          (555) 123-4567
        </p>
        <Button className="w-full bg-background text-foreground hover:bg-accent" size="lg">
          Book a Class
        </Button>
      </CardContent>
    </Card>
  )
}