// Removed basehub fragment import
import clsx from "clsx";
import type { ImageProps } from "next/image";

type DarkLightImageProps = {
  alt?: string;
  dark?: {
    url: string;
    alt?: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
  };
  light: {
    url: string;
    alt?: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
    aspectRatio?: string | number;
  };
  className?: string;
  width?: number;
  height?: number;
  withPlaceholder?: boolean;
} & Omit<ImageProps, "src" | "alt">;

export function DarkLightImage({
  alt,
  dark,
  light,
  className,
  width,
  height,
  withPlaceholder,
  ...props
}: DarkLightImageProps) {
  return (
    <>
      {dark ? (
        <img
          alt={dark.alt ?? alt ?? ""}
          className={clsx("hidden dark:block", className)}
          height={height ?? dark.height}
          src={dark.url}
          width={width ?? dark.width}
          {...props}
          {...(withPlaceholder && dark.blurDataURL
            ? {
                placeholder: "blur",
                blurDataURL: dark.blurDataURL,
              }
            : {})}
        />
      ) : null}
      <img
        alt={light.alt ?? alt ?? ""}
        className={clsx(dark && "dark:hidden", className)}
        height={height ?? light.height}
        src={light.url}
        width={width ?? light.width}
        {...props}
        {...(withPlaceholder && light.blurDataURL
          ? {
            placeholder: "blur",
            blurDataURL: light.blurDataURL,
          }
          : {})}
      />
    </>
  );
}

export function DarkLightImageAutoscale(props: DarkLightImageProps) {
  let aspectRatio = 1;
  if (typeof props.light.aspectRatio === "string") {
    const [w, h] = props.light.aspectRatio.split("/").map(Number);
    aspectRatio = (w ?? 1) / (h ?? 1);
  } else if (typeof props.light.aspectRatio === "number") {
    aspectRatio = props.light.aspectRatio;
  }
  let logoStyle;

  switch (true) {
    case aspectRatio <= 1.2:
      logoStyle = "square";
      break;
    case aspectRatio < 1.4:
      logoStyle = "4/3";
      break;
    case aspectRatio < 4:
      logoStyle = "portrait";
      break;
    default:
      logoStyle = "landscape";
      break;
  }

  return (
    <DarkLightImage
      priority
      alt="logo"
      className={clsx("w-auto max-w-[200px] object-contain", {
        "h-10": logoStyle === "square",
        "h-9": logoStyle === "4/3",
        "h-8": logoStyle === "portrait",
        "h-6": logoStyle === "landscape",
      })}
      style={{
        aspectRatio: props.light.aspectRatio,
      }}
      {...props}
    />
  );
}
