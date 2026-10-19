import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Centred page-width wrapper with responsive side padding. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[96rem] 2xl:px-10", className)}>{children}</div>;
}
