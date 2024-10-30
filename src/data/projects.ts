export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  imageUrl?: string;
  videoUrl?: string;
  additionalImages: string[];
  details: {
    challenge: string;
    solution: string;
  };
}

export const projects: Project[] = [
  {
    id: 'project-4',
    title: 'Gillette Advert',
    description: 'Music Production score for Grey New York',
    year: '2022',
    videoUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/vids/Gillette+Sync+Advert.mp4',
    imageUrl: '',
    additionalImages: [],
    details: {
      challenge: 'Score and compose a unique music to fit all the edit points of the TVC',
      solution: 'Used Logic Pro to compose an original score'
    }
  },
  {
    id: 'project-5',
    title: 'Motion Design',
    description: 'Motion Design using AI',
    year: '2024',
    videoUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/vids/cyber.mp4',
    imageUrl: '',
    additionalImages: [],
    details: {
      challenge: 'Using AI to create motion sequences for a game intro video',
      solution: 'Prompt engineering'
    }
  },
  {
    id: 'project-6',
    title: '3D Design & Motion',
    description: 'Promo Video for Tiktok',
    year: '2024',
    videoUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/vids/tech_house_ani.mp4',
    imageUrl: 'https://koma.london/wp-content/uploads/2024/07/FUTURE-TECH.png',
    additionalImages: [
      'https://wordpress-1065768-4063289.cloudwaysapps.com/wp-content/uploads/2024/07/FUTURE-TECH.png'
    ],
    details: {
      challenge: 'Design & produce standout graphics for new music sample pack including video for Tiktok advert.',
      solution: 'Prompt engineering'
    }
  },
  {
    id: 'project-7',
    title: 'Guinness App UI/UX',
    description: 'Map UX Flow for new Guinness app',
    year: '2023',
    videoUrl: '',
    imageUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/guninness_stack.jpg',
    additionalImages: [
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/guninness_stack.jpg',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/G-ux.png',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/guninness_app.jpg'
    ],
    details: {
      challenge: 'Make the UX flow as simple and quick as possible. Resign UI.',
      solution: 'Mapped out using Figma'
    }
  },
  {
    id: 'project-8',
    title: 'Product Branding',
    description: 'Pitch for Mens Skincare range',
    year: '2023',
    videoUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/vids/edge_splash.mp4',
    imageUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/edge_MOBILE-UI-scaled.jpg',
    additionalImages: [
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/edge_MOBILE-UI-scaled.jpg',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/edge_game_poster.jpg',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/edge_train7.jpg',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/edge-tube_watch-out-tube.jpg'
    ],
    details: {
      challenge: 'Create concepts and full branding for new mens skin care range including, Name & Logo, Packaging Design, Advertising Design & Strategy, PR Stunts, Guerrilla Marketing Design & Strategy',
      solution: 'Final names were EDGE and Buff Boys Club'
    }
  },
  {
    id: 'project-9',
    title: 'Premier Inn Advertising',
    description: 'Advertsing, PR Stunts',
    year: '2024',
    videoUrl: '',
    imageUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/YOURE-FEELING-SLEEPY-1.png',
    additionalImages: [
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/pre_inn_hotel-pop-up.png',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/prem_inn_large_poster.png',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/prem_inn_pave.jpg',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/prem_inn_phonebox.png'
    ],
    details: {
      challenge: 'Create an advertising concept to bring attention to Premier Inn in unexpected ways',
      solution: 'Hotel pop up in city centres with a bed to try. Backed up with youre feeling sleepy, difficult to read posters'
    }
  },
  {
    id: 'project-1',
    title: 'UI Mobile Design',
    description: 'Design UI for Music App',
    year: '2021',
    videoUrl: '',
    imageUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/smash_big.png',
    additionalImages: [
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/smash_big.png'
    ],
    details: {
      challenge: "Design simple UI for music player for artist Smash & Grab",
      solution: 'Reached over 10k downloads with zero marketing'
    }
  },
  {
    id: 'project-2',
    title: 'Intel Advert',
    description: 'Digital campaign for new Intel chip',
    year: '2023',
    videoUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/vids/Q4+ROBOT+OOPS+300X250.mp4',
    imageUrl: '',
    additionalImages: [],
    details: {
      challenge: 'Build a very complex animation under 300k file size',
      solution: 'Animate and crush the gifs'
    }
  },
  {
    id: 'project-11',
    title: 'Web Design & Dev.',
    description: 'Ecommerce music shop',
    year: '2023',
    videoUrl: '',
    imageUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/underlord.webp',
    additionalImages: [
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/underlord.webp'
    ],
    details: {
      challenge: "Design and build mp3 ecommerce shop for wordpress",
      solution: 'https://www.underlord.uk'
    }
  },
  {
    id: 'project-12',
    title: 'Web Design & Dev.',
    description: 'Design & build a wordpress website for a Oxford University spin off company',
    year: '2023',
    videoUrl: '',
    imageUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/oxford.webp',
    additionalImages: [
     'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/oxford.webp' 
    ],
    details: {
      challenge: "Design and build a website ready for the pharmaceutical companyy to present to investors",
      solution: 'https://oxforddrugdesign.com'
    }
  },
  {
    id: 'project-13',
    title: 'Cannon Adverts',
    description: 'Award Winning Motion Design & Animation while working within an incrediable team at Tequila/London',
    year: '2023',
    videoUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/vids/cannon-banners-480-ytshorts.savetube.me.mp4',
    imageUrl: '',
    additionalImages: [],
    details: {
      challenge: "Create mpu and leaderboard ads under 400k file size with heavy animation",
      solution: 'All the elements were mp4s which had to be crushed and crushed to make the file limits'
    }
  },
  {
    id: 'project-3',
    title: 'Website Design & Dev.',
    description: 'Designed and built multiple wordpress based websites for multiple clients including full eommerce and setting up payment gateways with stripe and credit cards and then set the sites up on the server for private clients.',
    year: '2022',
    videoUrl: '',
    imageUrl: 'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/11.png',
    additionalImages: [
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/11.png',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/22.png',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/pioneer1.webp',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/love.webp',
      'https://koma.london/wp-content/uploads/2023/11/mock_aychbee.co_.uk_-scaled.jpg',
      'https://djwpodcasts.s3.eu-west-1.amazonaws.com/koma_portfolio_24/wwod_jobs.webp'
    ],
    details: {
      challenge: 'Work with clients budget to achieve the results they wanted',
      solution: 'Used Wordpress and created bespoke plugins'
    }
  }
];