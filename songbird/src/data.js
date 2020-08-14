const data = [
    {
        topic: 'Jazz',
        songs: [
            {
                song: 'Solitude',
                artist: 'Billie Holiday',
                audioLocation: 'jazz/Billie Holiday - Solitude.mp3',
                imageLocation: 'jazz/billie holiday.jpg',
                discription: `Billie Holiday was an American jazz and swing music singer 
                with a career spanning for 26 years. Nicknamed "Lady Day" 
                by her friend and music partner Lester Young, Holiday had an innovative 
                influence on jazz music and pop singing. Her vocal style, strongly 
                inspired by jazz instrumentalists, pioneered a new way of manipulating 
                phrasing and tempo. She was known for her vocal delivery and improvisational skills.`
            },
            {
                song: 'Black Coffee',
                artist: 'Ella Fitzgerald',
                audioLocation: 'jazz/ella fitzgerald - black coffee.mp3',
                imageLocation: 'jazz/ella fitzgerald.jpg',
                discription: `Dubbed "The First Lady of Song," Ella Fitzgerald was the most popular 
                female jazz singer in the United States for more than half a century. In her lifetime, 
                she won 13 Grammy awards and sold over 40 million albums. Her voice was flexible, 
                wide-ranging, accurate and ageless. She could sing sultry ballads, sweet jazz and imitate 
                every instrument in an orchestra. Her audiences were rich and poor, made up of all races, 
                all religions and all nationalities.`
            },
            {
                song: 'Fly Me To The Moon',
                artist: 'Frank Sinatra',
                audioLocation: 'jazz/frank sinatra - fly me to the moon.mp3',
                imageLocation: 'jazz/frank sinatra.jpg',
                discription: `Francis Albert Sinatra was an American singer, actor and producer who 
                was one of the most popular and influential musical artists of the 20th century. He 
                is one of the best-selling music artists of all time, having sold more than 150 million records worldwide.`
            },
            {
                song: 'What A Wonderful World',
                artist: 'Louis Armstrong',
                audioLocation: 'jazz/louis armstrong - what a wonderful world.mp3',
                imageLocation: 'jazz/louis armstrong.jpg',
                discription: `Louis Daniel Armstrong, nicknamed "Satchmo", "Satch", and "Pops", was an American 
                trumpeter, composer, vocalist, and actor who was among the most influential figures in jazz. 
                His career spanned five decades, from the 1920s to the 1960s, and different eras in the history 
                of jazz. In 2017, he was inducted into the Rhythm & Blues Hall of Fame.`
            },
            {
                song: 'Feeling Good',
                artist: 'Nina Simone',
                audioLocation: 'jazz/nina simone - feeling good.mp3',
                imageLocation: 'jazz/nina simone.jpg',
                discription: `Nina Simone was one of the most gifted vocalists of her generation, and 
                also one of the most eclectic. Simone was a singer, pianist, and songwriter who bent 
                genres to her will rather than allowing herself to be confined by their boundaries; 
                her work swung back and forth between jazz, blues, soul, classical, R&B, pop, gospel, 
                and world music, with passion, emotional honesty, and a strong grasp of technique as the 
                constants of her musical career.`
            },
            {
                song: 'Hit The Road Jack',
                artist: 'Ray Charles',
                audioLocation: 'jazz/ray charles - hit the road jack.mp3',
                imageLocation: 'jazz/ray charles.jpg',
                discription: `Ray Charles Robinsonwas an American singer, songwriter, pianist, and composer. 
                Among friends and fellow musicians he preferred being called "Brother Ray." He was often 
                referred to as "The Genius."Charles was blinded during childhood due to glaucoma.Charles 
                pioneered the soul music genre during the 1950s by combining blues, jazz, rhythm and blues, 
                and gospel styles into the music he recorded for Atlantic. Charles is a 17-time Grammy Award winner.`
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
                imageLocation: 'country/bob dylan.jpg',
                discription: `Bob Dylan is an American singer-songwriter, author, 
                and visual artist who has been a major figure in popular culture for 
                more than 50 years. Much of his most celebrated work dates from the 1960s, 
                when songs such as "Blowin' in the Wind" and "The Times They Are a-Changin" 
                became anthems for the civil rights and anti-war movements.`
            },
            {
                song: 'Hurt',
                artist: 'Johnny Cash',
                audioLocation: 'country/Johnny Cash - Hurt.mp3',
                imageLocation: 'country/johnny cash.jpg',
                discription: `John R. Cash was an American singer, songwriter, musician, and 
                actor. He is one of the best-selling music artists of all time, having sold 
                more than 90 million records worldwide. His genre-spanning music embraced country, 
                rock and roll, rockabilly, blues, folk, and gospel sounds. This crossover appeal 
                earned him the rare honor of being inducted into the Country Music, Rock and Roll, and Gospel Music Halls of Fame.`
            },
            {
                song: 'Need You Now',
                artist: 'Lady A',
                audioLocation: 'country/Lady Antebellum - Need You Now.mp3',
                imageLocation: 'country/lady antebellum.jpg',
                discription: `Lady A is an American country music group formed in Nashville, Tennessee in 2006. 
                The group is composed of Hillary Scott , Charles Kelley, and Dave Haywood. The band abbreviated 
                the name to "Lady A" in June 2020 amid the George Floyd protests in an attempt to blunt the name's 
                associations with slavery and the Antebellum South, causing a dispute with Black gospel singer Anita White, 
                who had already been using that same name for more than 20 years.`
            },
            {
                song: 'Goodbye',
                artist: 'Sam Hunt',
                audioLocation: 'country/Sam Hunt - Goodbye (Acoustic).mp3',
                imageLocation: 'country/sam hunt.jpg',
                discription: `Sam Lowry Hunt is an American singer and songwriter. Since the launch of his career, 
                Hunt has quickly assumed recognition from both inside and outside the country music community 
                for his blending of genres, incorporating use of R&B and pop into the production and songwriting 
                of his songs. He has been honored with numerous awards, including one American Music Award, 
                and one CMT Music Award, as well as nominations for Billboard Music Awards and Grammy Awards.`
            },
            {
                song: `God's Country`,
                artist: 'Blake Shelton',
                audioLocation: `country/blake shelton - god's country.mp3`,
                imageLocation: 'country/blake shelton.jpg',
                discription: `Blake Tollison Shelton is an American country music singer and television personality. 
                In 2001, he made his debut with the single "Austin". The lead-off single from his self-titled debut album, 
                "Austin" spent five weeks at number one on the Billboard Hot Country Songs chart. The now Platinum-certified 
                debut album also produced two more top 20 entries ("All Over Me" and "Ol' Red").`
            },
            {
                song: 'Dear John',
                artist: 'Taylor Swift',
                audioLocation: 'country/taylor swift - dear john.mp3',
                imageLocation: 'country/taylor swift.jpg',
                discription: `Taylor Alison Swift is an American singer-songwriter. Her 2006 eponymous debut studio 
                album was the longest-charting album of the 2000s on the Billboard 200. Its third single, "Our Song", 
                made her the youngest person to single-handedly write and perform a number-one song on the Billboard 
                Country Airplay chart. Swift's breakthrough second studio album, Fearless (2008), won four Grammy Awards, 
                including Album of the Year. `
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
                imageLocation: 'pop/alan walker.jpg',
                discription: `Alan Olav Walker is a British-Norwegian DJ and record producer. In 2015, 
                Walker received international acclaim after releasing the single "Faded", which received 
                platinum certifications in 14 countries. In 2019, he was ranked 27th on DJ Mag's Top 100 DJs 
                list of 2019. He released his debut studio album, Different World, in 2018.`
            },
            {
                song: 'Ride It',
                artist: 'Jay Sean',
                audioLocation: 'pop/Jay Sean - Ride it.mp3',
                imageLocation: 'pop/jay sean.jpg',
                discription: `Jay Sean is an English singer, songwriter, record producer and arranger. This 
                led to him being signed to Virgin Records and having two UK top 10 hits as a solo artist in 2004. 
                They were included in his critically acclaimed debut album Me Against Myself which, though only 
                moderately successful in the UK, sold more than two million copies across Asia and remains his most successful album to date. `
            },
            {
                song: 'Perfect Strangers',
                artist: 'Jonas Blue feat. JP Cooper',
                audioLocation: 'pop/Jonas Blue - Perfect Strangers.mp3',
                imageLocation: 'pop/jonas blue.jpeg',
                discription: `Guy James Robin (born 2 August 1989), known professionally as Jonas Blue, is an English DJ, songwriter, singer, 
                record producer and remixer based in London who produces music which blends dance with pop music. `
            },
            {
                song: 'Payphone',
                artist: 'Maroon 5',
                audioLocation: 'pop/Maroon 5 - Payphone.mp3',
                imageLocation: 'pop/maroon 5.jpg',
                discription: `Maroon 5 is an American pop rock band from Los Angeles, California. It currently 
                consists of lead vocalist Adam Levine, keyboardist and rhythm guitarist Jesse Carmichael, lead 
                guitarist James Valentine, drummer Matt Flynn, keyboardist PJ Morton and multi-instrumentalist 
                Sam Farrar. Original members Levine, Carmichael, bassist Mickey Madden, and drummer Ryan Dusick 
                first came together as Kara's Flowers in 1994, while they were still in high school.`
            },
            {
                song: `Closer`,
                artist: 'The Chainsmokers feat. Halsey',
                audioLocation: `pop/The Chainsmokers feat Halsey - Closer.mp3`,
                imageLocation: 'pop/the chainsmokers.jpg',
                discription: `The Chainsmokers is an American electronic DJ and production duo consisting of 
                Alexander "Alex" Pall and Andrew "Drew" Taggart. The EDM-pop duo achieved a breakthrough with 
                their 2014 song "#Selfie", which became a top twenty single in several countries. They have won 
                a Grammy award, two American Music Awards, seven Billboard Music Awards and nine iHeartRadio Music 
                Awards. According to Forbes 2019 list of highest paid celebrities, the Chainsmokers were the highest paid DJs.`
            },
            {
                song: 'More Than You Know',
                artist: `Axwell /\ Ingrosso`,
                audioLocation: 'pop/axwell ingrosso - more than you know.mp3',
                imageLocation: 'pop/axwell ingrosso.jpg',
                discription: `Axwell Λ Ingrosso is a Swedish DJ duo consisting of Swedish House Mafia members Axwell 
                and Sebastian Ingrosso. They made their debut performance at the 2014 Governors Ball Music Festival 
                in New York City in June. In 2016 they took 16th place, and in 2017 - to 21st in DJ Mag "Top 100 DJs"`
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
                imageLocation: 'rock/bon jovi.jpg',
                discription: `Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey. It consists 
                of singer Jon Bon Jovi, keyboardist David Bryan, drummer Tico Torres, guitarist Phil X, and bassist 
                Hugh McDonald. Previous bassist Alec John Such was dismissed in 1994, and longtime guitarist and 
                co-songwriter Richie Sambora left in 2013.`
            },
            {
                song: 'Smells Like Teen Spirit',
                artist: 'Nirvana',
                audioLocation: 'rock/Nirvana - Smells Like Teen Spirit .mp3',
                imageLocation: 'rock/nirvana.jpg',
                discription: `Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded 
                by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a 
                succession of drummers before recruiting Dave Grohl in 1990. Characterized by their punk aesthetic, 
                Nirvana's fusion of pop melodies with noise, combined with their themes of abjection and social alienation, 
                made them hugely popular during their short tenure.`
            },
            {
                song: 'Californication',
                artist: 'Red Hot Chili Peppers',
                audioLocation: 'rock/Red Hot Chili Peppers - Californication.mp3',
                imageLocation: 'rock/red hot chili peppers.jpg',
                discription: `Red Hot Chili Peppers are an American rock band. Their music incorporates elements of 
                alternative rock, funk, punk rock and psychedelic rock. They are the most successful band in the 
                history of alternative rock, with the records for most number-one singles, most cumulative weeks 
                at number one and most top-ten songs on the Billboard Alternative Songs chart. They have won six 
                Grammy Awards, and in 2012 were inducted into the Rock and Roll Hall of Fame.`
            },
            {
                song: 'Zombie',
                artist: 'The Cranberries',
                audioLocation: 'rock/The Cranberries - Zombie.mp3',
                imageLocation: 'rock/the cranberries.jpg',
                discription: `The Cranberries were an Irish rock band formed in Limerick, Ireland, in 1989 by 
                lead singer Niall Quinn, guitarist Noel Hogan, bassist Mike Hogan, and drummer Fergal Lawler. 
                Quinn was replaced as lead singer by Dolores O'Riordan in 1990. The band officially classify 
                themselves as an alternative rock group, but incorporate aspects of indie pop, post-punk, folk rock, 
                and pop rock into their sound.The Cranberries' total sales are between over 40 and near 50 million 
                albums worldwide as of 2019.`
            },
            {
                song: `Seven Nation Army`,
                artist: 'The White Stripes',
                audioLocation: `rock/The White Stripes - Seven Nation Army.mp3`,
                imageLocation: 'rock/the white stripes.jpg',
                discription: `The White Stripes were an American rock duo. The group consisted of Jack White and Meg 
                White. After releasing several singles and three albums within the Detroit music scene, The White 
                Stripes rose to prominence in 2002 as part of the garage rock revival scene. Their successful and 
                critically acclaimed albums White Blood Cells and Elephant drew attention from a large variety of media 
                outlets in the United States and the United Kingdom.`
            },
            {
                song: 'I Hate Everything About You',
                artist: `Three Days Grace`,
                audioLocation: 'rock/Three Days Grace - I Hate Everything About You.mp3',
                imageLocation: 'rock/three days grace.jpeg',
                discription: `Three Days Grace is a Canadian rock band formed in Norwood, Ontario in 1997. Based in 
                Toronto, the band's original line-up consisted of guitarist and lead vocalist Adam Gontier, 
                drummer and backing vocalist Neil Sanderson, and bassist Brad Walst. In 2003, Barry Stock was recruited 
                as the band's lead guitarist, making them a four-member band. In 2013, Gontier left the band and was 
                replaced by My Darkest Days' vocalist Matt Walst, who is also the younger brother of bassist Brad Walst.`
            }
        ]
    },
    {
        topic: 'Hip-hop',
        songs: [
            {
                song: `Jumpman`,
                artist: 'Drake feat. Future',
                audioLocation: `hip-hop/Drake & Future - Jumpman.mp3`,
                imageLocation: 'hip-hop/drake & future.jpg',
                discription: `Aubrey Drake Graham is a Canadian rapper, singer, songwriter, record producer, actor, 
                and entrepreneur. A prominent figure in popular music, Drake is widely credited for popularizing 
                the Toronto sound to the music industry. He first gained recognition as an actor on the teen drama 
                television series Degrassi: The Next Generation; intent on pursuing a career in music, he left the series in 
                2007 after releasing his debut mixtape Room for Improvement.`
            },
            {
                song: 'Antisocial',
                artist: 'Ed Sheeran feat. Travis Scott',
                audioLocation: 'hip-hop/Ed Sheeran feat Travis Scott - antisocial.mp3',
                imageLocation: 'hip-hop/ed sheeran & travis scott.jpg',
                discription: `Edward Christopher Sheeran is an English singer, songwriter, record producer, and actor. 
                In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project. After 
                signing with Asylum Records, his debut album, + (pronounced "plus"), was released in September 2011 
                and topped the UK Albums Chart. In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist 
                and British Breakthrough Act.`
            },
            {
                song: 'Lose Yourself',
                artist: 'Eminem',
                audioLocation: 'hip-hop/Eminem - Lose Yourself.mp3',
                imageLocation: 'hip-hop/eminem.jpg',
                discription: `Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, 
                songwriter, and record producer. Credited with popularizing hip hop in Middle America, Eminem's 
                global success and acclaimed works are widely regarded as having broken racial barriers for the 
                acceptance of white rappers in popular music.He has been influential for many artists of various 
                genres and is often cited as one of the greatest rappers of all time.`
            },
            {
                song: 'Falling Down',
                artist: 'Lil Peep feat. XXXTentacion',
                audioLocation: 'hip-hop/Lil Peep & XXXTentacion - Falling Down.mp3',
                imageLocation: 'hip-hop/lil peep & xxxtentacion.jpg',
                discription: `"Falling Down" is a song by late American rappers Lil Peep and XXXTentacion.The song 
                was posthumously released as the lead single from the album on September 19, 2018. The track was 
                produced by IIVI, John Cunningham, and Mike Will Made It. "Falling Down" was originally a song by 
                and written by Lil Peep and singer iLoveMakonnen under the title "Sunlight on Your Skin", with 
                XXXTentacion also receiving a writing credit for the final version.`
            },
            {
                song: `No Name`,
                artist: 'NF',
                audioLocation: `hip-hop/NF - No Name.mp3`,
                imageLocation: 'hip-hop/nf.jpg',
                discription: `Nathan John Feuerstein, known by his initials NF, is an American rapper, singer and 
                songwriter. He released a self-titled EP in 2014 with Capitol CMG. NF has released four studio albums. 
                His albums have earned several accolades, some of which include: two No. 1 debuts on the Billboard 
                200 charts (Perception and The Search); and a triple-platinum certified single in the United States 
                which also charted internationally ("Let You Down").`
            },
            {
                song: 'Taste',
                artist: `Tyga feat. Offset`,
                audioLocation: 'hip-hop/Tyga feat. Offset - Taste.mp3',
                imageLocation: 'hip-hop/tyga & offset.jpg',
                discription: `"Taste" is a single by American rapper Tyga. It was released on May 16, 2018 for streaming 
                and digital download as the lead single for his seventh album Legendary (2019). The single peaked at 
                number eight on the Billboard Hot 100, becoming his first chart entry in three years. The song marked 
                a career comeback for Tyga as a solo artist, and it is the second highest charting single of his career 
                behind "Rack City" from 2011.`
            }
        ]
    },
    {
        topic: 'Soundtrack',
        songs: [
            {
                song: `I Don't Want To Miss A Thing (OST Armageddon)`,
                artist: 'Aerosmith',
                audioLocation: `soundtracks/Aerosmith - I Don't Want To Miss A Thing.mp3`,
                imageLocation: 'soundtracks/armageddon.jpg',
                discription: `Aerosmith is an American rock band formed in Boston in 1970. Their style, 
                which is rooted in blues-based hard rock, has come to also incorporate elements of pop rock, 
                heavy metal, and rhythm and blues, and has inspired many subsequent rock artists. They are 
                sometimes referred to as "the Bad Boys from Boston" and "America's Greatest Rock and Roll Band". 
                As a partnership, the primary songwriting team of Tyler and Perry is often collectively known as the "Toxic Twins".`
            },
            {
                song: 'Shallow (OST A Star Is Born)',
                artist: 'Lady Gaga feat. Bradley Cooper',
                audioLocation: 'soundtracks/Lady Gaga & Bradley Cooper - Shallow.mp3',
                imageLocation: 'soundtracks/a star is born.jpeg',
                discription: `"Shallow" is a song performed by American singer Lady Gaga and American actor and filmmaker 
                Bradley Cooper. It was released on September 27, 2018 as the lead single from the soundtrack to the 2018 
                musical romantic drama film, A Star Is Born. The song is heard three times throughout the film, most 
                prominently during a sequence when Cooper's character Jackson Maine invites Gaga's character Ally to 
                perform it onstage with him.`
            },
            {
                song: 'Young And Beautiful (OST Great Gatsby)',
                artist: 'Lana Del Rey',
                audioLocation: 'soundtracks/Lana Del Rey - Young And Beautiful (OST Великий Гэтсби).mp3',
                imageLocation: 'soundtracks/great gatsby.jpg',
                discription: `"Young and Beautiful" is a song by American singer and songwriter Lana Del Rey used for 
                the soundtrack to the drama film The Great Gatsby (2013). It was released on April 23, 2013, through 
                Interscope Records as the lead single from the soundtrack. "Young and Beautiful" was written by Del Rey 
                and Rick Nowels, who also produced the song. The music video features an orchestral version of the song, 
                which is included on the deluxe edition of the soundtrack.`
            },
            {
                song: 'City Of Stars (OST La La Land)',
                artist: 'Ryan Gosling feat. Emma Stone',
                audioLocation: 'soundtracks/Ryan Gosling - City of stars.mp3',
                imageLocation: 'soundtracks/lalaland.jpg',
                discription: `"City of Stars" is a song performed by Ryan Gosling and Emma Stone in the film La La Land (2016). 
                The music of the song was composed by Justin Hurwitz while the lyrics were provided by Benj Pasek and Justin Paul. 
                The song won numerous awards, including the award for Best Original Song at both the 74th Golden Globe Awards and 
                89th Academy Awards.`
            },
            {
                song: `Heathens (OST Suicide Squad)`,
                artist: 'Twenty One Pilots',
                audioLocation: `soundtracks/Twenty One Pilots - Heathens.mp3`,
                imageLocation: 'soundtracks/suicide squad.jpg',
                discription: `"Heathens" is a song by American musical duo Twenty One Pilots, released as the lead single for 
                the motion picture soundtrack for the film Suicide Squad (2016). The song was written by Tyler Joseph and 
                produced by him along with Mike Elizondo. "Heathens" peaked at number two on the US Billboard Hot 100, tying 
                with "Stressed Out" for the duo's highest charting single to date. "Heathens" was nominated for three Grammy 
                Awards at the 59th annual awards ceremony.`
            },
            {
                song: 'See You Again (OST Furious 7)',
                artist: `Wiz Khalifa feat. Charlie Puth`,
                audioLocation: 'soundtracks/wiz khalifa feat charlie - puth see you again.mp3',
                imageLocation: 'soundtracks/furious 7.jpeg',
                discription: `"See You Again" is a song recorded by American rapper Wiz Khalifa, featuring American singer 
                Charlie Puth. The track was commissioned for the soundtrack of the 2015 action film Furious 7 as a tribute 
                to actor Paul Walker, who died in a single-vehicle accident. Later on, the song was included as a bonus track 
                on the international release of Puth's debut album. "See You Again" was released on March 10, 2015, as the soundtrack's 
                lead single in the United States.`
            }
        ]
    }
]

export default data;