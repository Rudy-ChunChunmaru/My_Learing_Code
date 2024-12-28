"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  lable: string;
  href: string;
}

export const BackButton = ({ lable, href }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm">
      <Link href={href}>{lable}</Link>
    </Button>
  );
};
