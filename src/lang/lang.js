import StageTypes from "@/utils/types/StageTypes";

export default {
  about: {
    lead: [
      "Our mission is simple: to make Wintersday more special, to bring joy to the people taking part, and to tie the community closer together.",
    ],
    body: [
      "With your help we can make this happen. With your help we can make this Wintersday the best yet!",
      "The idea is to bring the Secret Santa tradition into the realm of Guild Wars 2. The Secret Santa tradition is a gift exchange program where people get randomly matched up. In Secret Toymaker you will be given the account name of someone else for whom to find the perfect gift. And don't worry, someone else will get yours.",
    ],
  },
  event: {
    hero: {
      [StageTypes.SIGNUP]: [
        "'Tis the season of giving, so sign up today and participate in this season's big community event!",
      ],
      [StageTypes.MATCHING]: [""],
      [StageTypes.GIFTING]: [""],
      [StageTypes.INACTIVE]: [""],
    },
    login: [
      "We're happy to see you're interested in participating!",
      "In order to participate, you need to create or log in to your account.",
    ],
    matching: [
      "Our beloved Toymake-o-tron is running around in ecstacy due to the amount of signups we had!",
      "We're trying to calm him down so he can complete the task of matching everyone. This might take a little while. Check back in a few minutes.",
    ],
    notParticipating: [
      "You're not in his hard drives. Did you sign up? Contact us if you think something is wrong.",
    ],
    hasEnded: "This event has already ended.",
  },
  faq: {
    short: [
      {
        title: "What are the rules for participating?",
        list: [
          "Only NA and EU players can participate. Sorry China.",
          "The submissions are due the 20th of December 0:00 UTC (server reset).",
          'The gift(s) must have a total value of 10g or more. See "What can I gift?" for more information.',
          "You must be able to send a gift to another player, and within the time frame mentioned below. We will try to eliminate possible false/troll accounts.",
          "The gifting will begin on the 20th of December and last until the 6th of January.",
          "You have until the 0:00 UTC on 6th of January to send your gift.",
        ],
      },
    ],
    long: [
      {
        title: "What is this Secret Toymaker?",
        text: [
          "Secret Toymaker is a community-driven secret santa tradition for Guild Wars 2. Send a gift to a random participant and get one in return from another!",
        ],
      },
      {
        title: "What are the rules for participating?",
        list: [
          "Only NA and EU players can participate.",
          'The gift(s) must have a total value of 10g or more. See "What can I gift?" for more information.',
          "You must send a gift to another player within the time frame.",
        ],
      },
      {
        title: "What is the point to this?",
        text: [
          "Giving. Compassion. And to get that warm, fuzzy feeling from spreading joy on Wintersday.",
          "There is too much hate in Tyria. We read about it on the forums and on reddit every day. Skritts evacuating their homes, Quaggans getting killed by Mordrem. Wintersday is a time for caring and heartfelt acts of compassion. The most beautiful thing in Tyria is a selfless act to help out your fellow Tyrians in any way you can. By participating in Secret Toymaker you will do your part in making Tyria a better place.",
        ],
      },
      {
        title: "Ok, sound cool. What do I need to do?",
        text: [
          "Head over to the sign up page and register. Then go to the event page and participate. You will need to create and/or enter an API token. After the signups are closed, we will match you with another participant to whom you will send a gift. The participant you get matched up with will not be your secret toymaker. You will be their's. You will not know your secret toymaker until they reveal themself through a generous gift.",
        ],
      },
      // {
      //   title: "How will I know when I can send my gift?",
      //   text: [
      //     "Like last year, we will send you an email when you are matched.",
      //     "Additionally, this year we have a new feature: web notifications! Meaning if you have a modern and up-to-date browser you will be able to opt in for notifications, which you may already be used to for services like Facebook Messenger. After you've signed up, head on over to the profile page and click the checkbox. For now, we only notify you when you have a match. We will expand the notification system further in the coming years.",
      //     "If you get any troubles or find any bugs, please contact Chris. Contact info can be found on the front page."
      //   ]
      // },
      {
        title: "Can Free-to-play players participate?",
        text: [
          "No, unfortunately. We have previously allowed for Free-to-play players to signup and receive donations, but as below 0.002% of previous signups were Free-to-play players we have decided it's not a priority.",
        ],
      },
      {
        title: "What can I gift?",
        text: [
          "Anything as long as the total value of your gift exceeds 10g and will fit in one mail (5 items). Meaning you can for instance give your match a dagger which is worth 10g, or a set of runes that in total are worth 10g. And naturally, there is no max limit, so if you feel extremely generous and you are one wealthy skritt, you can go nuts!",
        ],
      },
      {
        title: "What is an API token?",
        text: [
          "An API token is a randomly generated key consisting of numbers and letters, which gives whoever has the key access to some information about your account. At the time of writing this there are 10 sets of permissions you can give to an API token: account (required), inventories, characters, tradingpost, wallet, unlocks, pvp, builds, progression and and guilds. By granting us access to an API token with permissions for your account, we will be able to see your display name (e.g. ColinSohandsome.1234), if your account is Free-to-play, your home world, if you have a commander tag, and a list of guilds.",
          "This is what it says on your account page on ArenaNet's official site when you create an API token:",
        ],
        quote:
          "API keys are a way to grant third-party tools and applications partial read-only access to your Guild Wars 2 account's data, like account name and bank inventory. To use them, create a key, then copy and paste it into the field provided by the third-party tool or application. Each key is granted a fixed set of permissions that limit what third-party tools can access, and you can delete a key at any time to revoke the permissions granted.",
      },
      {
        title:
          "Is it safe to give you my API token? Can you access my account?",
        text: [
          "Yes, it's safe. No, we cannot access your account. The API system is made by ArenaNet themselves for online tools to use.",
        ],
      },
    ],
  },
  footer: [
    "Secret Toymaker is a non-profit fan-made site for Guild Wars 2. Secret Toymaker is in no way associated with ArenaNet, NCSOFT Corporation or the Guild Wars 2 trademark.",
    "© ArenaNet LLC. All rights reserved. NCSOFT, ArenaNet, Guild Wars, Guild Wars 2: Heart of Thorns, Guild Wars 2: Path of Fire, and Guild Wars 2: End of Dragons and all associated logos, designs, and composite marks are trademarks or registered trademarks of NCSOFT Corporation.",
  ],
  signup: {
    lead: "'Tis the season of giving, so sign up today and participate in this season's big community event!",
    intro: [
      "The Wintersday is all about sharing gifts with your friends and celebrating the past year, but what about all the Tyrians you happened to meet and share an adventure with? Those times have already passed, but the feelings are not so easily forgotten.",
      "We cannot track down those you have played with, but we can offer a way for you to give back to the community for all the good times you have had, and  will have.",
    ],
  },
  notifications: {
    intro: [
      "Notifications are new this year, and will let you stay up to date with the gifting process. You will be notified when...",
    ],
    list: [
      "you have a match" /*,
      "your toymaker marks their present as sent,",
      "your match marks your gift as received."*/,
    ],
  },
  thanks: [
    "Thank you for signing up!",
    "It is people like you that inspire us to do this event year after year. Your generosity and kindness will make Tyria and the whole Guild Wars 2 community a better place.",
    "You will receive an email from us when the deadline is due and the matching is complete.",
    "We hope that you have an amazing Wintersday celebration!",
    "Best wishes,",
  ],
};
