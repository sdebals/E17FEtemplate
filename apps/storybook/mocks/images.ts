import { ImageProps } from 'next/image';

export const mockImageSb = {
  filename: 'https://a.storyblok.com/f/302698/1536x1536/6113ed0d12/office-1.png',
  alt: 'Photo by cottonbro studio',
  width: '1920',
  height: '1280'
};

export const mockImageHero = {
  src: 'https://a.storyblok.com/f/302698/1536x1536/6113ed0d12/office-1.png',
  alt: 'Photo by cottonbro studio'
};

export const mockImageUnsplash = {
  src: 'https://images.unsplash.com/photo-1722837174160-1b9b555f67db?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=elijah-pilchard-rr5G8_SKfyg-unsplash.jpg&w=1280',
  alt: 'Photo by Ibrahim Pilchard on Unsplash',
  width: '1280',
  height: '853'
};

export const mockLogo: ImageProps = {
  src: '/images/sb-nextjs-logo.png',
  alt: 'Storyblok next.js sample logo',
  width: '480',
  height: '211'
};

export const mockAvatar: ImageProps = {
  src: '/images/uifaces-robot-image.jpg',
  alt: 'User profile avatar',
  width: '64',
  height: '64'
};

export const mockLogo1: ImageProps = {
  src: 'https://a.storyblok.com/f/302698/400x116/1a6540fb5c/logo-storybook.png',
  alt: 'Storybook',
  width: '105',
  height: '48'
};

export const mockLogo2: ImageProps = {
  src: 'https://a.storyblok.com/f/302698/400x135/986fbdd10c/logo-storyblok.png',
  alt: 'Storyblok',
  width: '105',
  height: '48'
};

export const mockLogo3: ImageProps = {
  src: 'https://a.storyblok.com/f/302698/400x248/c3b8dce3b5/logo-nextjs.png',
  alt: 'Next.js',
  width: '105',
  height: '48'
};

export const mockLogo4: ImageProps = {
  src: 'https://a.storyblok.com/f/302698/400x113/e1b20c16cd/logo-turborepo.png',
  alt: 'Next.js',
  width: '105',
  height: '48'
};

export const mockedLogos = [mockLogo1, mockLogo2, mockLogo3, mockLogo4];
