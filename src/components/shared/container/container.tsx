import { cn } from "@/core/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
