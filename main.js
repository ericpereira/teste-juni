function closeFooter() {
	$('#footer-cart-custom').remove()	
}

function addProduct(){
	$('#container-button-sacola').html('O produto foi adicionado à sacola')
}

function createFooterCart(){
	const price = parseFloat($('.skuBestPrice').html().substr(3).replace('.','').replace(',','.'))
	const priceWithDiscount = price - price*0.1
	const productName = $('.productName').html()

	let htmlData = "<div id='footer-cart-custom' style='border-top: 1px solid #cecece; display: flex; flex-direction: row; align-items: center; flex-wrap: wrap; width: 100%; background-color: #fff; position: fixed; bottom: 0; z-index: 999; padding: 15px;'>"
	+"<i class='icon icon-close' style='position: absolute; right: 20px; top: 20px; font-size: 12pt; font-weight: 800; cursor: pointer;' onClick='closeFooter()'></i>"
	+"<div style='flex: 3;'>"
		+"<img style='height: 115px; float: left; margin-right: 10px;' src='"+$('.product__image').attr('src')+"'>"
		+"<div style='padding-top: 15px;'>"
			+"<h1 style='font-size: 14pt; margin-bottom: 5px;'>"+productName+"</h1>"
			+"<p style='font-size: 12pt;'><b>Preço: R$ "+price.toFixed(2).toString().replace('.',',')+"</b></p>"
			+"<p style='font-size: 12pt;'><b>Preço com desconto: R$ "+priceWithDiscount.toFixed(2).toString().replace('.',',')+"</b></p>"
		+"</div>"
	+"</div>"
	+"<div id='container-button-sacola' style='flex: 1;'>"
		+"<button style='padding: 20px 116px; background-color: #000; color: #fff;' onClick='addProduct()'>ADICIONAR À SACOLA</button>"
	+"</div>"
	+"<div></div>"
	+"</div>";

	$('body').append(htmlData)
}

$('.product__add-to-cart').on('click', function(){
	createFooterCart()
})




