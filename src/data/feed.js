import { v4 as uuid } from 'uuid';
import eventImg1 from 'assets/img/generic/13.jpg';
import team15 from 'assets/img/team/15.jpg';
import user1 from 'assets/img/team/17.jpg';
import user4 from 'assets/img/team/4.jpg';
import user13 from 'assets/img/team/13.jpg';
import user10 from 'assets/img/team/10.jpg';
import user8 from 'assets/img/team/8.jpg';
import generic11 from 'assets/img/generic/11.jpg';
import generic12 from 'assets/img/generic/12.jpg';
import av4 from 'assets/img/team/4.jpg';
import img1 from 'assets/img/generic/4.jpg';
import img2 from 'assets/img/generic/5.jpg';
import img3 from 'assets/img/gallery/4.jpg';
import img4 from 'assets/img/gallery/5.jpg';
import img5 from 'assets/img/gallery/6.jpg';

export default [
  {
    id: uuid(),
    user: {
      name: 'Rowan Atkinson',
      avatarSrc: user4,
      time: '11 hrs',
      location: 'Consett, UK',
      privacy: 'friends',
      share: 'album',
      status: 'status-online'
    },
    content: {
      status:
        'How the hell did the kid go about fooling everyone in his family, to turn around and start the new portfolio like nothing other in the world! What a story right?!',
      gallery: [img1, img2, img3, img4, img5]
    },
    details: {
      countLCS: {
        like: 345
      },
      reactions: {
        like: true,
        comment: true,
        share: false
      },
      comments: [
        {
          id: uuid(),
          avatarSrc: user4,
          name: 'Pimp Hand Strong Johnny went Nuclear',
          content: `I'd hope by now you understand, money isn't the goaln <a href="#!">freedom of expression, indivduality(2016)</a>, and my honesty through humility will always come first in a like and in a partnership`,
          postTime: '23hrs'
        },
        {
          id: uuid(),
          avatarSrc: user13,
          name: 'Jimmy Beans',
          content:
            ' I just have a feeling Tony told you, I really have a feeling Tony told you "Do you know how much stres that kids under at the moment?" Did you fucking tell him or did you tell him? You FUCKING told him. I know you did. ',
          postTime: '5hrs'
        }
      ],
      otherComments: '2 of 34'
    }
  },
  {
    id: uuid(),
    user: {
      name: 'Margot Robbie',
      avatarSrc: team15,
      time: '14Feb',
      location: 'London',
      privacy: 'friends',
      share: 'Post'
    },
    content: {
      status:
        "A mountain is something you need to climb, it's a pinnacle, that you're always trying to reach. You're always trying to grow upward, you're supposed to act of the highest good, your capable of being as an antidote of the limitations of that mountain, it's a long journey to specify the place on the highest pinnacle, that's symbolic because, of course, it's a pinnacle, just as your always trying to reach it, you're always trying to shoot for it. Youree always trying to climb upward, at least that's the theory, of course, that depends on your definition of upward. <br><br> Youree supposed to again, act out the highest good of which you are capable, now that will transform your life to some degree, into an archetypal adventure. There's no way around that because as you attempt to climb your highest mountain, let's say, to aim at a higher target or something like that, the things around you will become increasingly dramatic and of importance. <br><br> That happens by necessity. Obviously, if you're aiming at something difficult and profound, and you're really working at it, then your life is going to become increasingly difficult and profound, that might be okay, that might be exactly what you need. As an antidote to the implicit limitations that face you as a human being. "
    },
    details: {
      countLCS: {
        like: 4,
        comment: 20
      },
      reactions: {
        like: false,
        comment: true,
        share: false
      },
      comments: [
        {
          id: uuid(),
          avatarSrc: av4,
          name: 'John Buchanan',
          content: 'Whos the bitch now???',
          postTime: '2min'
        }
      ]
    }
  },
  {
    id: uuid(),
    user: {
      name: 'Jokes on Joel - I worked for IBM',
      avatarSrc: user10,
      time: '13 jan',
      location: 'LA, US',
      privacy: 'public',
      share: 'photo'
    },
    content: {
      imgSrc: generic11
    },
    details: {
      countLCS: {
        like: 3
      },
      reactions: {
        like: false,
        comment: false,
        share: false
      }
    }
  },
  {
    id: uuid(),
    content: {
      feedEvent: {
        title: 'Dreams and Nightmares',
        author: 'Little dawg &amp; beans',
        calender: {
          day: '31',
          month: 'Dec'
        },
        regFee: '$49.99 – $89.99',
        eventImg: eventImg1
      }
    },
    details: {
      countLCS: {
        like: 130,
        share: 65
      },
      reactions: {
        like: false,
        comment: false,
        share: false
      },
      comments: [
        {
          id: uuid(),
          avatarSrc: generic11,
          name: 'Rowan Atkinson',
          content: `He starred as Jane Porter in The <a href="#!">@Legend of Tarzan (2016)</a>, Tanya Vanderpoel in for which nominated for a Teen Choice Award, and many other awards.`,
          postTime: '1hr'
        }
      ]
    }
  },
  {
    id: uuid(),
    user: {
      name: 'Johnny Depp',
      avatarSrc: user8,
      time: 'Just Now',
      location: 'Paris',
      privacy: 'friends',
      share: 'video',
      status: 'status-online'
    },
    content: {
      status:
        'See the sport of Stealth VC as it’s never been captured before in John Buchanan and Ton Williams’s first signature release, in association with the award-winning design studio, Blue Media Fountain. The first application shot developed entirely from the need, The Need to Breed! 🤩 🌎 🎬',
      video: {
        src: 'https://www.youtube.com/watch?v=u3ofQgrIuWY&t=2959s',
        type: 'youtube',
        videoId: 'bTqVqk7FSmY'
      }
    },
    details: {
      countLCS: {
        like: 0
      },
      reactions: {
        like: false,
        comment: false,
        share: false
      }
    }
  },
  {
    id: uuid(),
    user: {
      name: 'Emilia Clarke',
      avatarSrc: user1,
      time: '16 Dec',
      location: 'Bangladesh',
      privacy: 'public',
      status: 'status-online',
      share: 'url'
    },
    content: {
      url: {
        imgUrl: generic12,
        urlAddress: 'https://buchanancomputer.com',
        title: 'Buchanan Computer: Facts & Investments of Worlds Highest Application Portfolio',
        description:
         'The portfolio range of Buchanan Computer has many of the Earths highest ranked applications, including the highest, AirBnb...',
      }
    },
    details: {
      countLCS: {
        like: 324
      },
      reactions: {
        like: true,
        comment: false,
        share: false
      }
    }
  }
];
