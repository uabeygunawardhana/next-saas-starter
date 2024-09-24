
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Accolades() {
  const accolades = ["Teacher of the Year 2022", "Published Author in Mathematics Education", "TEDx Speaker"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accolades</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {accolades.map((accolade, index) => (
          <p key={index} className="flex items-center">
            <Award className="mr-2 h-4 w-4" />
            {accolade}
          </p>
        ))}
      </CardContent>
    </Card>
  )
}