function updateMetaTags(category = '', subcategory = '') {
    const categoryTitles = {
        'technology': 'Tech Laughs',
        'fashion': 'Fashion Funnies',
        'cars': 'Car Comedy',
        'travel': 'Travel Tales',
        'food': 'Happy Meal'
    };
    const subTopics = {
        'technology': {
            'best-specs-of-cellphones-2025': 'Best Cellphone Specs to Laugh About in 2025',
            'smart-home-gadgets-2025': 'Hilarious Smart Home Gadgets for 2025',
            'ai-assistant-fails-2025': 'Funny AI Assistant Fails in 2025',
            'vr-gaming-trends-2025': 'VR Gaming Trends That’ll Make You Laugh in 2025'
        },
        'fashion': {
            'weird-fashion-trends-2025': 'Weird Fashion Trends to Chuckle at in 2025',
            'sustainable-fashion-2025': 'Sustainable Fashion Funnies for 2025',
            'celebrity-style-fails-2025': 'Celebrity Style Fails to Laugh at in 2025',
            'diy-fashion-hacks-2025': 'DIY Fashion Hacks That Are Hilarious in 2025'
        },
        'cars': {
            'funniest-car-fails-2025': 'Funniest Car Fails of 2025',
            'electric-car-innovations-2025': 'Electric Car Innovations to Laugh About in 2025',
            'car-sharing-disasters-2025': 'Car-Sharing Disasters That Are Funny in 2025',
            'autonomous-car-adventures-2025': 'Autonomous Car Adventures for Laughs in 2025'
        },
        'travel': {
            'wildest-travel-mishaps-2025': 'Wildest Travel Mishaps to Laugh at in 2025',
            'smart-travel-gadgets-2025': 'Smart Travel Gadgets That Are Funny in 2025',
            'bizarre-destination-trends-2025': 'Bizarre Destination Trends for 2025',
            'solo-travel-trends-2025': 'Solo Travel Trends to Chuckle at in 2025'
        },
        'food': {
            'weird-food-trends-2025': 'Weird Food Trends to Laugh About in 2025',
            'smart-kitchen-gadgets-2025': 'Smart Kitchen Gadgets for 2025 Funnies',
            'viral-food-fails-2025': 'Viral Food Fails That Are Hilarious in 2025',
            'plant-based-food-craze-2025': 'Plant-Based Food Craze to Laugh at in 2025'
        }
    };

    let title = 'Bloofy - Hilarious Takes';
    let description = 'Explore Bloofy for the funniest insights on various topics. Laugh out loud with our unique humor!';
    let canonicalUrl = 'https://bloofy.net';

    if (category) {
        title = categoryTitles[category] || 'Various Topics';
        description = `Dive into the funniest ${categoryTitles[category] || 'content'} on Bloofy for 2025!`;
        canonicalUrl = `https://bloofy.net/?${category}`;

        if (subcategory && subTopics[category] && subTopics[category][subcategory]) {
            title = subTopics[category][subcategory];
            description = subTopics[category][subcategory];
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