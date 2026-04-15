import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { BookOpen, Clock, Star, PlayCircle } from "lucide-react";

const COURSES = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    description: "Master the fundamentals of DSA with interactive visualizations and AI-guided practice.",
    level: "Intermediate",
    duration: "40 hours",
    rating: 4.9,
    progress: 45,
    image: "https://picsum.photos/seed/dsa/400/200?blur=2"
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Learn how to build scalable frontend applications using modern React techniques.",
    level: "Advanced",
    duration: "25 hours",
    rating: 4.8,
    progress: 0,
    image: "https://picsum.photos/seed/react/400/200?blur=2"
  },
  {
    id: 3,
    title: "Machine Learning Foundations",
    description: "A practical introduction to ML using Python, Scikit-Learn, and PyTorch.",
    level: "Beginner",
    duration: "60 hours",
    rating: 4.7,
    progress: 12,
    image: "https://picsum.photos/seed/ml/400/200?blur=2"
  }
];

export function Courses() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
          <p className="text-muted-foreground mt-1">Structured courses to level up your skills.</p>
        </div>
        <Button>Browse Catalog</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course) => (
          <Card key={course.id} className="overflow-hidden flex flex-col">
            <div className="h-40 w-full overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="h-full w-full object-cover transition-transform hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {course.level}
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  {course.rating}
                </div>
              </div>
              <CardTitle className="line-clamp-1">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  24 Modules
                </div>
              </div>
              
              {course.progress > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2" variant={course.progress > 0 ? "default" : "outline"}>
                <PlayCircle className="h-4 w-4" />
                {course.progress > 0 ? "Continue Learning" : "Start Course"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
