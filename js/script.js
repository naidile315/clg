const button = document.getElementById('changeColorBtn');

const themes = [
    {
        body: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        header: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        nav: 'rgba(255,255,255,0.95)',
        navLinkColor: '#667eea',
        titleColor: '#ffffff',
        button: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        profileBorder: '#667eea',
        nameColor: '#667eea',
        tableHeader: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        body: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)',
        header: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)',
        nav: 'rgba(255,255,255,0.95)',
        navLinkColor: '#d94f6a',
        titleColor: '#5b1f2b',
        button: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)',
        profileBorder: '#d94f6a',
        nameColor: '#d94f6a',
        tableHeader: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)'
    },
    {
        body: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        header: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        nav: 'rgba(255,255,255,0.95)',
        navLinkColor: '#7a4d9a',
        titleColor: '#3b1f3a',
        button: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        profileBorder: '#7a4d9a',
        nameColor: '#7a4d9a',
        tableHeader: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    },
    {
        body: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        header: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        nav: 'rgba(255,255,255,0.95)',
        navLinkColor: '#185a9d',
        titleColor: '#ffffff',
        button: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        profileBorder: '#43cea2',
        nameColor: '#43cea2',
        tableHeader: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)'
    },
    {
        body: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        header: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        nav: 'rgba(255,255,255,0.95)',
        navLinkColor: '#c56a2d',
        titleColor: '#4b2b0a',
        button: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        profileBorder: '#c56a2d',
        nameColor: '#c56a2d',
        tableHeader: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    },
    {
        body: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        header: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        nav: 'rgba(255,255,255,0.95)',
        navLinkColor: '#30cfd0',
        titleColor: '#ffffff',
        button: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        profileBorder: '#30cfd0',
        nameColor: '#30cfd0',
        tableHeader: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
];

let current = -1;

function applyTheme(theme){
    if(!theme) return;
    // body
    document.body.style.background = theme.body || '';

    // header
    const header = document.querySelector('header');
    if(header) header.style.background = theme.header || theme.body;

    // nav
    const nav = document.querySelector('nav');
    if(nav) nav.style.background = theme.nav || 'rgba(255,255,255,0.95)';

    // nav links
    document.querySelectorAll('nav a').forEach(a => {
        a.style.color = theme.navLinkColor || '';
    });

    // title color
    const title = document.querySelector('.title');
    if(title) title.style.color = theme.titleColor || '';

    // button
    const btn = document.getElementById('changeColorBtn');
    if(btn) btn.style.background = theme.button || theme.body;

    // profile picture border
    const profileImg = document.querySelector('.profile-img');
    if(profileImg) profileImg.style.borderColor = theme.profileBorder || '#667eea';

    // name (bold text in .home)
    document.querySelectorAll('.home b').forEach(el => {
        el.style.color = theme.nameColor || '';
    });

    // table headers
    document.querySelectorAll('table th').forEach(el => {
        el.style.background = theme.tableHeader || theme.header || '';
    });
}

if (button) {
    button.addEventListener('click', () => {
        current = (current + 1) % themes.length;
        applyTheme(themes[current]);
        try{ localStorage.setItem('siteThemeIndex', String(current)); }catch(e){}
    });
    // restore saved theme (if any)
    try{
        const saved = localStorage.getItem('siteThemeIndex');
        if(saved !== null){
            const idx = parseInt(saved, 10);
            if(!isNaN(idx) && idx >= 0 && idx < themes.length){
                current = idx;
                applyTheme(themes[current]);
            }
        }
    }catch(e){}
} else {
    console.warn('Button with id "changeColorBtn" not found.');
}