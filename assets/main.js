function updateMetaTags(category = '', subcategory = '') {
    const metaData = {
        'main': {
            title: 'Bloofy: Laugh-Out-Loud Humor & Wit',
            description: 'Discover Bloofy’s hilarious takes on tech, fashion, cars, travel, and food. Get ready to laugh in 2025!'
        },
        'technology': {
            title: 'Tech Humor on Bloofy',
            description: 'Giggle at the latest tech trends and gadgets with Bloofy’s witty 2025 insights.',
            subtopics: {
                'best-specs-of-cellphones-2025': {
                    title: 'Top Cellphone Specs 2025',
                    description: 'Laugh at 2025’s wildest cellphone specs with Bloofy’s funny take.'
                },
                'smart-home-gadgets-2025': {
                    title: 'Smart Home Giggles 2025',
                    description: 'Explore 2025’s quirky smart home gadgets with Bloofy’s humor.'
                },
                'ai-assistant-fails-2025': {
                    title: 'AI Fails to Crack You Up',
                    description: 'Chuckling at AI assistant blunders? Bloofy’s got the best for 2025!'
                },
                'vr-gaming-trends-2025': {
                    title: 'VR Gaming Laughs 2025',
                    description: 'Dive into 2025 VR gaming trends with Bloofy’s hilarious spin.'
                }
            }
        },
        'fashion': {
            title: 'Fashion Funnies on Bloofy',
            description: 'Stay stylish and amused with Bloofy’s 2025 fashion humor.',
            subtopics: {
                'weird-fashion-trends-2025': {
                    title: 'Odd Fashion Trends 2025',
                    description: 'Weird 2025 fashion trends? Bloofy makes them hilarious!'
                },
                'sustainable-fashion-2025': {
                    title: 'Green Fashion Jokes 2025',
                    description: 'Eco-fashion gets funny with Bloofy’s 2025 sustainable style quips.'
                },
                'celebrity-style-fails-2025': {
                    title: 'Celeb Style Mishaps 2025',
                    description: 'Laugh at 2025’s celebrity fashion flops with Bloofy’s wit.'
                },
                'diy-fashion-hacks-2025': {
                    title: 'DIY Fashion Humor 2025',
                    description: 'Clever 2025 DIY fashion hacks, served with Bloofy’s humor.'
                }
            }
        },
        'cars': {
            title: 'Car Comedy with Bloofy',
            description: 'Rev up for laughs with Bloofy’s 2025 car humor and stories.',
            subtopics: {
                'funniest-car-fails-2025': {
                    title: 'Epic Car Fails 2025',
                    description: 'Bloofy’s take on 2025’s funniest car mishaps will leave you in stitches.'
                },
                'electric-car-innovations-2025': {
                    title: 'Electric Car Chuckles 2025',
                    description: '2025 electric car innovations, hilariously reviewed by Bloofy.'
                },
                'car-sharing-disasters-2025': {
                    title: 'Car-Sharing Fiascos 2025',
                    description: 'Car-sharing gone wrong? Bloofy’s 2025 tales are a riot!'
                },
                'autonomous-car-adventures-2025': {
                    title: 'Self-Driving Car Laughs',
                    description: 'Autonomous cars in 2025 get Bloofy’s funny treatment.'
                }
            }
        },
        'travel': {
            title: 'Travel Tales on Bloofy',
            description: 'Jet-set with laughs via Bloofy’s 2025 travel humor and tips.',
            subtopics: {
                'wildest-travel-mishaps-2025': {
                    title: 'Crazy Travel Mishaps 2025',
                    description: 'Bloofy shares 2025’s wildest travel blunders for big laughs.'
                },
                'smart-travel-gadgets-2025': {
                    title: 'Travel Gadget Giggles',
                    description: '2025’s smart travel gear, roasted by Bloofy’s humor.'
                },
                'bizarre-destination-trends-2025': {
                    title: 'Odd Destinations 2025',
                    description: 'Weird 2025 travel spots get Bloofy’s hilarious spin.'
                },
                'solo-travel-trends-2025': {
                    title: 'Solo Travel Humor 2025',
                    description: 'Solo travel in 2025? Bloofy’s got the funniest tips.'
                }
            }
        },
        'food': {
            title: 'Food Funnies on Bloofy',
            description: 'Savor the laughs with Bloofy’s 2025 food humor and recipes.',
            subtopics: {
                'weird-food-trends-2025': {
                    title: 'Wacky Food Trends 2025',
                    description: 'Bloofy dives into 2025’s strangest food trends with humor.'
                },
                'smart-kitchen-gadgets-2025': {
                    title: 'Kitchen Gadget Laughs',
                    description: '2025’s smart kitchen tools, mocked by Bloofy’s wit.'
                },
                'viral-food-fails-2025': {
                    title: 'Viral Food Flops 2025',
                    description: 'Bloofy’s take on 2025’s viral food fails is pure comedy.'
                },
                'plant-based-food-craze-2025': {
                    title: 'Plant-Based Food Fun',
                    description: '2025’s plant-based craze gets Bloofy’s hilarious twist.'
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