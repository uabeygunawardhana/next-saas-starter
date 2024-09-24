import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-4">Ready to excel in Math?</h2>
        <Button className="w-full bg-background text-foreground hover:bg-accent" size="lg">
          Book a Class
        </Button>
      </CardContent>
    </Card>
  )
}