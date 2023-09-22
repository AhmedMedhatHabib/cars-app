import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MainRoutes } from '../../Routes';

export type SideBarLinkProps = {
  icon: IconProp;
  label: string;
  path: MainRoutes;
};
