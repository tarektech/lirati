"use client";
import {
  type AnimationPlaybackControls,
  animate,
  motion,
  useMotionValue,
} from "motion/react";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [isHovering, setIsHovering] = useState(false);
  const currentSpeed = isHovering && speedOnHover ? speedOnHover : speed;
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    void key;
    let controls: AnimationPlaybackControls | undefined;
    const size = direction === "horizontal" ? width : height;
    if (size <= 0) {
      translation.set(0);
      return;
    }

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration =
      distanceToTravel > 0 && currentSpeed > 0
        ? distanceToTravel / currentSpeed
        : 0;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setIsHovering(true);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setIsHovering(false);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {Children.map(children, (child, i) =>
          isValidElement(child)
            ? cloneElement(child, { key: `marquee-a-${String(i)}` })
            : child,
        )}
        {Children.map(children, (child, i) =>
          isValidElement(child)
            ? cloneElement(child, { key: `marquee-b-${String(i)}` })
            : child,
        )}
      </motion.div>
    </div>
  );
}
