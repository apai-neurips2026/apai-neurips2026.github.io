// =====================================================================
// Central content for the APAI @ NeurIPS 2026 workshop website.
// Edit the values here to update the site; pages read from this file.
// =====================================================================

export const workshop = {
  shortName: 'APAI @ NeurIPS 2026',
  title:
    'Beyond Real vs. Fake: Authenticity, Provenance, and Authorized Use of Generative AI',
  status: 'Active Proposal',
  // Placeholders — update once NeurIPS 2026 confirms the program.
  location: 'NeurIPS 2026 — Location TBA',
  date: 'December 2026 — Date & Time TBA',
  tagline:
    'Beyond real-vs-fake: a NeurIPS workshop on authenticity, provenance, and authorized use of generative AI — spanning avatar fingerprinting, watermarks, and model attribution.',
  openReviewUrl: '#', // Not live yet.
  abstract: [
    'For nearly a decade, the multimedia forensics community has framed its central question as: is this content real, or was it synthesized? But the increasingly prevalent use and accessibility of generative models for all varieties of audio-visual content has rendered this question harder and, in many contexts, the wrong one to ask. When an artist’s style appears in a diffusion model’s output, the meaningful question is not whether the output is AI-generated, but how we ensure that its lineage to that artist is recognized and respected. When a video-conference avatar is rendered on the receiver’s GPU from a few hundred bytes of motion embedding, how do we recognize impostors when every frame in the call is “synthetic”?',
    'This workshop convenes the NeurIPS community around an agenda centered on designing for trustworthy generative AI: a set of technical approaches that let creators, platforms, and end users authorize and attribute synthetic media rather than merely flag it. We aim to advance progress on three related problems: (i) provenance and creator attribution, (ii) authorized use of AI-mediated interactions, and (iii) adapting forensics into model and source attribution. The methods driving these pillars — diffusion-based generators, contrastive and multimodal representation learning, and the theory and engineering of watermarking — are core NeurIPS topics, yet venues that bring authenticity, provenance, and authorized-use methods into the same room remain sparse.',
  ],
  pillars: [
    {
      title: 'Provenance & creator attribution',
      body:
        'How do we let creators carry information with their content as it flows through generative pipelines? This spans the C2PA / Content Credentials standard, durable watermarking, proactive attribution of training data, and the open question of how multiple watermarks coexist in practice.',
    },
    {
      title: 'Authorized use of AI-mediated interactions',
      body:
        'As real-time avatar-driven videoconferencing, AR/VR telepresence, and live AI agents move into everyday use, the central question becomes: who is behind the avatar? Avatar fingerprinting reframes the problem as identity verification of the driving person, not classification of the rendered pixels.',
    },
    {
      title: 'Adapting forensics to the new paradigm',
      body:
        'An important direction for traditional forensics is to repurpose detectors as model and source attribution engines — not just “real or fake” but “which generator, which training distribution, which capture device,” drawing on spatiotemporal anomaly signals, constrained-CNN traces, and identity-specific biometric models.',
    },
  ],
};

export interface Person {
  name: string;
  affiliation: string;
  role?: string;
  bio?: string;
  confirmed?: boolean;
  // Free-form status label (e.g. "Pending Location"); overrides the
  // default confirmed/TBA badge when set.
  status?: string;
  photo?: string;
}

export const keynoteSpeakers: Person[] = [
  {
    name: 'Hany Farid',
    affiliation: 'UC Berkeley · GetReal Security',
    bio: 'Professor at the School of Information and EECS, UC Berkeley, and Co-founder & CSO at GetReal Security. A pioneer of scalable media forensics.',
    confirmed: true,
    photo: '/images/farid.jpg',
  },
  {
    name: 'Alex Engler',
    affiliation: 'Penn MEDIATED',
    photo: '/images/engler.jpg',
    bio: 'Executive Director of Penn MEDIATED, and former Senior Policy Advisor at the White House OSTP. Works on AI governance and algorithmic accountability.',
    confirmed: true,
  },
  {
    name: 'Shawn Shan',
    affiliation: 'Dartmouth',
    photo: '/images/shan.jpg',
    bio: 'Professor at Dartmouth working on creator protection against generative mimicry.',
    confirmed: true,
  },
];

// Panel: the keynote speakers join the panel, alongside these additional
// panelists and the moderator.
export const panelists: Person[] = [
  {
    name: 'Nicholas Carlini',
    affiliation: 'Anthropic',
    photo: '/images/carlini.jpg',
    bio: 'Researcher at Anthropic working on adversarial robustness and model red-teaming.',
    status: 'Tentative',
  },
  {
    name: 'Chris Bregler',
    affiliation: 'Google DeepMind',
    photo: '/images/bregler.jpg',
    bio: 'Researcher at Google DeepMind working on generative video and deep synthesis.',
    confirmed: true,
    status: 'Pending Location',
  },
  {
    name: 'Luisa Verdoliva',
    affiliation: 'University of Naples',
    photo: '/images/verdoliva.jpg',
    bio: 'Professor at the University of Naples, focused on benchmarking synthetic-media forensics methods.',
    status: 'Pending Location',
  },
  {
    name: 'David Luebke',
    affiliation: 'NVIDIA',
    role: 'Moderator',
    bio: 'VP of Graphics Research at NVIDIA, working on graphics research and avatar authentication.',
    confirmed: true,
    photo: '/images/luebke.jpg',
  },
];

export const organizers: Person[] = [
  {
    name: 'Shruti Agarwal',
    affiliation: 'Adobe',
    bio: 'Research Scientist on the AI for Content Authenticity team at Adobe; PhD with Prof. Hany Farid (UC Berkeley), postdoc with Prof. William Freeman (MIT CSAIL). Lead author on TrustMark and ProMark; General Chair, ACM IH&MMSec 2025.',
    photo: '/images/agarwal.jpg',
  },
  {
    name: 'Ekta Prashnani',
    affiliation: 'NVIDIA',
    bio: 'Sr. Research Scientist at NVIDIA Research; lead author of the pioneering avatar fingerprinting work at ECCV 2024 and co-author on the puppeteering-defense paper at NeurIPS 2025.',
    photo: '/images/prashnani.jpg',
  },
  {
    name: 'Maty Bohacek',
    affiliation: 'Stanford University',
    bio: 'Student researcher at Stanford and Google DeepMind, advised by Prof. Maneesh Agrawala. Lead author on Human Action CLIPs and the DeepSpeak dataset; co-organizer of APAI at ICCV 2025 and CVPR 2026.',
    photo: '/images/bohacek.jpg',
  },
  {
    name: 'Sarah Barrington',
    affiliation: 'UC Berkeley',
    bio: 'PhD candidate in Prof. Hany Farid’s digital-forensics lab. Lead author on the Nature Scientific Reports study on AI-cloned voices and co-creator of the DeepSpeak deepfake dataset.',
    photo: '/images/barrington.jpg',
  },
  {
    name: 'Michael Davinroy',
    affiliation: 'Aptima Inc.',
    bio: 'Senior AI/ML Engineer at Aptima Inc.; led the transition of the DARPA SemaFor program to industry, government, and international law enforcement.',
    photo: '/images/davinroy.jpg',
  },
  {
    name: 'Matthew Stamm',
    affiliation: 'Drexel University',
    bio: 'Professor; director of the Multimedia and Information Security Lab (MISL). Developed the constrained-CNN family of forensic detectors and the VideoFACT line of video-forgery detectors.',
    photo: '/images/stamm.jpg',
  },
  {
    name: 'David Luebke',
    affiliation: 'NVIDIA',
    bio: 'VP, Graphics Research at NVIDIA Research. Co-author on the original avatar fingerprinting paper and on the puppeteering-defense follow-on, bringing deep ties to the rendering and generation side of the problem.',
    photo: '/images/luebke.jpg',
  },
  {
    name: 'Jill Crisman',
    affiliation: 'UL Research Institutes',
    bio: 'VP and Executive Director of the Digital Safety Research Institute (DSRI) at UL Research Institutes.',
    photo: '/images/crisman.jpg',
  },
];

// Program Committee — named reviewers below; the organizing committee also
// serves on the panel. Additional members are added as invitations confirm.
export const programCommittee = {
  description:
    'We are assembling a Program Committee of approximately 60 reviewers drawn from (i) the Content Authenticity Initiative and C2PA technical working groups; (ii) authors of recent provenance-and-attribution papers at NeurIPS, CVPR, ICCV, and ICLR; and (iii) prior reviewer pools from APAI at ICCV 2025 and CVPR 2026. No reviewer will be assigned more than 3 papers.',
  note: 'Additional reviewers will be listed here as invitations are confirmed.',
  nominateUrl: 'https://forms.gle/9PP5YMHho8JA8zPm9',
  members: [
    {
      name: 'Naresh Kumar Devulapally',
      affiliation: 'The State University of New York at Buffalo',
    },
    { name: 'Janos Horvath', affiliation: 'Visionary Tech & Event Solutions' },
    { name: 'Ziyue Xiang', affiliation: 'Purdue University' },
    { name: 'Mehrdad Saberi', affiliation: 'University of Maryland' },
    {
      name: 'Koushik Srivatsan Murali',
      affiliation: 'Adobe / Johns Hopkins University',
    },
    {
      name: 'Christian Riess',
      affiliation:
        'Friedrich-Alexander University Erlangen-Nürnberg, Germany',
    },
    { name: 'Davide Cozzolino', affiliation: 'University of Naples Federico II' },
    { name: 'Roberto Caldelli', affiliation: 'CNIT and Universitas Mercatorum' },
    { name: 'Benedikt Lorch', affiliation: 'GetReal Security' },
    {
      name: 'Chandrakanth Gudavalli',
      affiliation: 'University of California Santa Barbara',
    },
    { name: 'Seonwook Park', affiliation: 'NVIDIA' },
    { name: 'Amrita Mazumdar', affiliation: 'NVIDIA' },
    { name: 'Gautham Koorma', affiliation: 'Quandary Peak Research' },
    { name: 'Arun George Zachariah', affiliation: 'NVIDIA' },
    {
      name: 'Gianni Poggi',
      affiliation: 'Università Federico II di Napoli, Italy',
    },
    { name: 'Qiuyu Tang', affiliation: 'Lehigh University' },
    { name: 'Candice Gerstner', affiliation: 'U.S. Department of Defense' },
    { name: 'Davide Salvi', affiliation: 'Politecnico di Milano' },
  ] as Person[],
};

export interface ScheduleItem {
  time: string;
  title: string;
  detail?: string;
  tba?: boolean;
}

export const schedule: ScheduleItem[] = [
  { time: '08:30 – 08:40', title: 'Opening remarks' },
  {
    time: '08:40 – 09:30',
    title: 'Keynote: Hany Farid',
    detail: 'UC Berkeley / GetReal Security',
  },
  {
    time: '09:30 – 10:15',
    title: 'Spotlight Paper Session I',
    detail: '3 talks, 15 min each',
  },
  { time: '10:15 – 10:45', title: 'Coffee break and poster set-up' },
  {
    time: '10:45 – 11:35',
    title: 'Keynote: Alex Engler',
    detail: 'Penn MEDIATED',
  },
  { time: '11:35 – 12:20', title: 'Fast-forward talks for poster authors' },
  {
    time: '12:20 – 13:30',
    title: 'Sponsored working lunch and poster session',
  },
  {
    time: '13:30 – 14:20',
    title: 'Keynote: Shawn Shan',
    detail: 'Dartmouth',
  },
  {
    time: '14:20 – 15:00',
    title: 'Spotlight Paper Session II',
    detail: '3 talks',
  },
  { time: '15:00 – 15:30', title: 'Coffee break' },
  {
    time: '15:30 – 16:30',
    title: 'Panel discussion',
    detail: 'Keynote speakers join the panel',
  },
  { time: '16:30 – 16:40', title: 'Closing remarks and best-paper announcement' },
];

export const cfp = {
  topics: [
    'Content provenance and the C2PA / Content Credentials standard',
    'Durable and robust watermarking; watermark coexistence',
    'Proactive attribution of training data and generated content',
    'Avatar fingerprinting and identity verification of AI-mediated interactions',
    'Puppeteering defenses and identity-leakage detection in synthesized video',
    'Voice-driven verification and audio authenticity',
    'Model, generator, and source attribution',
    'Biometric and spatiotemporal anomaly signals for forensics',
    'Deployment reports, systems papers, negative results, and policy-adjacent work',
  ],
  importantDates: [
    { label: 'Submission deadline', value: 'TBA' },
    { label: 'Author notification', value: 'TBA' },
    { label: 'Camera-ready deadline', value: 'TBA' },
    { label: 'Workshop date', value: 'December 2026' },
  ],
  details: [
    'We solicit standard 8-page workshop papers through OpenReview, with double-blind reviewing.',
    'Each paper receives 3 reviews and no reviewer is assigned more than 3 papers. We anticipate accepting roughly 50% of submissions, with around 6 selected for spotlight presentation and the remainder for posters with fast-forward talks.',
    'This workshop is non-archival. Work already accepted at a main machine-learning conference (including NeurIPS 2026) is out of scope.',
  ],
};
