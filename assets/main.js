function updateMetaTags(category = '', subcategory = '') {
    const metaData = {
        'main': {
            title: 'Bloofy: Hilarious Takes on Tech, Fashion & More in 2025',
            description: 'Laugh out loud with Bloofy’s witty 2025 takes on tech, fashion, cars, travel, and food. Discover humor like never before!'
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
                    title: 'Smart Home Gear Laughs for 2025 Fun',
                    description: 'Explore 2025’s quirky smart home gadgets with Bloofy’s side-splitting humor. Get ready for techy laughs!'
                },
                'ai-assistant-fails-2025': {
                    title: 'AI Assistant Blunders to Laugh at in 2025',
                    description: 'Bloofy’s got the funniest 2025 AI assistant fails. Chuckle at tech gone wrong with our witty insights!'
                },
                'vr-gaming-trends-2025': {
                    title: 'VR Gaming Trends 2025: Hilarious Future of Play',
                    description: 'Dive into 2025’s VR gaming trends with Bloofy’s hilarious spin. Laugh at the future of gaming with us!'
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
                    title: 'Green Fashion Jokes for 2025 Chuckles',
                    description: 'Eco-fashion gets a funny twist with Bloofy’s 2025 sustainable style quips. Laugh at green trends now!'
                },
                'celebrity-style-fails-2025': {
                    title: 'Celeb Fashion Flops to Giggle at in 2025',
                    description: 'Bloofy’s witty take on 2025’s celebrity style fails will have you laughing. Star-studded humor awaits!'
                },
                'diy-fashion-hacks-2025': {
                    title: 'DIY Fashion Hacks for 2025 Laughs',
                    description: 'Bloofy’s 2025 DIY fashion hacks are packed with humor. Laugh at clever style tips with our wit!'
                }
            }
        },
        'cars': {
            title: 'Car Comedy & Auto Jokes on Bloofy 2025',
            description: 'Rev up for laughs with Bloofy’s 2025 car humor. From fails to innovations, our witty takes deliver!',
            subtopics: {
                'funniest-car-fails-2025': {
                    title: 'Funniest 2025 Car Fails to Crack You Up',
                    description: 'Bloofy’s take on 2025’s epic car fails will leave you in stitches. Laugh at auto mishaps with us!'
                },
                'electric-car-innovations-2025': {
                    title: 'Electric Car Jokes for 2025 Fun',
                    description: 'Bloofy’s hilarious 2025 electric car innovations will spark laughs. Charge up for auto humor now!'
                },
                'car-sharing-disasters-2025': {
                    title: 'Car-Sharing Fiascos to Laugh at in 2025',
                    description: 'Bloofy’s 2025 car-sharing disasters are comedy gold. Chuckle at ride-share fails with our wit!'
                },
                'autonomous-car-adventures-2025': {
                    title: 'Self-Driving Car Laughs for 2025',
                    description: 'Autonomous cars in 2025? Bloofy’s funny take on self-driving adventures will make you laugh!'
                }
            }
        },
        'travel': {
            title: 'Travel Humor & Trip Tales on Bloofy 2025',
            description: 'Jet-set with laughs via Bloofy’s 2025 travel humor. Mishaps and tips get our witty spin for fun!',
            subtopics: {
                'wildest-travel-mishaps-2025': {
                    title: 'Wild 2025 Travel Mishaps to Laugh About',
                    description: 'Bloofy’s 2025 travel blunders are hilarious. Chuckle at the wildest trip fails with our humor!'
                },
                'smart-travel-gadgets-2025': {
                    title: 'Smart Travel Gear Jokes for 2025',
                    description: 'Bloofy roasts 2025’s smart travel gadgets with humor. Laugh at clever trip tools with our wit!'
                },
                'bizarre-destination-trends-2025': {
                    title: 'Odd 2025 Travel Spots for Chuckles',
                    description: 'Weird 2025 destinations? Bloofy’s hilarious spin on bizarre travel trends will make you laugh!'
                },
                'solo-travel-trends-2025': {
                    title: 'Solo Travel Humor for 2025 Fun',
                    description: 'Bloofy’s 2025 solo travel trends are packed with laughs. Chuckle at lone trip tips with us!'
                }
            }
        },
        'food': {
            title: 'Food Humor & Tasty Jokes on Bloofy 2025',
            description: 'Savor laughs with Bloofy’s 2025 food humor. Recipes and fails get our funny twist for fun!',
            subtopics: {
                'weird-food-trends-2025': {
                    title: 'Wacky 2025 Food Trends to Laugh At',
                    description: 'Bloofy’s take on 2025’s strangest food trends is hilarious. Chuckle at weird eats with us!'
                },
                'smart-kitchen-gadgets-2025': {
                    title: 'Kitchen Gadget Jokes for 2025 Fun',
                    description: 'Bloofy mocks 2025’s smart kitchen tools with wit. Laugh at culinary gadgets with our humor!'
                },
                'viral-food-fails-2025': {
                    title: 'Viral 2025 Food Flops to Crack Up',
                    description: 'Bloofy’s 2025 viral food fails are comedy gold. Laugh at kitchen disasters with our wit!'
                },
                'plant-based-food-craze-2025': {
                    title: 'Plant-Based Food Fun for 2025',
                    description: 'Bloofy’s hilarious twist on 2025’s plant-based food craze will make you laugh. Vegan fun!'
                }
            }
        }
    };

    let title = metaData.main.title;
    let description = metaData.main.description;
    let canonicalUrl = 'https://bloofy.net';

    if (category && metaData[category]) {
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
});

window.addEventListener('popstate', () => {
    const search = location.search.substring(1);
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
});