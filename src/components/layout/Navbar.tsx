import { Bell, Search, Sparkles } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Navbar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search problems, courses..."
            className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>AI Mentor</span>
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-blue-400 border-2 border-background ring-2 ring-border cursor-pointer"></div>
      </div>
    </header>
  );
}
