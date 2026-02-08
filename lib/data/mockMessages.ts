export interface Message {
  id: string;
  sender: "me" | "them";
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  userName: string;
  userInitials: string;
  listingTitle: string;
  listingPrice: string;
  messages: Message[];
}

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    userName: "Sarah Chen",
    userInitials: "SC",
    listingTitle: "Sunny Room near Campus — 2BR",
    listingPrice: "$750/mo",
    messages: [
      {
        id: "m1-1",
        sender: "me",
        text: "Hi! Is this room still available?",
        timestamp: "10:30 AM",
      },
      {
        id: "m1-2",
        sender: "them",
        text: "Hey! Yes it is 🎉 Are you a student at UMD?",
        timestamp: "10:32 AM",
      },
      {
        id: "m1-3",
        sender: "me",
        text: "Yeah I'm a junior studying CS. When could I come see the place?",
        timestamp: "10:33 AM",
      },
      {
        id: "m1-4",
        sender: "them",
        text: "Nice! How about this Saturday around 2pm? I can show you around the apartment and the neighborhood.",
        timestamp: "10:35 AM",
      },
      {
        id: "m1-5",
        sender: "me",
        text: "Saturday works great! I'll be there. What's the address?",
        timestamp: "10:36 AM",
      },
      {
        id: "m1-6",
        sender: "them",
        text: "I'll DM you the exact address tomorrow morning. See you then!",
        timestamp: "10:38 AM",
      },
    ],
  },
  {
    id: "conv-2",
    userName: "Marcus Johnson",
    userInitials: "MJ",
    listingTitle: "Private Room — Downtown Loft",
    listingPrice: "$900/mo",
    messages: [
      {
        id: "m2-1",
        sender: "them",
        text: "Hey, saw you were looking for a roommate. I've got a spot open in my downtown loft.",
        timestamp: "Yesterday",
      },
      {
        id: "m2-2",
        sender: "me",
        text: "Oh cool! What's the vibe like? I'm pretty quiet but social on weekends.",
        timestamp: "Yesterday",
      },
      {
        id: "m2-3",
        sender: "them",
        text: "Same here honestly. I'm a grad student so weekdays are heads-down, weekends we usually have people over. Utilities are included in rent btw.",
        timestamp: "Yesterday",
      },
      {
        id: "m2-4",
        sender: "me",
        text: "That sounds perfect. Can I tour this weekend?",
        timestamp: "Yesterday",
      },
    ],
  },
  {
    id: "conv-3",
    userName: "Priya Patel",
    userInitials: "PP",
    listingTitle: "Cozy Studio — Walk to Library",
    listingPrice: "$620/mo",
    messages: [
      {
        id: "m3-1",
        sender: "me",
        text: "Hi Priya! I saw your listing for the studio. Is it pet-friendly?",
        timestamp: "Mon",
      },
      {
        id: "m3-2",
        sender: "them",
        text: "Hi there! Unfortunately no pets allowed in the building. Sorry about that 😕",
        timestamp: "Mon",
      },
      {
        id: "m3-3",
        sender: "me",
        text: "No worries, thanks for letting me know!",
        timestamp: "Mon",
      },
    ],
  },
  {
    id: "conv-4",
    userName: "Jake Rivera",
    userInitials: "JR",
    listingTitle: "Shared House — 5 min to Gym",
    listingPrice: "$580/mo",
    messages: [
      {
        id: "m4-1",
        sender: "them",
        text: "Yo! We have a room opening up next month in our house. 4 of us total, all seniors. You interested?",
        timestamp: "Feb 1",
      },
      {
        id: "m4-2",
        sender: "me",
        text: "Definitely interested! What's parking like?",
        timestamp: "Feb 1",
      },
      {
        id: "m4-3",
        sender: "them",
        text: "We've got a driveway that fits 3 cars and there's free street parking too. Never had an issue.",
        timestamp: "Feb 1",
      },
    ],
  },
];
