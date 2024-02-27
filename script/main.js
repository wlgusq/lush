


    $(document).ready(function(){

          // 헤더 조절
    // $(window).mousewheel(function(e,delta){
    //   if(delta>0){
    //     // console.log('위');
    //     $('header').addClass('scroll');
    //   }else if(delta<0){
    //     // console.log('아래');
    //     $('header').removeClass('scroll');
    //   }
    // });


    

      // 메뉴 마우스 오버
      $('.gnb').mouseenter(function(){
        $('.h_wrap').stop().animate({'height':'340px'},500);
        $('header').css('background','#222');
        // alert('dkdk');
      });

      $('.gnb').mouseleave(function(){
        $('.h_wrap').stop().animate({'height':'60px'},500);
        $('header').css('background','none');
        // alert('dkdk');
      });



    // 모바일 메뉴
    const toggle = $('.fa-bars');
    const toggle2 = $('.mnu_c_btn');

    toggle.click(function(){
      $('nav').fadeIn();
    });
    toggle2.click(function(){
      $('nav').fadeOut();
    });



    // 서브
    const mnu = $('.gnb > li > a');
    const ca = $('.fa-caret-down')

    mnu.click(function(){
      $('.sub').slideUp();
      $(this).next().slideToggle();
      $(ca).removeClass('m_mnu_act');
      $(ca).css('transform','translateY(-50px)')
      $(this).find(ca).addClass('m_mnu_act');
    });

    



      // 시그니처
      const s_btn = $('#sleepy');
      const rj_btn = $('#rosejam');
      const p_btn = $('#pansy');
      const d_btn = $('#dirty');

      s_btn.click(function(){
        $('.sleepy').fadeIn();
        $('.rose,.pansy,.dirty').fadeOut();
      });
      rj_btn.click(function(){
        $('.rose').fadeIn();
        $('.sleepy,.pansy,.dirty').fadeOut();
      });
      p_btn.click(function(){
        $('.pansy').fadeIn();
        $('.sleepy,.rose,.dirty').fadeOut();
      });
      d_btn.click(function(){
        $('.dirty').fadeIn();
        $('.sleepy,.rose,.pansy').fadeOut();
      });

      $('.sig_btn li a').click(function(){
        $('.sig_btn li a').removeClass('act');
        $(this).addClass('act');
      });







    // 배쓰밤 슬라이드
    let j = 0;
    const le_btn = $('.l_btn');
    const ri_btn = $('.r_btn');
    
  ri_btn.click(function(){
  // i = $(this).index();
    
    if(j==3){
      j=0;
    }else{
    j++
    };
  console.log(j);
  
  $('.bath ul').animate({
    'left':-(370*j)
  },500);
  });
    
  le_btn.click(function(){
          
    if(j==0){
      j=3;
    }else{
      j--
    };
    console.log(j);
    
    $('.bath ul').animate({
      'right':(370*j)
    },500);
  });


    // 베스트셀러 슬라이드
    let i = 0;
    const l_btn = $('.le_btn');
    const r_btn = $('.ri_btn');
  
    r_btn.click(function(){
      // i = $(this).index();
  
      if(i==3){
        i=0;
      }else{
        i++
      };
      console.log(i);
  
      $('.best ul').animate({
        'left':-(370*i)
      },500);
    });
  
    l_btn.click(function(){
      
      if(i==0){
        i=3;
      }else{
        i--
      };
      console.log(i);
  
      $('.best ul').animate({
        'right':(370*i)
      },500);
    });






// qr코드
      const q_btn = $('#qr_btn');
      const c_btn = $('.qr > i');

      q_btn.mouseenter(function(){
        $('.qr_box').fadeIn();
      });

      c_btn.click(function(){
        $('.qr_box').fadeOut();
      });


// footer address
    const ad_btn = $('.ad_btn');

    ad_btn.click(function(){
      $('address').slideToggle();
    });

    



    });


