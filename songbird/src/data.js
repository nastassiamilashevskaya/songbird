const data = [
    {
        topic: 'Jazz',
        songs: [
            {
                song: 'Solitude',
                artist: 'Billie Holiday',
                audioLocation: 'jazz/Billie Holiday - Solitude.mp3',
                imageLocation: 'jazz/billie holiday.jpg'
            },
            {
                song: 'Black Coffee',
                artist: 'Ella Fitzgerald',
                audioLocation: 'jazz/ella fitzgerald - black coffee.mp3',
                imageLocation: 'jazz/ella fitzgerald.jpg'
            },
            {
                song: 'Fly Me To The Moon',
                artist: 'Frank Sinatra',
                audioLocation: 'jazz/frank sinatra - fly me to the moon.mp3',
                imageLocation: 'jazz/frank sinatra.jpg'
            },
            {
                song: 'What A Wonderful World',
                artist: 'Louis Armstrong',
                audioLocation: 'jazz/louis armstrong - what a wonderful world.mp3',
                imageLocation: 'jazz/louis armstrong.jpg'
            },
            {
                song: 'Feeling Good',
                artist: 'Nina Simone',
                audioLocation: 'jazz/nina simone - feeling good.mp3',
                imageLocation: 'jazz/nina simone.jpg'
            },
            {
                song: 'Hit The Road Jack',
                artist: 'Ray Charles',
                audioLocation: 'jazz/ray charles - hit the road jack.mp3',
                imageLocation: 'jazz/ray charles.jpg'
            }
        ]
    },
    {
        topic: 'Country',
        songs: [
            {
                song: `Knockin' On Heaven's Door`,
                artist: 'Bob Dylan',
                audioLocation: `country/Bob Dylan - Knockin' On Heaven's Door.mp3`,
                imageLocation: 'country/bob dylan.jpg'
            },
            {
                song: 'Hurt',
                artist: 'Johnny Cash',
                audioLocation: 'country/Johnny Cash - Hurt.mp3',
                imageLocation: 'country/johnny cash.jpg'
            },
            {
                song: 'Need You Now',
                artist: 'Lady Antebellum',
                audioLocation: 'country/Lady Antebellum - Need You Now.mp3',
                imageLocation: 'country/lady antebellum.jpg'
            },
            {
                song: 'Goodbye',
                artist: 'Sam Hunt',
                audioLocation: 'country/Sam Hunt - Goodbye (Acoustic).mp3',
                imageLocation: 'country/sam hunt.jpg'
            },
            {
                song: `God's Country`,
                artist: 'Blake Shelton',
                audioLocation: `country/blake shelton - god's country.mp3`,
                imageLocation: 'country/blake shelton.jpg'
            },
            {
                song: 'Dear John',
                artist: 'Taylor Swift',
                audioLocation: 'country/taylor swift - dear john.mp3',
                imageLocation: 'country/taylor swift.jpg'
            }
        ]
    },
    {
        topic: 'Pop',
        songs: [
            {
                song: `Tired`,
                artist: 'Alan Walker feat. Gavin James',
                audioLocation: `pop/Alan Walker feat. Gavin James - Tired.mp3`,
                imageLocation: 'pop/alan walker.jpg'
            },
            {
                song: 'Ride It',
                artist: 'Jay Sean',
                audioLocation: 'pop/Jay Sean - Ride it.mp3',
                imageLocation: 'pop/jay sean.jpg'
            },
            {
                song: 'Perfect Strangers',
                artist: 'Jonas Blue feat. JP Cooper',
                audioLocation: 'pop/Jonas Blue - Perfect Strangers.mp3',
                imageLocation: 'pop/jonas blue.jpeg'
            },
            {
                song: 'Payphone',
                artist: 'Maroon 5',
                audioLocation: 'pop/Maroon 5 - Payphone.mp3',
                imageLocation: 'pop/maroon 5.jpg'
            },
            {
                song: `Closer`,
                artist: 'The Chainsmokers feat. Halsey',
                audioLocation: `pop/The Chainsmokers feat Halsey - Closer.mp3`,
                imageLocation: 'pop/the chainsmokers.jpg'
            },
            {
                song: 'More Than You Know',
                artist: `Axwell /\ Ingrosso`,
                audioLocation: 'pop/axwell ingrosso - more than you know.mp3',
                imageLocation: 'pop/axwell ingrosso.jpg'
            }
        ]
    },
    {
        topic: 'Rock',
        songs: [
            {
                song: `It's My Life`,
                artist: 'Bon Jovi',
                audioLocation: `rock/Bon Jovi - It's My Life.mp3`,
                imageLocation: 'rock/bon jovi.jpg'
            },
            {
                song: 'Smells Like Teen Spirit',
                artist: 'Nirvana',
                audioLocation: 'rock/Nirvana - Smells Like Teen Spirit .mp3',
                imageLocation: 'rock/nirvana.jpg'
            },
            {
                song: 'Californication',
                artist: 'Red Hot Chili Peppers',
                audioLocation: 'rock/Red Hot Chili Peppers - Californication.mp3',
                imageLocation: 'rock/red hot chili peppers.jpg'
            },
            {
                song: 'Zombie',
                artist: 'The Cranberries',
                audioLocation: 'rock/The Cranberries - Zombie.mp3',
                imageLocation: 'rock/the cranberries.jpg'
            },
            {
                song: `Seven Nation Army`,
                artist: 'The White Stripes',
                audioLocation: `rock/The White Stripes - Seven Nation Army.mp3`,
                imageLocation: 'rock/the white stripes.jpg'
            },
            {
                song: 'I Hate Everything About You',
                artist: `Three Days Grace`,
                audioLocation: 'rock/Three Days Grace - I Hate Everything About You.mp3',
                imageLocation: 'rock/three days grace.jpeg'
            }
        ]
    },
    {
        topic: 'Soundtrack',
        songs: [
            {
                song: `I Don't Want To Miss A Thing`,
                artist: 'Aerosmith',
                audioLocation: `soundtracks/Aerosmith - I Don't Want To Miss A Thing.mp3`,
                imageLocation: 'soundtracks/armageddon.jpg'
            },
            {
                song: 'Shallow',
                artist: 'Lady Gaga feat. Bradley Cooper',
                audioLocation: 'soundtracks/Lady Gaga & Bradley Cooper - Shallow.mp3',
                imageLocation: 'soundtracks/a star is born.jpeg'
            },
            {
                song: 'Young And Beautiful',
                artist: 'Lana Del Rey',
                audioLocation: 'soundtracks/Lana Del Rey - Young And Beautiful (OST Великий Гэтсби).mp3',
                imageLocation: 'soundtracks/great gatsby.jpg'
            },
            {
                song: 'City Of Stars',
                artist: 'Ryan Gosling feat. Emma Stone',
                audioLocation: 'soundtracks/Ryan Gosling - City of stars.mp3',
                imageLocation: 'soundtracks/lalaland.jpg'
            },
            {
                song: `Heathens`,
                artist: 'Twenty One Pilots',
                audioLocation: `soundtracks/Twenty One Pilots - Heathens.mp3`,
                imageLocation: 'soundtracks/suicide squad.jpg'
            },
            {
                song: 'See You Again',
                artist: `Wiz Khalifa feat. Charlie Puth`,
                audioLocation: 'soundtracks/wiz khalifa feat charlie - puth see you again.mp3',
                imageLocation: 'soundtracks/furious 7.jpeg'
            }
        ]
    }
]