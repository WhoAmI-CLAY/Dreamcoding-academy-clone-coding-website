$(function(){
    $(window).resize(function(){
        let description = document.querySelectorAll('.description')
        if(window.innerWidth < 1200){
            $(description[0]).text("Coupang 크롤링 시스템은 해당 제품의 대한 다양한 리뷰를 주어 동사 명사 형용사.. 등으로 나누어 해당 상품에 대한 정확한 상품평을 제공합니다.")
            $(description[1]).text("네이버 영화 크롤링 시스템은 해당 영화에 대한 다양한 리뷰를 주어 동사 명사 형용사.. 등으로 나누어 해당 영화에 대한 정확한 평가를 제공합니다.")
            $(description[2]).text('다나와 크롤링 시스템은 해당 상품에 대한 리뷰를 주어 동사 명사 형용사.. 등으로 나누어 해당 상품에 대한 정확한 상품평을 제공합니다.')
        }
        if(window.innerWidth >= 1200){
            $(description[0]).text('Coupang 크롤링 시스템은 해당 제품의 대한 다양한 리뷰를 주어 동사 명사 형용사.. 등으로 나누어 해당 상품에 대한 정확한 상품평을 제공...')
            $(description[1]).text("네이버 영화 크롤링 시스템은 해당 영화에 대한 다양한 리뷰를 주어 동사 명사 형용사.. 등으로 나누어 해당 영화에 대한 정확한 평가를 제공...")
            $(description[2]).text('다나와 크롤링 시스템은 해당 상품에 대한 리뷰를 주어 동사 명사 형용사.. 등으로 나누어 해당 상품에 대한 정확한 상품평을 제공...')
        }
    })
})  