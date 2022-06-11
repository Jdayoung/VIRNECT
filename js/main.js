
$(function(){
  /**
 * 상단 gnb 메뉴 구현
 *
 * @version 1.0.0
 * @since 2022-01-16
 * @author dyj
 */
   $('.menu_btn').click(function(e){
    e.preventDefault();
    $('.menu_btn').toggleClass('on')
  })

   $('.dept').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')){
        $('.dept').removeClass('on');
        $('.gnb .sub').removeClass('active');
        $('.sub').stop().slideUp(0);
        // slideUp(); 펼쳐지는 방향 이야기 하는거 아님 방향은 이미 css에서 잡은거임 헷갈리지 말것
        //   .stop() 다른거를 클릭하더라도 현재 슬라이드 된느걸 멈추게 하는거
      }else{
        $('.sub').removeClass('active');
        $(this).siblings('.sub').addClass('active')
        $('.dept').removeClass('on');
        $(this).addClass('on');
        $('.sub').stop().slideUp(0);
        $(this).siblings('.sub').stop().slideDown(0);
    }
})

/////////////////


  //   $('.gnb .dept').click(function (e) {
  //     e.preventDefault();

  //     if ($(this).siblings('.sub').hasClass('active')) { //열려있는경우
  //         $('.gnb .sub').removeClass('active');
  //         $('.gnb .dept').removeClass('on')
  //     } else { //첫클릭
  //         $('.sub').removeClass('active');
  //         $(this).siblings('.sub').addClass('active')
  //         $('.gnb .dept').removeClass('on')
  //         $(this).addClass('on')
  //     }
      
  // })

  /**
 * 상단 util 메뉴 구현
 *
 * @version 1.0.0
 * @since 2022-01-16
 * @author dyj
 */
   $('.util_area .link_btn').click(function (e) {
    e.preventDefault();

    if ($(this).siblings('.sub').hasClass('active')) { //열려있는경우
        $('.util_area .sub').removeClass('active');
    } else { //첫클릭
        $('.util_area .sub').removeClass('active');
        $(this).siblings('.sub').addClass('active')
    }
    
  })

  
      var solution = new Swiper(".sc_solution .swiper", {
        loop: true,
        speed:1000,
        pagination: {
          el: ".sc_solution .swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        on: {
          init:function(){//초기세팅
            // this.activeIndex();
            // alert(this.realIndex); //고유인덱스
            total = $('.sc_solution .swiper-slide').length -2;
            $('.sc_solution .curr').text(this.realIndex+1);
            $('.sc_solution .total').text(total);
          },
          slideChange:function(){
            $('.sc_solution .curr').text(this.realIndex+1);
          }
        }
      });

      // 1.처음키자마자 구해놨어야
      // curr = solution.realiIndex
      // total = $('.sc_solution .swiper-slide').length -2; // 루프때문에 -2를 한것, 루프가 없으면 안해도됨
      // $('.sc_solution .curr').text();
      // $('.sc_solution .total').text(total);
      // 2.슬라이드 이동될때 curr 바껴야함

      var swiper = new Swiper(".introswiper", {
      });
      
      var swiper = new Swiper(".product .swiper", {
        loop : true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 60,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50, //슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐 
          stretch: 0, // 슬라이더간 거리 : 클수록 슬라이더가 서로 겹침
          depth: 100, // 클수록 멀리이는 느낌이 강해짐
          modifier: 1, 
          slideShadows: true,
        },
        pagination: {
          el: ".product .prd_nav",
          clickable: true,
          renderBullet: function (index, className) {
            // return '<span class="' + className + '">' + img + "</span>";
            return '<span class="'+className+'"><img src=\'./images/pro0'+(index+1)+'.png\'></span>'
          },
        },
        
      })
      $('.menu_btn').click(function(e){
        e.preventDefault();
        //
        $('body').toggleClass('hidden');
        $('header .gnb_wrap').toggleClass('on');
      })
      var swiper = new Swiper(".news_content", {
        slidesPerView: 1.4,
        spaceBetween: 15,
      });

      var swiper = new Swiper(".sc_award .award_list", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
})




