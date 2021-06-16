import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Link, useLocation } from 'react-router-dom';

import './styles.scss';

interface HeaderMenuItemProps {
  path: string;
  icon: ComponentType<IconBaseProps>;
  label: string;
}

export const HeaderMenuItem: React.FC<HeaderMenuItemProps> = props => {
  const { icon: Icon, path, label } = props;
  const { pathname } = useLocation();

  return (
    <li className={`header-menu-item ${pathname === path && 'active'}`}>
      <Link to={path}>
        <Icon />
        <span>{label}</span>
      </Link>
    </li>
  );
}