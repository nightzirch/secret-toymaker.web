module.exports = {
  about: [
    "Our mission is simple: to make Wintersday more special, to bring joy to the people taking part, and to tie the community closer together.",
    "With your help we can make this happen. With your help we can make this Wintersday the best yet!",
    "The idea is to bring the Secret Santa tradition into the realm of Guild Wars 2. The Secret Santa tradition is a gift exchange program where people get randomly matched up. In Secret Toymaker you will be given the account name of someone else for whom to find the perfect gift. And don't worry, someone else will get yours."
  ],
  aboutUs: {
    RandommUser: [
      "I'm RandommUser, an avid member of this community. I've seen and taken part in many awesome community events and I wanted to do something to make the Christmas time special."
    ],
    nightzirch: [
      "Hi! I usually go under the pseudonym nightzirch on the global web of inter, but you might've seen me ingame as Elriwun Handsome or similarly silly names. I too love Guild Wars 2 and as a web and mobile developer I love to give back to the community in one of the few ways I know how: by making useful web sites and tools. Until now I have made Guild Wars 2 Calculator and Guild Wars 2 Wardrobe (both discontinued) and also other less useful sites not worth mentioning.",
      "For this year's Secret Toymaker I have spent a lot of time adding web notifications and a report system. I hope you will get an improved Secret Toymaker experience!"
    ]
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
          "You have until the 0:00 UTC on 6th of January to send your gift."
        ]
      }
    ],
    long: [
      {
        title: "What is this Secret Toymaker?",
        text: [
          "Secret Toymaker is the Secret Santa tradition, but for Guild Wars 2 items. You will be giving a random player a surprise gift and getting one in return from another player!"
        ]
      },
      {
        title: "What are the rules for participating?",
        list: [
          "Only NA and EU players can participate. Sorry China.",
          "The submissions are due the 20th of December 0:00 UTC (server reset).",
          'The gift(s) must have a total value of 10g or more. See "What can I gift?" for more information.',
          "You must be able to send a gift to another player, and within the time frame mentioned below. We will try to eliminate possible false/troll accounts.",
          "The gifting will begin on the 20th of December and last until the 6th of January.",
          "You have until the 0:00 UTC on 6th of January to send your gift."
        ]
      },
      {
        title: "What is the point to this?",
        text: [
          "Giving. Compassion. And to get that warm, fuzzy feeling from spreading joy on Wintersday.",
          "There is too much hate in Tyria. We read about it on the forums and on reddit every day. Skritts evacuating their homes, Quaggans getting killed by Mordrem. Wintersday is a time for caring and heartfelt acts of compassion. The most beautiful thing in Tyria is a selfless act to help out your fellow Tyrians in any way you can. By participating in Secret Toymaker 2018, you will do your part in making Tyria a better place."
        ]
      },
      {
        title: "Ok, sound cool. What do I need to do?",
        text: [
          "Head over to the sign up page and register. You will need to create and enter an API token, and a valid email address. After the signups are closed, we will match you with another participant to whom you will send a gift. The participant you get matched up with will not be your secret toymaker. You will be their's. You will not know your secret toymaker until they reveal themself through a generous gift."
        ]
      },
      {
        title: "How will I know when I can send my gift?",
        text: [
          "Like last year, we will send you an email when you are matched.",
          "Additionally, this year we have a new feature: web notifications! Meaning if you have a modern and up-to-date browser you will be able to opt in for notifications, which you may already be used to for services like Facebook Messenger. After you've signed up, head on over to the profile page and click the checkbox. For now, we only notify you when you have a match. We will expand the notification system further in the coming years.",
          "If you get any troubles or find any bugs, please contact Chris. Contact info can be found on the front page."
        ]
      },
      {
        title: "Can Free-to-play players participate?",
        text: [
          "Yes! We will go more into detail later, but for now just know that all Free-to-play players can participate."
        ]
      },
      {
        title: "What can I gift?",
        text: [
          "Anything as long as the total value of your gift exceeds 10g and will fit in one mail (5 items). Meaning you can for instance give your match a dagger which is worth 10g, or a set of runes that in total are worth 10g. And naturally, there is no max limit, so if you feel extremely generous and you are one wealthy skritt, you can go nuts!"
        ]
      },
      {
        title: "What is an API token?",
        text: [
          "An API token is a randomly generated key consisting of numbers and letters, which gives whoever has the key access to some information about your account. At the time of writing this there are 10 sets of permissions you can give to an API token: account (required), inventories, characters, tradingpost, wallet, unlocks, pvp, builds, progression and and guilds. By granting us access to an API token with permissions for your account, we will be able to see your display name (e.g. ColinSohandsome.1234), your home world, if you have a commander tag, and a list of guilds.",
          "This is what it says on your account page on ArenaNet's official site when you create an API token:"
        ],
        quote:
          "API keys are a way to grant third-party tools and applications partial read-only access to your Guild Wars 2 account's data, like account name and bank inventory. To use them, create a key, then copy and paste it into the field provided by the third-party tool or application. Each key is granted a fixed set of permissions that limit what third-party tools can access, and you can delete a key at any time to revoke the permissions granted."
      },
      {
        title:
          "Is it safe to give you my API token? Can you access my account?",
        text: [
          "Yes, it's safe. No, we cannot access your account. The API system is made by ArenaNet themselves for online tools to use."
        ]
      },
      {
        title:
          'Why do I have to create a new API token named exactly "Secret Toymaker"? Why can\'t I use one I already have?',
        text: [
          "API tokens should not be used as authentication because they are supposed to be used somewhat publicly. However, we will be using this API token as a way of validating you. We will make sure your account is valid and that your account name is spelled correctly.",
          'In addition, by making you generate a new API token named exactly "Secret Toymaker" the chances are very slim for someone to impersonate you by getting their hands on one of your other API tokens. This is also why we will require you to enter your API token when you check who your match is; so only you can get that information.'
        ]
      },
      {
        title:
          "I lost/deleted/ate my API token after I successfully signed up. What do I do?",
        text: [
          'No worries. Create a new API token named exactly "Secret Toymaker".'
        ]
      }
    ]
  },
  gifts: {
    intro: ["The Gifts page will show you who you matched up with this year."],
    donations: [
      "Send more gifts! By clicking the button below, you will draw a random participant which you then can send an additional gift to.",
      "You are limited to 3 donations every 24 hours."
    ]
  },
  footer: {
    upper: [
      "Secret Toymaker is a non-profit fan-made site for Guild Wars 2. We are is in no way associated with ArenaNet, NCSOFT Corporation or the Guild Wars 2 trademark.",
      "©2010–2018 ArenaNet, LLC. All rights reserved. Guild Wars, Guild Wars 2, Heart of Thorns, Guild Wars 2: Path of Fire, ArenaNet, NCSOFT, the Interlocking NC Logo, and all associated logos and designs are trademarks or registered trademarks of NCSOFT Corporation. All other trademarks are the property of their respective owners."
    ],
    lower: [
      "Website by Christian Grimsgaard. Illustrations by Erich Vasburg. Email development by Ryan Field."
    ]
  },
  how: {
    step1: [
      "On the signup page, enter your API token and email, and provide a note for your Secret Toymaker."
    ],
    step2: [
      "Once the deadline for signing up is due, we will remind you by email and web notifications (new this year!) to check to which lucky Tyrian you will send a gift."
    ],
    step3: [
      "Use the note your match provided you to get a sense of what they wish for this Wintersday. Prepare, pack and send the gift to it's new home."
    ],
    step4: ["You will also receive a gift from your very own Secret Toymaker!"]
  },
  signup: {
    intro: [
      "The Wintersday is all about sharing gifts with your friends and celebrating the past year, but what about all the Tyrians you happened to meet and share an adventure with? Those times have already passed, but the feelings are not so easily forgotten.",
      "We cannot track down those you have played with, but we can offer a way for you to give back to the community for all the good times you have had, and  will have.",
      "'Tis the season of giving, so sign up today and participate in this season's big community event!"
    ],
    help: {
      apitoken: {
        title: "Create an API token",
        list: [
          {
            text: "Create an API token here",
            url: "https://account.arena.net/login?redirect_uri=%2Fapplications"
          },
          'Name it exactly "Secret Toymaker"'
        ]
      },
      email: {
        title: "Type your email",
        text: [
          "We will only use this to remind you when the gifting phase begins."
        ]
      },
      notes: {
        title: "Write a note",
        text: ["Tell your toymaker what you wish for this year."]
      }
    }
  },
  match: {
    intro: [
      "The signup is due and now the time has come for the next phase: gifting!",
      "See who your match is and what they wish for this Wintersday. Prepare your gift and send it to it's happy recipient. Maybe even score some bonus Wintersday points by adding a heart-warming message.",
      "Happy Wintersday to all!"
    ],
    help: {
      apitoken: {
        title: "Use your API token",
        list: [
          {
            text: "Find your API token here",
            url: "https://account.arena.net/login?redirect_uri=%2Fapplications"
          },
          'It still needs to be named exactly "Secret Toymaker".',
          'If you deleted/lost/ate your API token, just create a new one named "Secret Toymaker".'
        ]
      }
    }
  },
  notifications: {
    intro: [
      "Notifications are new this year, and will let you stay up to date with the gifting process. You will be notified when..."
    ],
    list: [
      "you have a match" /*,
      "your toymaker marks their present as sent,",
      "your match marks your gift as received."*/
    ]
  },
  profile: {
    intro: [
      "Welcome to your profile page!",
      "Type in your API token and you'll be able to see your match for this Wintersday.",
      "Additionally, this year we introduce some new features. You will now be able to mark your gift as sent, and confirm when you've received one as well. Also, make sure to register for web notifications in order to be notified when your toymaker mars their gift as sent."
    ],
    notSignedUp: [
      "Then you have a lot to look forward to! Head over to the sign up page, follow the instructions, and join the tradition of gift-giving with thousands of other Tyrians!"
    ],
    help: {
      email: {
        title: "Update your email",
        text: [
          "We will only use this to remind you when the gifting phase begins."
        ]
      },
      notes: {
        title: "Update your note",
        text: ["Tell your toymaker what you wish for this year."]
      }
    }
  },
  supportUs: [
    "Secret Toymaker is – and will always be – run completely voluntarily with no intentions of profiting.",
    "With a yearly server cost of $135, we appreciate all donations to make this expense easier on our personal wallet. All donations will go towards covering the server cost. Thank you for your donation!"
  ],
  thanks: [
    "Thank you for signing up!",
    "It is people like you that inspire us to do this event year after year. Your generosity and kindness will make Tyria and the whole Guild Wars 2 community a better place.",
    "You will receive an email from us when the deadline is due and the matching is complete.",
    "We hope that you have an amazing Wintersday celebration!",
    "Best wishes,"
  ],
  welcome: [
    "This is the fifth year in a row we run this event for the Guild Wars 2 community, and we would like to thank you for being such an awesome part of it."
  ]
};
