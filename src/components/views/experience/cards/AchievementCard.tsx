import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface IAchievementCardProps {
  inView: boolean;
  achievement: IAchievement;
}

export function AchievementCard({ inView, achievement }: IAchievementCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
        <CardHeader>
          <Badge className="w-fit mb-2">Achievement</Badge>
          <CardTitle className="text-2xl">
            {achievement.title}
          </CardTitle>
          <CardDescription className="space-y-2 text-base">
            <p>
              {achievement.description}
            </p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              {achievement.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};