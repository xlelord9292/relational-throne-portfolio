"use client";
import clsx from "clsx";

// Removed basehub fragment imports

import { CustomTooltip } from "./tooltip";
import type { ImageProps } from "next/image";

export function Author(props: {
  image: { url: string; alt?: string; height?: number; width?: number };
  _title: string;
} & Omit<ImageProps, "src" | "alt">) {
  const { image, _title, ...rest } = props;
  return (
    <CustomTooltip content={_title}>
      <img
        alt={image.alt ?? `Avatar for ${_title}`}
        className="size-8 rounded-full border-2 border-[--surface-primary] object-cover transition-all dark:border-[--dark-surface-primary]"
        height={image.height}
        src={image.url}
        width={image.width}
        {...rest}
      />
    </CustomTooltip>
  );
}

export function Avatar(props: {
  className?: string;
  alt?: string;
  url: string;
} & Omit<ImageProps, "src" | "alt">) {
  const { className, alt, url, ...rest } = props;
  return (
    <img
      alt={alt ?? "Avatar"}
      className={clsx(
        "size-7 shrink-0 rounded-full border-2 border-[--surface-primary] object-cover dark:border-[--dark-surface-primary]",
        className,
      )}
      height={28}
      src={url}
      width={28}
      {...rest}
    />
  );
}
