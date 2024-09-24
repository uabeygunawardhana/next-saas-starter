import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Qualifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Qualifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          <li>Ph.D. in Mathematics Education, Stanford University</li>
          <li>M.Sc. in Pure Mathematics, MIT</li>
          <li>Certified Advanced Mathematics Instructor</li>
          <li>10+ years of teaching experience</li>
        </ul>
      </CardContent>
    </Card>
  )
}