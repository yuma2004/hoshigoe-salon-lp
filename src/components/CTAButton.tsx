import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import arrowIcon from '../assets/images/arrow_icon.svg';
import { CTA_DEFAULT_ROUTE, CTA_ICON_ALT, CTA_PRIMARY_LABEL } from '../constants/cta';
import { RoutePath, useNavigate } from '../router/RouterProvider';

type CTAButtonProps = {
  label?: string;
  to?: RoutePath;
  iconClassName?: string;
  iconAlt?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> & {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const CTAButton: React.FC<CTAButtonProps> = ({
  label = CTA_PRIMARY_LABEL,
  to = CTA_DEFAULT_ROUTE,
  iconClassName,
  iconAlt = CTA_ICON_ALT,
  className,
  onClick,
  disabled,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }
    if (!disabled) {
      navigate(to);
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      <span>{label}</span>
      <img
        src={arrowIcon}
        alt={iconAlt}
        className={iconClassName}
        aria-hidden={!iconAlt}
      />
    </button>
  );
};

export default CTAButton;
