import { Code2 } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => <Code2 className="h-full w-full" {...props} />,
};
