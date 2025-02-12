export const ProjectFeatures = ({ features }: { features: IProject["features"] }) => (
  <div>
    <h4 className="font-semibold mb-2">Key Features</h4>
    <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <span className="text-primary mt-1">•</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);