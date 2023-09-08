$(function () {

    $('.main_content').fullpage({
        anchors: ['main', 'sub01', 'sub02', 'sub03', 'sub04', 'sub05', 'sub06', 'sub07'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        scrollOverflow: true,
        // easing: 'easeOutBounce',
        //easingCss3: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        afterRender: function () {
            $('.main_content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.main_content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

        }
    });

});

//gsap
// gsap.from('.main .m_con .pf_list .pf01', {
//     x: -2000,
//     y: 2,
//     // rotation: 360,
//     duration: 2
// });


const PF_LIST = gsap.utils.toArray('.pf_list figure');
console.log(PF_LIST);


PF_LIST.forEach((el, idx) => {
    gsap.from(el, {
        x: -2000,
        delay: 0.3 * idx,
        //y: 2,
        rotation: 15,
        duration: 1
    });
});

