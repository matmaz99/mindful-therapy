import { Button } from "../ui/button"

export default function HeroSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-heading font-medium">
          Find Your Path to Peace Through Evidence-Based Therapy
        </h1>
        <p className="text-xl md:text-2xl text-mutedForeground max-w-2xl mx-auto">
          Combining the proven effectiveness of CBT with mindfulness techniques to help you overcome anxiety and reclaim your life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Schedule Your Consultation</Button>
          <Button variant="outline" size="lg">Learn My Approach</Button>
        </div>
      </div>
    </section>
  )
}