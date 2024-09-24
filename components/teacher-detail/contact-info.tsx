import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="flex items-center">
          <Mail className="mr-2 h-4 w-4" />
          sarah.johnson@example.com
        </p>
        <p className="flex items-center">
          <Phone className="mr-2 h-4 w-4" />
          (555) 123-4567
        </p>
      </CardContent>
    </Card>
  )
}