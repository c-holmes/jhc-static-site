const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const visualOfferingsData = [
  {
    id: "presenter",
    title: "You are a Presenter",
    description:
      "As a presenter, you tell your story with a call for action. You want people to remember your key messages.",
    images: [
      {
        src: `${basePath}/vo-rebecca-sutherns-zoom-but-better.jpg`,
        alt: "Visual map for Rebecca Sutherns' webinar",
      },
      {
        src: `${basePath}/vo-michael-bungay-stanier.jpg`,
        alt: "Visual map for Michael Bungay Stanier's video series",
      },
      {
        src: `${basePath}/vo-jackie-lauer.jpg`,
        alt: "Visual map for Jackie Lauer’s resiliency presentation",
      },
      {
        src: `${basePath}/vo-nancy-priest.jpg`,
        alt: "Sketchnote for Nancy Priest’s presentation",
      },
      {
        src: `${basePath}/vo-frank-newman.jpg`,
        alt: "Visual summary for Frank Newman's webinar",
      },
      {
        src: `${basePath}/vo-danielle-wallace.jpg`,
        alt: "Sketchnote for Danielle Wallace’s presentation",
      },
      {
        src: `${basePath}/vo-inspiring-women.jpg`,
        alt: "Sketchnote for 2019 Inspiring Women conference keynote speakers",
      },
      {
        src: `${basePath}/vo-emily-obrien.jpg`,
        alt: "Sketchnote for Emily O'Brien’s story",
      },
      {
        src: `${basePath}/vo-church-sermon.jpg`,
        alt: "Visual notes for online Church sermon",
      },
    ],
  },
  {
    id: "facilitator",
    title: "You are a Facilitator",
    description:
      "As a facilitator, you want graphic recording to support the group process and outcome - whether virtual or in person. A map summarizes key points, highlights of break-out group reports and decisions towards next steps.",
    images: [
      {
        src: `${basePath}/vo-all-staff-meeting.jpg`,
        alt: "Map of All Staff Meeting highlights",
      },
      {
        src: `${basePath}/vo-first-zoom-meeting.jpg`,
        alt: "Map capturing first group Zoom meeting",
      },
      {
        src: `${basePath}/vo-facilitator-question.jpg`,
        alt: "Map showing breakout room responses and next steps",
      },
    ],
  },
  {
    id: "leader",
    title: "You are a Leader",
    description:
      "As a leader of a team or organization, you want to capture the attention of current and potential stakeholders, employees and clients by engaging them in the big picture of your strategy and/or services.",
    images: [
      {
        src: `${basePath}/vo-carizon-strategic-map.jpg`,
        alt: "Digital map of Carizon’s strategic plan",
      },
      {
        src: `${basePath}/vo-greenway-chaplin-update.jpg`,
        alt: "Updated strategic map for Greenway-Chaplin Community Centre",
      },
    ],
  },
  {
    id: "learning-professional",
    title: "You are a Learning Professional",
    description:
      "As a learning professional, you want to create a visual map to promote the objectives and/or a map of highlights to support memory retention, transfer of learning and reinforcement.",
    images: [
      {
        src: `${basePath}/vo-good-stuff-coaching.jpg`,
        alt: "Leadership Good Stuff e-Course visual map",
      },
      {
        src: `${basePath}/vo-growth-mindset-workshop.jpg`,
        alt: "Infographic and custom map for Growth Mindset workshop",
      },
      {
        src: `${basePath}/vo-disc-productive-conflict.jpg`,
        alt: "Visual map of Everything DiSC Productive Conflict",
      },
    ],
  },
];

export default visualOfferingsData;
