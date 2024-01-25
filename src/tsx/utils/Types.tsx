import { ReactNode } from "react";

export interface RotatingButtonProps {
  title: string;
  to?: string;
  func?: () => void;
}

export interface CardCarouselProps {
  children: ReactNode[];
  index: number[];
}
export interface ProjectCardProps {
  title: string;
  desc: string;
  image: string;
  code: string;
  website?: string;
}
