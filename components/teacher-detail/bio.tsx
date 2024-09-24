import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Bio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          With over a decade of experience in mathematics education, I'm passionate about making complex concepts
          accessible and engaging for students of all levels. My teaching philosophy centers on practical
          application and creative problem-solving, helping students not just to solve equations, but to
          understand the 'why' behind mathematical principles.
        </p>
        <p className="mt-4">
          I specialize in advanced calculus, linear algebra, and statistics, with a particular focus on preparing
          students for college-level mathematics and standardized tests like the SAT and ACT.
        </p>
      </CardContent>
    </Card>
  )
}