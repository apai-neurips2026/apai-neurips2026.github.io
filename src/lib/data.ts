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
  venueNote: 'In-person, one-day workshop · Co-located with NeurIPS 2026',
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
}

export const keynoteSpeakers: Person[] = [
  {
    name: 'Hany Farid',
    affiliation: 'UC Berkeley · GetReal Security',
    role: 'Keynote',
    bio: 'Professor at the School of Information and EECS, UC Berkeley; Co-founder & CSO at GetReal Security. A leading voice in digital forensics and image analysis. Confirmed for keynote and panel.',
    confirmed: true,
  },
  {
    name: 'Keynote Speaker 2',
    affiliation: 'To be announced',
    role: 'Keynote',
    bio: 'A second keynote speaker is being confirmed. Speaker titles will be posted here ahead of the program.',
    confirmed: false,
  },
  {
    name: 'Keynote Speaker 3',
    affiliation: 'To be announced',
    role: 'Keynote',
    bio: 'A third keynote speaker is being confirmed. Speaker titles will be posted here ahead of the program.',
    confirmed: false,
  },
];

export const organizers: Person[] = [
  {
    name: 'Shruti Agarwal',
    affiliation: 'Adobe',
    bio: 'Research Scientist on the AI for Content Authenticity team at Adobe; PhD with Prof. Hany Farid (UC Berkeley), postdoc with Prof. William Freeman (MIT CSAIL). Lead author on TrustMark and ProMark; General Chair, ACM IH&MMSec 2025.',
  },
  {
    name: 'Ekta Prashnani',
    affiliation: 'NVIDIA',
    bio: 'Sr. Research Scientist at NVIDIA Research; lead author of the pioneering avatar fingerprinting work at ECCV 2024 and co-author on the puppeteering-defense paper at NeurIPS 2025.',
  },
  {
    name: 'Maty Bohacek',
    affiliation: 'Stanford University',
    bio: 'Student researcher at Stanford and Google DeepMind, advised by Prof. Maneesh Agrawala. Lead author on Human Action CLIPs and the DeepSpeak dataset; co-organizer of APAI at ICCV 2025 and CVPR 2026.',
  },
  {
    name: 'Sarah Barrington',
    affiliation: 'UC Berkeley',
    bio: 'PhD candidate in Prof. Hany Farid’s digital-forensics lab. Lead author on the Nature Scientific Reports study on AI-cloned voices and co-creator of the DeepSpeak deepfake dataset.',
  },
  {
    name: 'Michael Davinroy',
    affiliation: 'Aptima Inc.',
    bio: 'Researcher at Aptima Inc., bringing a test-and-evaluation perspective to authenticity and provenance.',
  },
  {
    name: 'Matthew Stamm',
    affiliation: 'Drexel University',
    bio: 'Associate Professor; director of the Multimedia and Information Security Lab (MISL). Developed the constrained-CNN family of forensic detectors and the VideoFACT line of video-forgery detectors.',
  },
  {
    name: 'David Luebke',
    affiliation: 'NVIDIA',
    bio: 'VP, Graphics Research at NVIDIA Research. Co-author on the original avatar fingerprinting paper, bringing deep ties to the rendering and generation side of the problem.',
  },
  {
    name: 'Jill Crisman',
    affiliation: 'UL Research Institutes',
    bio: 'Executive Director at UL Research Institutes, bringing standards and applied-research expertise to the organizing team.',
  },
];

// Program Committee is being assembled; names listed once invitations confirm.
export const programCommittee = {
  description:
    'We are assembling a Program Committee of approximately 40 reviewers drawn from (i) the Content Authenticity Initiative and C2PA technical working groups; (ii) authors of recent provenance-and-attribution papers at NeurIPS, CVPR, ICCV, and ICLR; and (iii) prior reviewer pools from APAI at ICCV 2025 and CVPR 2026. No reviewer will be assigned more than 3 papers.',
  note: 'The named Program Committee will be listed here once invitations are confirmed.',
};

export interface ScheduleItem {
  time: string;
  title: string;
  detail?: string;
  tba?: boolean;
}

export const schedule: ScheduleItem[] = [
  { time: '08:30 – 08:40', title: 'Opening remarks and framing' },
  {
    time: '08:40 – 09:30',
    title: 'Keynote: Prof. Hany Farid',
    detail: 'UC Berkeley / GetReal Security (confirmed)',
  },
  {
    time: '09:30 – 10:15',
    title: 'Spotlight Paper Session I',
    detail: '3 talks, 15 min each',
  },
  { time: '10:15 – 10:45', title: 'Coffee break and poster set-up' },
  { time: '10:45 – 11:35', title: 'Keynote 2', tba: true },
  { time: '11:35 – 12:20', title: 'Fast-forward talks for poster authors' },
  {
    time: '12:20 – 13:30',
    title: 'Working lunch and poster session',
    detail: 'Sponsored (to be confirmed)',
  },
  { time: '13:30 – 14:20', title: 'Keynote 3', tba: true },
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
    'We solicit short (4–6 page) workshop papers and extended abstracts through OpenReview, with double-blind reviewing.',
    'Each paper receives 3 reviews and no reviewer is assigned more than 3 papers. We anticipate accepting roughly 50% of submissions, with around 6 selected for spotlight presentation and the remainder for posters with fast-forward talks.',
    'This workshop is non-archival. Work already accepted at a main machine-learning conference (including NeurIPS 2026) is out of scope.',
  ],
};
