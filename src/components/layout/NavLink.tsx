"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.ComponentProps<typeof Link> {
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

const normalize = (path: string) =>
  path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      href,
      className,
      activeClassName = "text-[#CE2C29] font-semibold",
      exact = false,
      ...props
    },
    ref
  ) => {
    const pathname = usePathname();

    if (typeof href !== "string") {
      return <Link ref={ref} href={href} className={className} {...props} />;
    }

    const currentPath = normalize(pathname);
    const targetPath = normalize(href);

    const isActive = exact
      ? currentPath === targetPath
      : currentPath === targetPath ||
        (targetPath !== "/" && currentPath.startsWith(targetPath + "/"));

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          "relative transition-all duration-200",
          className,
          isActive && activeClassName
        )}
        {...props}
      >
        {props.children}

        <span
          className={cn(
            "absolute left-0 -bottom-1 h-[2px] w-full bg-brand-red transition-all duration-300",
            isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          )}
        />
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";
export { NavLink };
