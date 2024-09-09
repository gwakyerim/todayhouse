$(function() {
  /* Include html Files */
  $('.gnb-include').load('../include/gnb.html');
  $('.main-header-include').load('../include/main-header.html');
  $('.goods-detail-header-include').load('../include/goods-detail-header.html');

  /* Category Accordian */
  $('.category-accodian .detail').eq(0).show()
  $('.category-accodian .title').click(function(){
    $(this).siblings('.category-accodian .title').next().stop().slideUp()
    $(this).next().stop().slideDown()

    $(this).addClass('active')
    $(this).siblings('.category-accodian .title').removeClass('active')
  })

  /* Recent Search Result */
  $('.search-recent .btn-clear').click(function(){
    $(this).parent().hide()
  })
  $('.search-recent .btn-all-clear').click(function(){
    $('.search-recent .item').hide()
  })

  // /* Cart Items */
  // $('.cart-content .btn-all-clear').click(function(){
  //   $('.cart-content .cart-items').hide()
  // })
  // $('.cart-content .btn-clear').click(function(){
  //   $(this).parent().parent().hide()
  // })

  /* Cart Item Empty */
  $('.cart-content .btn-clear').click(function(){
    $(this).parent().parent().remove();
    if($('.cart-item').length == 0) {
      $('.cart-item-empty').show()
      $('.cart-items-check-all').hide()
      $('.cart-items-summary').hide()
      $('.btn-primary.btn-order').hide()
    }
  })
  $('.cart-content .btn-all-clear').click(function(){
    $('.cart-item').remove();
    if($('.cart-item').length == 0) {
      $('.cart-item-empty').show()
      $('.cart-items-check-all').hide()
      $('.cart-items-summary').hide()
      $('.btn-primary.btn-order').hide()
    }
  })

  /* Cart check All */
  $('.cart-check-all').click(function(){
    $('.cart-check').prop('checked',this.checked);
  })
  /* Front slider */
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  /* Goods Suggestion slider */
  $('.goods-suggestion-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    slidesToScroll: 2
  })

  /* Front-footer */
  $('.btn-view-more').click(function(){
    $('.company-info-more').show()
  })
  
  /* Main tab Item */
  $('.wish').click(function(){
    $(this).toggleClass('active')
  })

  /* Goods Detail slider */
  $('.goods-detail-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    slidesToScroll: 1
  })

  /* Goods Accodion */
  $('.goods-accordion .title').click(function(){
    $(this).next().toggle()
    $(this).toggleClass('active')
    $(this).siblings('.goods-accordion .title').
    removeClass('active')
  })

  /* Goods Order Info */
  $('.btn-order-choice').click(function(){
    $('.goods-order-choice').hide()
    $('.goods-order-final').slideDown(250)
    $('.overlay-fold').show();
  })
  $('.btn-fold, .overlay-fold').click(function(){
      $('.goods-order-choice').show()
      $('.goods-order-final').slideUp(250)
      $('.overlay-fold').hide();
  })
})