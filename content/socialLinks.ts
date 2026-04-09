/**
 * Social links — raw data (name, url)
 * Icons are attached in constants.tsx for UI consumption
 */

import { PERSONAL_INFO } from './personalInfo';

export interface SocialLinkRaw {
  name: string;
  url: string;
}

export const SOCIAL_LINKS_RAW: SocialLinkRaw[] = [
  { name: 'Email', url: `mailto:${PERSONAL_INFO.email}` },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vijay-b-sehgal/' },
  { name: 'GitHub', url: 'https://github.com/shadowdevcode' },
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1vRyXqXfX3VxVqHXwaYzfE4ixfgqkRPIj/view?usp=sharing',
  },
];
