"use client";

// Removed GeneralEvents and sendEvent imports
import { Button, ButtonLink } from "../common/button";

interface TrackProps {
  name: string;
}

// Removed analyticsKey from props

export type TrackedButtonProps = React.ComponentProps<typeof Button> & TrackProps;
export const TrackedButton = (props: TrackedButtonProps) => {
  const { children, onClick, name, ...rest } = props;
  return (
    <Button
      {...rest}
      onClick={(e) => {
        // Tracking removed
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </Button>
  );
};

// Removed analyticsKey from props

export type TrackedButtonLinkProps = React.ComponentProps<typeof ButtonLink> & TrackProps;
export const TrackedButtonLink = (props: TrackedButtonLinkProps) => {
  const { children, onClick, name, ...rest } = props;
  return (
    <ButtonLink
      {...rest}
      onClick={(e) => {
        // Tracking removed
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </ButtonLink>
  );
};
