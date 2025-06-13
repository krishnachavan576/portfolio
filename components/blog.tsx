import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar, User } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      title: "Getting Started with Spring Boot",
      excerpt: "Learn how to set up your first Spring Boot application with all the essential configurations.",
      date: "10 May 2024",
      readTime: "5 min read",
      author: "Krishna Chavan",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Java vs JavaScript: Understanding the Differences",
      excerpt:
        "A comprehensive comparison between Java and JavaScript, their use cases, and when to choose one over the other.",
      date: "15 Apr 2024",
      readTime: "8 min read",
      author: "Krishna Chavan",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Building RESTful APIs with Spring Boot",
      excerpt: "A step-by-step guide to creating robust RESTful APIs using Spring Boot and best practices.",
      date: "20 Mar 2024",
      readTime: "10 min read",
      author: "Krishna Chavan",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section id="blog" className="py-20 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-500 mb-4">Blog</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="border-border/40 bg-black/20 backdrop-blur-sm overflow-hidden flex flex-col">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <User className="mr-1 h-3 w-3" />
                  {post.author}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]"></div>
    </section>
  )
}
