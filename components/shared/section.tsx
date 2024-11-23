import { ComponentProps } from "react";

// --------- SECTION COMPONENT ---------
interface SectionProps extends ComponentProps<"div"> {}

function Section({ children, ...props }: SectionProps) {
  return (
    <div {...props} className="space-y-8 tracking-tight font-light">
      {children}
    </div>
  );
}

// --------- SECTION TITLE COMPONENT ---------
interface SectionTitleProps extends ComponentProps<"h2"> {
  text: string;
}

function SectionTitle({ text, ...props }: SectionTitleProps) {
  return (
    <h2
      {...props}
      className="font-bold text-xl md:text-2xl underline decoration-wavy underline-offset-8"
    >
      {text}
    </h2>
  );
}

// --------- EXPORTS ---------
export { Section, SectionTitle };