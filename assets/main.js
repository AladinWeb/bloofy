function updateMetaTags(category = '', subcategory = '') {
    const metaData = {
        main: {
        title: 'Bloofy: Hilarious Takes on Tech, Fashion & More in 2025',
        description: 'Laugh out loud with Bloofy’s witty 2025 takes on tech, fashion, cars, travel, and food. Discover humor like never before!',
        canonicalUrl: 'https://bloofy.net'
        },
        about: {
            title: 'Bloofy: 2025’s Ultimate Guide to Internet Fails & Chaos',
            description: 'Discover Bloofy, your go-to source for 2025’s funniest internet fails, tech flops, fashion disasters, and food fiascos. Powered by AllWorld SEO, Bloofy delivers daily comedy with sarcasm and wit.',
            canonicalUrl: 'https://bloofy.net/about'
        },
        contact: {
            title: 'Contact Bloofy: Get in Touch for 2025 Laughs',
            description: 'Reach out to Bloofy for laughs, collabs, or to share your 2025 fails. Email us or ping us on X for witty humor and fun vibes!',
            canonicalUrl: 'https://bloofy.net/contact'
        },
        'technology': {
            title: 'Tech Jokes & Gadget Giggles on Bloofy for 2025',
            description: 'Get ready to chuckle at 2025’s tech trends and gadgets with Bloofy’s sharp humor and witty insights. Laughs guaranteed!',
            subtopics: {
                'best-specs-of-cellphones-2025': {
                    title: 'Funny Cellphone Specs to Crack Up in 2025',
                    description: 'Bloofy’s hilarious take on 2025’s wildest cellphone specs will leave you in stitches. Tech humor at its finest!'
                },
                'smart-home-gadgets-2025': {
                    title: 'Smart Home Gear Trends 2025: Fun Gadgets That Make Life Easier',
                    description: 'Explore 2025’s quirky smart home gadgets with Bloofy’s side-splitting humor. Get ready for techy laughs!'
                },
                'ai-assistant-fails-2025': {
                    title: 'AI Assistant Blunders to Laugh at in 2025',
                    description: 'Bloofy’s got the funniest 2025 AI assistant fails. Chuckle at tech gone wrong with our witty insights!'
                },
                'vr-gaming-trends-2025': {
                    title: 'VR Gaming Trends 2025: Hilarious Future of Play',
                    description: 'Dive into 2025’s VR gaming trends with Bloofy’s hilarious spin. Laugh at the future of gaming with us!'
                },
                'wearable-tech-flops-2025': {
                    title: 'Wearable Tech Flops 2025: Hilarious Gadget Fails',
                    description: 'Bloofy’s take on 2025’s wearable tech disasters will make you laugh. Chuckle at glitchy gadgets with our wit!'
                },
                'holographic-device-hype-2025': {
                    title: 'Holographic Device Hype 2025: Funny Tech Trends',
                    description: 'Bloofy’s hilarious spin on 2025’s holographic device craze will leave you in stitches. Techy laughs await!'
                },
                'robot-vacuum-mayhem-2025': {
                    title: 'Robot Vacuum Mayhem 2025: Hilarious Cleaning Chaos',
                    description: 'Bloofy’s take on 2025’s rogue robot vacuums will have you laughing. Chuckle at cleaning gone wild with our wit!'
                },
                'smart-car-chaos-2025': {
                    title: 'Smart Car Chaos 2025: Funny Driving Disasters',
                    description: 'Bloofy’s hilarious spin on 2025’s smart car mishaps will leave you in stitches. Laugh at road tech gone rogue!'
                },
                'quantum-computing-capers-2025': {
                    title: 'Quantum Computing Capers 2025: When Your PC Solves Riddles and Crashes Your Coffee Maker',
                    description: 'Bloofy dives into 2025’s quantum computing chaos with laughs, where your PC outsmarts you and accidentally brews chaos. Quantum giggles guaranteed!'
                },
                'iot-security-snafus-2025': {
                    title: 'IoT Security Snafus 2025: When Your Toaster Hacks Your Bank Account',
                    description: 'Bloofy roasts 2025’s IoT security flops, where your smart devices turn into mischievous hackers. Chuckle at tech gone rogue!'
                }
            }
        },
        'fashion': {
            title: 'Fashion Funnies & Style Jokes on Bloofy 2025',
            description: 'Stay stylish and amused with Bloofy’s 2025 fashion humor. Laugh at trends and flops with our witty takes!',
            subtopics: {
                'weird-fashion-trends-2025': {
                    title: 'Weird 2025 Fashion Trends to Laugh About',
                    description: 'Bloofy makes 2025’s oddest fashion trends hilarious. Chuckle at quirky styles with our funny insights!'
                },
                'sustainable-fashion-2025': {
                    title: 'Green Fashion Trends 2025: Eco-Friendly Style with a Fun Twist',
                    description: 'Eco-fashion gets a funny twist with Bloofy’s 2025 sustainable style quips. Laugh at green trends now!'
                },
                'celebrity-style-fails-2025': {
                    title: 'Celeb Fashion Flops to Giggle at in 2025',
                    description: 'Bloofy’s witty take on 2025’s celebrity style fails will have you laughing. Star-studded humor awaits!'
                },
                'diy-fashion-hacks-2025': {
                    title: 'DIY Fashion Hacks 2025: Creative Styles with a Fun Twist',
                    description: 'Bloofy’s 2025 DIY fashion hacks are packed with humor. Laugh at clever style tips with our wit!'
                },
                'smart-clothing-fails-2025': {
                    title: 'Smart Clothing Fails 2025: Hilarious Fashion Tech Flops',
                    description: 'Bloofy’s take on 2025’s glitchy smart clothing will make you laugh. Chuckle at wardrobe malfunctions!'
                },
                'retro-fashion-revival-2025': {
                    title: 'Retro Fashion Revival 2025: Funny Throwback Styles',
                    description: 'Bloofy’s hilarious spin on 2025’s retro fashion comeback will have you giggling at nostalgic trends!'
                },
                'animal-print-mania-2025': {
                    title: 'Animal Print Mania 2025: Hilarious Wild Patterns',
                    description: 'Bloofy’s funny take on 2025’s animal print craze will have you laughing. Chuckle at roaring styles with our wit!'
                },
                'boho-chic-revival-2025': {
                    title: 'Boho Chic Revival 2025: Funny Flowy Fashion',
                    description: 'Bloofy’s hilarious spin on 2025’s boho chic revival will leave you giggling at free-spirited flops!'
                },
                'neon-streetwear-explosion-2025': {
                    title: 'Neon Streetwear Explosion 2025: Glow Like a Neon Sign and Blind the Haters',
                    description: 'Bloofy lights up 2025’s neon streetwear craze with laughs, where glowing threads turn you into a walking rave and leave haters squinting in style!'
                },
                'futuristic-fabric-fads-2025': {
                    title: 'Futuristic Fabric Fads 2025: Where Your Clothes Change Colors Like a Mood Ring',
                    description: 'Bloofy dives into 2025’s futuristic fabric trends, where your wardrobe shifts hues with your mood—serving laughs and sci-fi fashion vibes!'
                }
            }
        },
        'cars': {
            title: 'Car Comedy 2025: Funny Auto Jokes & Laughs on Bloofy',
            description: 'Rev up for laughs with Bloofy’s 2025 car humor. From fails to innovations, our witty takes deliver!',
            subtopics: {
                'funniest-car-fails-2025': {
                    title: 'Funniest Car Fails of 2025: Hilarious Moments to Make You Laugh',
                    description: 'Bloofy’s take on 2025’s epic car fails will leave you in stitches. Laugh at auto mishaps with us!'
                },
                'electric-car-innovations-2025': {
                    title: 'Electric Car Jokes 2025: Hilarious EV Humor and Fun Laughs',
                    description: 'Bloofy’s hilarious 2025 electric car innovations will spark laughs. Charge up for auto humor now!'
                },
                'car-sharing-disasters-2025': {
                    title: 'Car-Sharing Fails 2025: Hilarious Rideshare Fiascos to Make You Laugh',
                    description: 'Bloofy’s 2025 car-sharing disasters are comedy gold. Chuckle at ride-share fails with our wit!'
                },
                'autonomous-car-adventures-2025': {
                    title: 'Self-Driving Car Jokes 2025: Funny Fails and Laugh-Out-Loud Moments',
                    description: 'Autonomous cars in 2025? Bloofy’s funny take on self-driving adventures will make you laugh!'
                },
                'car-customization-chaos-2025': {
                    title: 'Car Customization Chaos 2025: Funny Mod Fails',
                    description: 'Bloofy’s take on 2025’s wild car customizations will make you laugh. Chuckle at mod mishaps with us!'
                },
                'flying-car-fantasies-2025': {
                    title: 'Flying Car Fantasies 2025: Hilarious Airborne Jokes',
                    description: 'Bloofy’s funny spin on 2025’s flying car dreams will leave you giggling at sky-high flops!'
                },
                'hydrogen-car-hype-2025': {
                    title: 'Hydrogen Car Hype 2025: Zero Emissions, Maximum Laughs',
                    description: 'Bloofy fuels 2025’s hydrogen car craze with humor, where zero-emission rides deliver eco-friendly giggles and the occasional explosion of fun!'
                },
                'vintage-car-comeback-2025': {
                    title: 'Vintage Car Comeback 2025: Retro Rides with a Hilarious Twist',
                    description: 'Bloofy revs up 2025’s vintage car revival with laughs, where classic wheels get a modern makeover and a side of comedic chaos!'
                },
                'off-road-outrage-2025': {
                    title: 'Off-Road Outrage 2025: When SUVs Go Wild and Crash Harder',
                    description: 'Bloofy tackles 2025’s off-road SUV madness with humor, where rugged rides turn into laughable wrecks and epic fails!'
                },
                'car-audio-absurdity-2025': {
                    title: 'Car Audio Absurdity 2025: Bass So Loud It Wakes the Neighbors',
                    description: 'Bloofy cranks up 2025’s car audio insanity with laughs, where booming systems shake streets and deliver a soundtrack of hilarity!'
                }
            }
        },
        'travel': {
            title: 'Travel Humor & Trip Tales on Bloofy 2025',
            description: 'Jet-set with laughs via Bloofy’s 2025 travel humor. Mishaps and tips get our witty spin for fun!',
            subtopics: {
                'wildest-travel-mishaps-2025': {
                    title: 'Wild Travel Mishaps 2025: Hilarious Adventures and Funny Fails',
                    description: 'Bloofy’s 2025 travel blunders are hilarious. Chuckle at the wildest trip fails with our humor!'
                },
                'smart-travel-gadgets-2025': {
                    title: 'Smart Travel Gear 2025: Funny Gadgets and Travel Jokes',
                    description: 'Bloofy roasts 2025’s smart travel gadgets with humor. Laugh at clever trip tools with our wit!'
                },
                'bizarre-destination-trends-2025': {
                    title: 'Odd Travel Spots 2025: Weird Destinations with a Funny Twist',
                    description: 'Weird 2025 destinations? Bloofy’s hilarious spin on bizarre travel trends will make you laugh!'
                },
                'solo-travel-trends-2025': {
                    title: 'Solo Travel Humor 2025: Funny Stories and Laugh-Out-Loud Moments',
                    description: 'Bloofy’s 2025 solo travel trends are packed with laughs. Chuckle at lone trip tips with us!'
                },
                'eco-travel-blunders-2025': {
                    title: 'Eco-Travel Blunders 2025: Funny Green Travel Fails',
                    description: 'Bloofy’s take on 2025’s eco-travel mishaps will make you laugh. Chuckle at green trip flops!'
                },
                'space-tourism-teasers-2025': {
                    title: 'Space Tourism Teasers 2025: Hilarious Cosmic Jokes',
                    description: 'Bloofy’s funny spin on 2025’s space tourism hype will have you giggling at starry flops!'
                },
                'luxury-train-lunacy-2025': {
                    title: 'Luxury Train Lunacy 2025: Glamour on Rails with a Side of Chaos',
                    description: 'Bloofy chugs through 2025’s luxury train trends with laughs, where opulent rides like the Britannic Explorer deliver scenic splendor and hilarious high-speed hiccups!'
                },
                'cruise-ship-calamities-2025': {
                    title: 'Cruise Ship Calamities 2025: Sea Adventures Turned Comedy Shows',
                    description: 'Bloofy sails into 2025’s cruise trends with humor, where mega-ships like Icon of the Seas offer luxury waves and a surge of onboard blunders for endless giggles!'
                },
                'underground-travel-trends-2025': {
                    title: 'Underground Travel Trends 2025: Hidden Caves and Hilarious Hikes',
                    description: 'Bloofy explores 2025’s subterranean adventures with wit, from Mammoth Cave’s depths to quirky cave hikes that turn spelunking into a laugh-filled labyrinth!'
                },
                'virtual-travel-vibes-2025': {
                    title: 'Virtual Travel Vibes 2025: Explore Worlds Without Leaving Your Couch',
                    description: 'Bloofy teleports into 2025’s VR travel boom with laughs, where immersive headsets let you globe-trot from home—minus the jet lag and with extra digital drama!'
                }
            }
        },
        'food': {
            title: 'Food Humor 2025: Tasty Jokes and Funny Bites on Bloofy',
            description: 'Savor laughs with Bloofy’s 2025 food humor. Recipes and fails get our funny twist for fun!',
            subtopics: {
                'weird-food-trends-2025': {
                    title: 'Wacky Food Trends 2025: Funny Eats and Hilarious Culinary Fails',
                    description: 'Bloofy’s take on 2025’s strangest food trends is hilarious. Chuckle at weird eats with us!'
                },
                'smart-kitchen-gadgets-2025': {
                    title: 'Kitchen Gadget Jokes 2025: Funny Tools and Cooking Laughs',
                    description: 'Bloofy mocks 2025’s smart kitchen tools with wit. Laugh at culinary gadgets with our humor!'
                },
                'viral-food-fails-2025': {
                    title: 'Viral Food Flops 2025: Hilarious Kitchen Fails and Funny Trends',
                    description: 'Bloofy’s 2025 viral food fails are comedy gold. Laugh at kitchen disasters with our wit!'
                },
                'plant-based-food-craze-2025': {
                    title: 'Plant-Based Food 2025: Funny Trends and Hilarious Vegan Moments',
                    description: 'Bloofy’s hilarious twist on 2025’s plant-based food craze will make you laugh. Vegan fun!'
                },
                '3d-printed-food-fiascos-2025': {
                    title: '3D-Printed Food Fiascos 2025: Funny Kitchen Flops',
                    description: 'Bloofy’s take on 2025’s 3D-printed food disasters will make you laugh. Chuckle at culinary chaos!'
                },
                'global-food-fusion-2025': {
                    title: 'Global Food Fusion 2025: Hilarious Culinary Mashups',
                    description: 'Bloofy’s funny spin on 2025’s global food fusion trends will have you giggling at tasty chaos!'
                },
                'insect-cuisine-craze-2025': {
                    title: 'Insect Cuisine Craze 2025: Bug Bites That Buzz with Bold Flavors',
                    description: 'Bloofy dives into 2025’s insect food trend with laughs, where crickets and mealworms spice up plates with protein-packed punches and quirky crunch!'
                },
                'fermented-food-fever-2025': {
                    title: 'Fermented Food Fever 2025: Funky Flavors That’ll Make Your Gut Groan or Growl',
                    description: 'Bloofy ferments 2025’s food scene with humor, where kimchi and kombucha turn meals into tangy tales with a side of gut-busting giggles!'
                },
                'dessert-drone-deliveries-2025': {
                    title: 'Dessert Drone Deliveries 2025: Sweet Treats from the Sky with a Side of Hilarity',
                    description: 'Bloofy flies into 2025’s dessert drone craze with laughs, where chocolate cakes drop from above—sometimes on your roof—with aerial amusement!'
                },
                'molecular-gastronomy-madness-2025': {
                    title: 'Molecular Gastronomy Madness 2025: Science Experiments on Your Plate',
                    description: 'Bloofy cooks up 2025’s molecular food trends with wit, where edible foams and spherified soups turn dining into a lab-coated laugh fest!'
                }
            }
        },
        'fitness': {
            title: 'Fitness Funnies & Workout Laughs on Bloofy 2025',
            description: 'Get fit and giggle with Bloofy’s 2025 fitness humor. Sweat and smile with our witty workout takes!',
            subtopics: {
                'weird-fitness-trends-2025': {
                    title: 'Wacky Fitness Trends 2025: Funny Workouts and Hilarious Health Fads',
                    description: 'Bloofy’s take on 2025’s oddest fitness trends is hilarious. Laugh at quirky workouts with us!'
                },
                'smart-fitness-gadgets-2025': {
                    title: 'Smart Fitness Gear 2025: Funny Gadgets and Workout Laughs',
                    description: 'Bloofy roasts 2025’s smart fitness gadgets with wit. Chuckle at workout tech with our humor!'
                },
                'epic-workout-fails-2025': {
                    title: 'Epic Workout Flops 2025: Hilarious Gym Fails and Fitness Laughs',
                    description: 'Bloofy’s 2025 workout fails are comedy gold. Laugh at gym disasters with our witty spin!'
                },
                'virtual-fitness-challenges-2025': {
                    title: 'Virtual Fitness Challenges for 2025 Laughs',
                    description: 'Bloofy’s hilarious spin on 2025’s virtual fitness challenges will make you sweat and smile!'
                },
                'ai-coach-mishaps-2025': {
                    title: 'AI Coach Mishaps 2025: Funny Fitness Fails',
                    description: 'Bloofy’s take on 2025’s AI fitness coach flops will make you laugh. Chuckle at gym tech chaos!'
                },
                'extreme-fitness-crazes-2025': {
                    title: 'Extreme Fitness Crazes 2025: Hilarious Workout Trends',
                    description: 'Bloofy’s funny spin on 2025’s extreme fitness fads will have you giggling at wild workouts!'
                },
                'home-workout-hacks-2025': {
                    title: 'Couch-to-Crunch Hacks: No-Gym Sweat Sessions',
                    description: 'Bloofy’s hilarious guide to home workout hacks turns your couch into a gym with bands, balls, and epic bloopers. Sweat and smile without leaving home!'
                },
                'mind-body-sync-trends-2025': {
                    title: 'Mind-Bend Workouts: Yoga Meets Mind Games',
                    description: 'Bloofy’s take on mind-body workouts blends yoga with brain teasers for zen chaos. Laugh at VR trances and puzzle poses with us!'
                },
                'recovery-revolution-2025': {
                    title: 'Post-Sweat Revival: Gadgets & Rituals That Heal',
                    description: 'Bloofy’s spin on recovery rituals, from infrared pods to cryo sleeves, makes post-workout pampering a comedic comeback. Heal with a chuckle!'
                },
                'group-fitness-fiascos-2025': {
                    title: 'Classroom Chaos: Group Sweat Gone Wild',
                    description: 'Bloofy’s look at group fitness fiascos, from sweaty Zumba mix-ups to spin-class pileups, brings the laughs to communal sweat sessions!'
                }
            }
        },
        'entertainment': {
            title: 'Entertainment Laughs & Pop Culture Jokes on Bloofy 2025',
            description: 'Dive into 2025’s entertainment chaos with Bloofy’s witty humor. Movies, memes, and more for laughs!',
            subtopics: {
                'bizarre-movie-trends-2025': {
                    title: 'Cinematic Chaos: Bizarre Flicks Flipping the Script',
                    description: 'Bloofy’s take on 2025’s weirdest movie trends is hilarious. Chuckle at cinematic chaos with us!'
                },
                'viral-meme-moments-2025': {
                    title: 'Viral Memes 2025: Funny Trends and Big Laughs Online',
                    description: 'Bloofy’s 2025 viral meme moments are comedy gold. Laugh at internet humor with our wit!'
                },
                'streaming-service-fails-2025': {
                    title: 'Streaming Flops 2025: Hilarious Shows and Funny Fails to Crack You Up',
                    description: 'Bloofy’s hilarious 2025 streaming service fails will make you laugh. Binge with our humor!'
                },
                'ar-gaming-craze-2025': {
                    title: 'AR Gaming Trends 2025: Funny Moments and Hilarious Craze',
                    description: 'Bloofy’s funny spin on 2025’s AR gaming craze will have you laughing. Game on with our wit!'
                },
                'interactive-tv-trends-2025': {
                    title: 'Interactive TV Trends 2025: Funny Shows and Binge Laughs',
                    description: 'Bloofy’s take on 2025’s interactive TV chaos will make you laugh. Chuckle at binge-worthy flops!'
                },
                'celebrity-meme-meltdowns-2025': {
                    title: 'Celebrity Meme Meltdowns 2025: Hilarious Star Flops',
                    description: 'Bloofy’s funny spin on 2025’s celebrity meme meltdowns will have you giggling at viral chaos!'
                },
                'podcast-pandemonium-2025': {
                    title: 'Podcast Pandemonium 2025: Earbud Errors Echoing Worldwide',
                    description: 'Bloofy’s hilarious take on 2025’s podcast blunders will have you giggling. Chuckle at audio mishaps with our wit!'
                },
                'superhero-show-satire-2025': {
                    title: 'Superhero Show Satire 2025: Capes, Kryptonite, and Comic Blunders',
                    description: 'Bloofy mocks 2025’s superhero satires with humor. Giggle at caped chaos and comic flops!'
                },
                'mobile-esports-mayhem-2025': {
                    title: 'Mobile eSports Mayhem 2025: Pocket Battles with Epic Fails',
                    description: 'Bloofy’s funny spin on 2025’s mobile eSports craze will make you laugh. Game on with pocket-sized pandemonium!'
                },
                'concert-lightshow-lunacy-2025': {
                    title: 'Concert Lightshow Lunacy 2025: Visuals That Blind and Amaze',
                    description: 'Bloofy lights up 2025’s concert visual trends with humor. Chuckle at dazzling disasters and stage spectacle fails!'
                }
            }
        },
        'news': {
            title: 'News Nuggets & Breaking Story Chuckles on Bloofy 2025',
            description: 'Dive into 2025’s news chaos with Bloofy’s sharp wit. From blunders to breakthroughs, laugh at the headlines!',
            subtopics: {
                'viral-news-blunders-2025': {
                    title: 'Viral News Blunders 2025: Funny Flops and Hilarious Mishaps',
                    description: 'Bloofy’s take on 2025’s news blunders is comedy gold. Chuckle at broadcast chaos with us!'
                },
                'citizen-journalism-rise-2025': {
                    title: 'Citizen Journalism Rise 2025: Funny Scoops and Viral Stories',
                    description: 'Bloofy’s hilarious spin on 2025’s citizen journalism will make you laugh. Join the news frenzy!'
                },
                'ai-news-anchors-2025': {
                    title: 'AI News Anchors 2025: Funny Glitches and Robotic Laughs',
                    description: 'Bloofy’s take on 2025’s AI news anchors is a riot. Giggle at techy news fails with us!'
                },
                'misinformation-memes-2025': {
                    title: 'Misinformation Memes 2025: Hilarious Fakes and Viral Jokes',
                    description: 'Bloofy’s funny take on 2025’s misinformation memes will have you laughing. Spot the fakes with wit!'
                },
                'hyperlocal-news-trends-2025': {
                    title: 'Hyperlocal News Trends 2025: Funny Local Scoops and Laughs',
                    description: 'Bloofy’s hilarious spin on 2025’s hyperlocal news will keep you chuckling. Stay local with laughs!'
                },
                'ar-news-experiences-2025': {
                    title: 'AR News Experiences 2025: Funny Immersive Stories and Giggles',
                    description: 'Bloofy’s take on 2025’s AR news chaos is a laugh fest. Dive into immersive headlines with us!'
                },
                'google-spam-update-2025': {
                    title: 'Google August 2025 Spam Update: Funny SEO Chaos and Ranking Laughs',
                    description: 'Bloofy’s witty take on Google’s 2025 spam update will make you giggle. Navigate SEO flops with us!'
                },
                'fake-news-fiascos-2025': {
                    title: 'Fake News Fiascos 2025: When Lies Go Viral and Facts Fight Back',
                    description: 'Bloofy’s hilarious spin on 2025’s fake news chaos will have you laughing. Chuckle at misinformation mishaps!'
                },
                'celebrity-news-catastrophes-2025': {
                    title: 'Celebrity News Catastrophes 2025: Scandals That Shake the Spotlight',
                    description: 'Bloofy mocks 2025’s celeb news disasters with wit. Giggle at star-studded slip-ups and scandals!'
                },
                'political-pundit-pranks-2025': {
                    title: 'Political Pundit Pranks 2025: When Analysts Slip on Banana Peels of Bias',
                    description: 'Bloofy’s funny take on 2025’s political pundit fails will make you laugh. Chuckle at biased blunders!'
                }
            }
        },
        'games': {
        title: 'Game Giggles & Playtime Pranks on Bloofy 2025',
        description: 'Level up your laughs with Bloofy’s 2025 game humor. From glitches to bloopers, get ready for epic gaming fun!',
        subtopics: {
            'epic-game-glitches-2025': {
                title: 'Epic Game Glitches 2025: Where Your Avatar Turns Into a Glitchy Dance Party',
                description: 'Bloofy’s take on 2025’s wildest game glitches will have you laughing. Chuckle at virtual chaos!'
            },
            'board-game-comeback-2025': {
                title: 'Board Game Comeback 2025: When Dice Rolls Outdo Digital Wins',
                description: 'Bloofy’s hilarious spin on 2025’s board game revival will make you giggle. Retro fun awaits!'
            },
            'esports-bloopers-2025': {
                title: 'Esports Bloopers 2025: When Pros Yeet Controllers in Epic Fails',
                description: 'Bloofy’s take on 2025’s esports mishaps is comedy gold. Laugh at pro gaming flops!'
            },
            'mobile-game-madness-2025': {
                title: 'Mobile Game Madness 2025: Addictive Apps That Crash Your Life',
                description: 'Bloofy’s funny take on 2025’s mobile game craze will have you laughing. Beware the addiction!'
            },
            'retro-arcade-revival-2025': {
                title: 'Retro Arcade Revival 2025: Where 8-Bit Glitches Steal the Show',
                description: 'Bloofy’s hilarious spin on 2025’s arcade comeback will leave you in stitches. Nostalgia with laughs!'
            },
            'puzzle-game-puzzles-2025': {
                title: 'Puzzle Game Puzzles 2025: Brain-Teasers That Break Your Mind',
                description: 'Bloofy’s take on 2025’s tricky puzzle games will make you chuckle. Test your wits with humor!'
            },
            'co-op-chaos-2025': {
                title: 'Co-op Chaos 2025: When Teamwork Turns Into Friendly Fire Fiascos',
                description: 'Bloofy’s funny spin on 2025’s co-op gaming disasters will have you laughing. Teamwork gone wild!'
            },
            'rpg-roleplay-ridicule-2025': {
                title: 'RPG Roleplay Ridicule 2025: Hilarious Character Choices Gone Wrong',
                description: 'Bloofy’s take on 2025’s RPG roleplay flops is a laugh fest. Giggle at epic character fails!'
            },
            'speedrun-spectacles-2025': {
                title: 'Speedrun Spectacles 2025: Blazing Runs That End in Hilarious Crashes',
                description: 'Bloofy’s hilarious take on 2025’s speedrun chaos will make you laugh. Fast fun with flops!'
            },
            'indie-game-oddities-2025': {
                title: 'Indie Game Oddities 2025: Quirky Titles That Defy Logic',
                description: 'Bloofy’s funny spin on 2025’s indie game weirdness will leave you giggling. Unique laughs await!'
            }
        }
    },
    'shows': {
        title: 'Showtime Snickers & TV Ticklers on Bloofy 2025',
        description: 'Tune into 2025’s show chaos with Bloofy’s witty humor. From reality twists to live TV laughs, get ready to giggle!',
        subtopics: {
            'reality-tv-twists-2025': {
                title: 'Reality TV Twists 2025: Drama So Wild It’ll Make You Question Reality',
                description: 'Bloofy’s take on 2025’s reality TV shocks will have you laughing. Chuckle at unscripted chaos!'
            },
            'streaming-show-fails-2025': {
                title: 'Streaming Show Fails 2025: When Binge-Watching Hits a Plot Hole Trainwreck',
                description: 'Bloofy’s hilarious spin on 2025’s streaming flops will make you laugh. Binge with humor!'
            },
            'talk-show-tumbles-2025': {
                title: 'Talk Show Tumbles 2025: When Hosts Trip Over Their Own Jokes',
                description: 'Bloofy’s take on 2025’s talk show blunders is comedy gold. Giggle at live TV fails!'
            },
            'soap-opera-shocks-2025': {
                title: 'Soap Opera Shocks 2025: Over-the-Top Twists That Defy Gravity',
                description: 'Bloofy’s funny spin on 2025’s soap opera drama will leave you in stitches. Over-the-top laughs!'
            },
            'comedy-special-flops-2025': {
                title: 'Comedy Special Flops 2025: Jokes That Bomb Harder Than a Cartoon Anvil',
                description: 'Bloofy’s take on 2025’s comedy fails will make you chuckle. Laugh at stand-up disasters!'
            },
            'documentary-debacles-2025': {
                title: 'Documentary Debacles 2025: Facts So Weird They Feel Fictional',
                description: 'Bloofy’s hilarious spin on 2025’s docu-drama flops will have you giggling. Weird and wild!'
            },
            'awards-show-awkwardness-2025': {
                title: 'Awards Show Awkwardness 2025: Speeches That Steal the Spotlight',
                description: 'Bloofy’s take on 2025’s awards show gaffes is a laugh fest. Chuckle at celebrity blunders!'
            },
            'animated-series-snafus-2025': {
                title: 'Animated Series Snafus 2025: When Cartoons Go Off the Rails',
                description: 'Bloofy’s funny spin on 2025’s animated flops will make you laugh. Cartoon chaos awaits!'
            },
            'live-tv-laughs-2025': {
                title: 'Live TV Laughs 2025: Unscripted Moments That Crack You Up',
                description: 'Bloofy’s take on 2025’s live TV mishaps will have you giggling. Real-time humor!'
            },
            'scripted-drama-disasters-2025': {
                title: 'Scripted Drama Disasters 2025: Plots So Bad They’re Good',
                description: 'Bloofy’s hilarious spin on 2025’s drama flops will leave you laughing. Bad scripts, big laughs!'
            }
        }
    },
    'viral-memes': {
        title: 'Viral Meme Madness & Internet Laughs on Bloofy 2025',
        description: 'Jump into 2025’s meme mania with Bloofy’s hilarious takes. From cats to chaos, laugh at the web’s wildest!',
        subtopics: {
            'cat-meme-craze-2025': {
                title: 'Cat Meme Craze 2025: Feline Frenzy Takes Over',
                description: 'Bloofy’s funny spin on 2025’s cat meme explosion will have you purring with laughter. Meow at the madness!'
            },
            'dance-challenge-memes-2025': {
                title: 'Dance Challenge Memes 2025: Grooves Gone Wild',
                description: 'Bloofy grooves through 2025’s dance meme chaos with laughs. Chuckle at the wildest moves!'
            },
            'celeb-fail-memes-2025': {
                title: 'Celeb Fail Memes 2025: Stars Stumble into Laughter',
                description: 'Bloofy mocks 2025’s celeb fail memes with wit. Giggle at star-studded slip-ups!'
            },
            'food-fail-memes-2025': {
                title: 'Food Fail Memes 2025: Kitchen Chaos Goes Viral',
                description: 'Bloofy cooks up 2025’s food fail memes with humor. Laugh at culinary catastrophes!'
            },
            'tech-glitch-memes-2025': {
                title: 'Tech Glitch Memes 2025: Gadgets Gone Rogue',
                description: 'Bloofy’s take on 2025’s tech glitch memes is a riot. Chuckle at gadget gaffes!'
            },
            'pet-prank-memes-2025': {
                title: 'Pet Prank Memes 2025: Animals Steal the Show',
                description: 'Bloofy’s funny spin on 2025’s pet prank memes will make you laugh. Woof at the antics!'
            },
            'weather-meme-madness-2025': {
                title: 'Weather Meme Madness 2025: Storms of Humor',
                description: 'Bloofy storms through 2025’s weather memes with laughs. Giggle at nature’s jokes!'
            },
            'gaming-gaffe-memes-2025': {
                title: 'Gaming Gaffe Memes 2025: Epic Fails on Screen',
                description: 'Bloofy’s hilarious take on 2025’s gaming gaffe memes will have you laughing. Game on!'
            },
            'fashion-flop-memes-2025': {
                title: 'Fashion Flop Memes 2025: Runway Rumbles',
                description: 'Bloofy struts through 2025’s fashion flop memes with humor. Chuckle at runway wrecks!'
            },
            'travel-tumble-memes-2025': {
                title: 'Travel Tumble Memes 2025: Vacation Vexations',
                description: 'Bloofy trips into 2025’s travel tumble memes with laughs. Giggle at holiday hilarity!'
            }
        }
    }
    };

    let title = metaData.main.title;
    let description = metaData.main.description;
    let canonicalUrl = 'https://bloofy.net';

    // Check if on about.html
    if (window.location.pathname === '/about') {
        title = metaData.about.title;
        description = metaData.about.description;
        canonicalUrl = 'https://bloofy.net/about';
    } else if (category && metaData[category]) {
        title = metaData[category].title;
        description = metaData[category].description;
        canonicalUrl = `https://bloofy.net/?${category}`;

        if (subcategory && metaData[category].subtopics && metaData[category].subtopics[subcategory]) {
            title = metaData[category].subtopics[subcategory].title;
            description = metaData[category].subtopics[subcategory].description;
            canonicalUrl = `https://bloofy.net/?${category}#${subcategory}`;
        }
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', description);
    } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', description);
        document.head.appendChild(metaDesc);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
    } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonical);
    }
}

function toggleCategory(cat) {
    const subList = document.querySelector(`#cat-${cat} .sub-list`);
    const isHidden = subList.style.display === 'none' || subList.style.display === '';

    document.querySelectorAll('.sub-list').forEach(el => {
        if (el !== subList) {
            el.style.maxHeight = null;
            el.style.display = 'none';
        }
    });

    if (isHidden) {
        subList.style.display = 'block';
        subList.style.maxHeight = '0px';
        requestAnimationFrame(() => {
            subList.style.transition = 'max-height 0.3s ease-in-out';
            subList.style.maxHeight = subList.scrollHeight + 'px';
        });
        history.pushState({ category: cat }, '', `/?${cat}`);
        updateMetaTags(cat);
    } else {
        subList.style.maxHeight = subList.scrollHeight + 'px';
        requestAnimationFrame(() => {
            subList.style.transition = 'max-height 0.3s ease-in-out';
            subList.style.maxHeight = '0px';
            setTimeout(() => {
                subList.style.display = 'none';
                subList.style.maxHeight = null;
                subList.style.transition = null;
            }, 300);
        });
        history.pushState({}, '', '/');
        updateMetaTags();
    }
}

function showPopup(contentId, cat) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const sourceContent = document.getElementById(`content-${contentId}`);

    if (sourceContent) {
        popupContent.innerHTML = sourceContent.innerHTML;
        popup.classList.add('active');
        history.pushState({ category: cat, sub: contentId }, '', `/?${cat}#${contentId}`);
        updateMetaTags(cat, contentId);
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');

    const search = location.search;
    history.pushState({ category: location.search.substring(1) }, '', `${search}`);
    updateMetaTags(location.search.substring(1));
}

window.addEventListener('load', () => {
    const search = location.search.substring(1);
    if (window.location.pathname === '/about') {
        updateMetaTags();
    } else {
        if (search) {
            const subList = document.querySelector(`#cat-${search} .sub-list`);
            if (subList) {
                subList.style.display = 'block';
                subList.style.maxHeight = subList.scrollHeight + 'px';
            }
        }
        if (location.hash) {
            const hash = location.hash.substring(1);
            const cat = location.search.substring(1);
            showPopup(hash, cat);
        } else {
            updateMetaTags();
        }
    }
});

window.addEventListener('popstate', () => {
    const search = location.search.substring(1);
    if (window.location.pathname === '/about.html') {
        updateMetaTags();
    } else {
        document.querySelectorAll('.sub-list').forEach(el => {
            el.style.maxHeight = null;
            el.style.display = 'none';
        });
        if (search) {
            const subList = document.querySelector(`#cat-${search} .sub-list`);
            if (subList) {
                subList.style.display = 'block';
                subList.style.maxHeight = subList.scrollHeight + 'px';
            }
            updateMetaTags(search);
        } else {
            updateMetaTags();
        }
        const popup = document.getElementById('popup');
        if (location.hash) {
            const hash = location.hash.substring(1);
            const cat = location.search.substring(1);
            showPopup(hash, cat);
        } else {
            popup.classList.remove('active');
        }
    }
});