import {
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";
import { ReactBadge } from "../badges/react";

// --------- LAYOUT ---------
export function Headline() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="mx-auto font-sans max-w-3xl font-bold text-3xl leading-none tracking-tight text-foreground md:text-5xl">
          Crafting{" "}
          <span className="text-green-600 dark:text-green-400 selection:bg-green-200/80 dark:selection:bg-green-800/80">
            elegant
          </span>{" "}
          products that{" "}
          <span className="text-violet-600 dark:text-violet-400 selection:bg-violet-200/80 dark:selection:bg-violet-800/80">
            captivate
          </span>{" "}
          and{" "}
          <span className="text-amber-600 dark:text-amber-400 selection:bg-amber-200/80 dark:selection:bg-amber-800/80">
            delight
          </span>{" "}
          users.
        </h1>
        <h2 className="text-base md:text-xl text-muted-foreground selection:text-muted-foreground/80 tracking-tighter font-light">
          I turn complex ideas into seamless digital experiences by blending
          design and functionality, paying attention to the little details
          because even the smallest things can make a big difference.
        </h2>
      </div>
      <Button
        asChild
        size="lg"
        variant="expandIcon"
        iconPlacement="right"
        Icon={ArrowDownRightIcon}
        className="rounded-full"
      >
        <Link href="/about" download>
          Get my resume
        </Link>
      </Button>
    </div>
  );
}