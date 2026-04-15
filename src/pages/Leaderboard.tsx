import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Trophy, Medal, Flame } from "lucide-react";

const LEADERBOARD = [
  { rank: 1, name: "Sarah Chen", xp: 12450, streak: 45, avatar: "https://picsum.photos/seed/sarah/100/100" },
  { rank: 2, name: "Alex Kumar", xp: 11200, streak: 32, avatar: "https://picsum.photos/seed/alex/100/100" },
  { rank: 3, name: "David Kim", xp: 10850, streak: 28, avatar: "https://picsum.photos/seed/david/100/100" },
  { rank: 4, name: "Maria Garcia", xp: 9400, streak: 15, avatar: "https://picsum.photos/seed/maria/100/100" },
  { rank: 5, name: "James Wilson", xp: 8900, streak: 12, avatar: "https://picsum.photos/seed/james/100/100" },
];

export function Leaderboard() {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2 mb-4">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
          <Trophy className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Global Leaderboard</h1>
        <p className="text-muted-foreground">Compete with peers and track your ranking.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
          <CardDescription>Rankings are based on XP earned from solving problems and completing courses.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {LEADERBOARD.map((user) => (
              <div 
                key={user.rank}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 font-bold text-lg text-muted-foreground">
                    {user.rank === 1 ? <Medal className="h-6 w-6 text-yellow-500" /> : 
                     user.rank === 2 ? <Medal className="h-6 w-6 text-slate-400" /> : 
                     user.rank === 3 ? <Medal className="h-6 w-6 text-amber-700" /> : 
                     `#${user.rank}`}
                  </div>
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="h-10 w-10 rounded-full border-2 border-background"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Flame className="h-3 w-3 text-orange-500" />
                      {user.streak} day streak
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">{user.xp.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">XP</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
