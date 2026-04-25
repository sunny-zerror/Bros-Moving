"use client";

import { Link } from "next-view-transitions";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Button = ({
    children,
    href,
    variant = "primary",
    className,
    icon = true,
    ...props
}) => {
    const baseStyles =
        " group shrink-0 inline-flex w-fit whitespace-nowrap items-center md:hover:gap-x-2 gap-x-0  rounded-full transition-all duration-300 px-4 md:px-5 h-10 md:h-11 pr-0 md:pr-1  font-medium transition-all duration-300";

    const variants = {
        primary: "bg-[#F5344F] text-white",
        outline: "border border-black/30 text-[#090A0C]",
        white: "bg-white text-[#090A0C]",
        glass: "backdrop-blur-lg border border-white/20 text-white",
    };

    const content = (
        <>
            <span>{children}</span>
            {icon && (
              <div className={`group-hover:scale-100 group-hover:p-2.5 transition-all duration-300 scale-0  p-0 overflow-hidden ${variant === "primary" || variant === "glass" ? "bg-white" : "bg-[#090A0C]"} rounded-full  `}>
                <img
                    src="/icons/arrow-right.svg"
                    className={cn(
                      "w-4",
                      variant === "primary" || variant === "glass"
                      ? ""
                      : "invert-100"
                    )}
                    alt="arrow"
                    />
                    </div>
            )}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={cn(baseStyles, variants[variant], className)}
            >
                {content}
            </Link>
        );
    }

    return (
        <button {...props} className={cn(baseStyles, variants[variant], className)}>
            {content}
        </button>
    );
};

export default Button;