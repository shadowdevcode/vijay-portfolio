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
    url: 'https://docs.google.com/document/d/1N8BkbgLhFauwj2cCHxCQa6_ICtIetR-DxGcZ_eHxS-c/edit?tab=t.0#heading=h.9z02xaghie3r',
  },
];
