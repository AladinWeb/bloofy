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
            'gadgets': 'Hilarious Gadget Reviews for 2025',
            'software': 'Funny Software Insights for 2025',
            'ai': 'Laugh at AI Developments for 2025'
        },
        'fashion': {
            'trends': 'Funny Fashion Trends for 2025',
            'accessories': 'Hilarious Accessory Tips for 2025',
            'designer': 'Laugh at Designer Fashion for 2025'
        },
        'cars': {
            'sports': 'Funny Sports Car Stories for 2025',
            'electric': 'Hilarious Electric Car Insights for 2025',
            'vintage': 'Laugh at Vintage Cars for 2025'
        },
        'travel': {
            'destinations': 'Funny Travel Destinations for 2025',
            'tips': 'Hilarious Travel Tips for 2025',
            'adventures': 'Laugh at Travel Adventures for 2025'
        },
        'food': {
            'recipes': 'Funny Food Recipes for 2025',
            'restaurants': 'Hilarious Restaurant Reviews for 2025',
            'cooking': 'Laugh at Cooking Mishaps for 2025'
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