const btn = document.querySelector('.share');
const avatar = document.querySelector('.info');
const smContainer = document.querySelector('.sm-container');
const arrow = document.querySelector('.arrow')
const btn2 = document.querySelector('.btn2')

setShareLinks();

function socialWindowScreen(url) {

    var left = (screen.width - 570)/2;
    var top = (screen.height - 570)/2;

    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top="+top + ",left=" + left;

    window.open(url,"NewWindow",params);
}

function  setShareLinks() {


    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));


    $(".fb").on("click",function () {
        url = "https://www.facebook.com/sharer.php?u=https://curious-kataifi-97a9bc.netlify.app/";
        socialWindowScreen(url);
    })
    $(".tweet").on("click",function () {
        url = "https://www.twitter.com/intent/tweet?url=" +pageUrl + "&text=" +tweet;
        socialWindowScreen(url);
    })
    $(".pint").on("click",function () {
        url = "https://www.pinterest.com/shareArticle?mini=true&url=" +pageUrl;
        socialWindowScreen(url);
    })
   }


const tl = gsap.timeline()
tl
.from('.img-container', {duration: '1.5', opacity: 0})
.from('.wrapper2',{duration: '2', y: '-100%', opacity: 0, ease: 'bounce'
});

btn.addEventListener('click', () =>{
avatar.classList.add('hide-info');
smContainer.classList.remove('show-sm');
gsap.from('.sm-container', { duration: .5, x: '-100%', ease: 'power1'});
});


arrow.addEventListener('click', () =>{
avatar.classList.remove('hide-info');
smContainer.classList.add('show-sm');
gsap.from('.info', { duration: .5, x: '-100%', ease: 'power1'});
    });

    btn2.addEventListener('click',() =>{
        smContainer.classList.toggle('show-sm');
    });
   