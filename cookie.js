document.addEventListener("DOMContentLoaded", function() {
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t);
        a=e.getElementsByTagName(t)[0];
        k.async=1;
        k.src=r;
        if (a && a.parentNode) {
            a.parentNode.insertBefore(k,a);
        } else {
            e.head.appendChild(k);
        }
    })(window, document,'script','https://yandex.ru', 'ym');

    ym(112867009, 'init', {
        ssr: true, 
        webvisor: true, 
        clickmap: true, 
        ecommerce: "dataLayer", 
        referrer: document.referrer, 
        url: location.href, 
        accurateTrackBounce: true, 
        trackLinks: true
    });

    var noscript = document.createElement('noscript');
    noscript.innerHTML = '<div><img src="https://yandex.ru" style="position:absolute; left:-9999px;" alt="" /></div>';
    document.body.appendChild(noscript);

    if (!localStorage.getItem("cookie_accepted")) {
        var style = document.createElement('style');
        style.innerHTML = `
            .cookie-banner { position: fixed; bottom: 140px; left: 50%; transform: translateX(-50%); width: calc(100% - 80px); max-width: 600px; background: #ffffff; border: 4px solid #000000; box-shadow: 0 0 0 4px #ffffff, 0 15px 30px rgba(0,0,0,0.15); padding: 15px 25px; box-sizing: border-box; display: flex; justify-content: space-between; align-items: center; gap: 20px; z-index: 100; }
            .cookie-text { font-family: 'Press Start 2P', monospace; font-size: 10px; line-height: 1.5; color: #000000; margin: 0; text-transform: uppercase; }
            .cookie-text a { color: #000000; text-decoration: underline; }
            .cookie-btn { background: #000000; color: #ffffff; border: none; padding: 8px 16px; font-family: 'Press Start 2P', monospace; font-size: 11px; font-weight: 700; cursor: pointer; border-radius: 2px; transition: background-color 0.2s; }
            .cookie-btn:hover { background: #333333; }
            @media (max-width: 768px) {
                .cookie-banner { bottom: 85px; width: calc(100% - 40px); flex-direction: column; text-align: center; gap: 15px; padding: 15px; }
                .cookie-text { font-size: 9px; }
                .cookie-btn { width: 100%; padding: 10px; }
            }
        `;
        document.head.appendChild(style);

        var banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.id = 'cookieBanner';
        banner.innerHTML = `
            <p class="cookie-text">МЫ ИСПОЛЬЗУЕМ COOKIE ДЛЯ АНАЛИТИКИ И РЕКЛАМЫ. ОСТАВАЯСЬ НА САЙТЕ, ВЫ СОГЛАШАЕТЕСЬ С <a href="/privacy/">ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</a>.</p>
            <button class="cookie-btn" onclick="acceptCookies()">ОК</button>
        `;
        document.body.appendChild(banner);

        window.acceptCookies = function() {
            localStorage.setItem("cookie_accepted", "true");
            document.getElementById("cookieBanner").style.display = "none";
        };
    }
});
