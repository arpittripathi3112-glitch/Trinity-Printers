/* ===== EDIT HERE: your WhatsApp number (country code, no + or spaces) ===== */
var WA="919650229073";

/* ===== EDIT HERE: your products. Prices below are SAMPLES, replace with your real approximate prices ===== */
var PRODUCTS=[
{n:"Visiting cards",img:"visiting-cards.jpg",from:"from \u20B9250 per 100",d:"Sharp, durable cards in matte, glossy or textured finishes. Single or double side.",o:[["Standard matte (100 pcs)","\u20B9250"],["Glossy laminated (100 pcs)","\u20B9350"],["Premium textured (100 pcs)","\u20B9600"]]},
{n:"Flex banners",img:"flex-banners.jpg",from:"from \u20B912 per sq ft",d:"Weatherproof large-format banners for shops, events and offers, with eyelets or frames.",o:[["Standard flex (per sq ft)","\u20B912"],["Star flex (per sq ft)","\u20B918"],["Vinyl (per sq ft)","\u20B930"]]},
{n:"Brochures and flyers",img:"brochures.jpg",from:"from \u20B95 per piece",d:"Full-colour flyers and folded brochures on quality paper.",o:[["A5 flyer, 1000 pcs","\u20B95 each"],["A4 flyer, 1000 pcs","\u20B98 each"],["Tri-fold brochure, 500 pcs","\u20B915 each"]]},
{n:"Stickers and labels",img:"stickers.jpg",from:"from \u20B92 per sticker",d:"Product labels and packaging stickers, in rolls or sheets, cut to any shape.",o:[["Paper sticker, 1000 pcs","\u20B92 each"],["Waterproof vinyl, 1000 pcs","\u20B94 each"],["Custom die-cut","On request"]]},
{n:"Invitations",img:"invitations.jpg",from:"from \u20B920 per card",d:"Wedding, birthday and function cards with design help and a choice of paper and finish.",o:[["Simple card, 100 pcs","\u20B920 each"],["Premium card, 100 pcs","\u20B945 each"],["Wedding box set","On request"]]},
{n:"Bill books and letterheads",img:"bill-books.jpg",from:"from \u20B9150 per book",d:"Bill books, letterheads and envelopes with your business name and logo.",o:[["Bill book (duplicate)","\u20B9150"],["Letterhead, 500 pcs","\u20B9900"],["Envelopes, 500 pcs","\u20B9800"]]}
];

function ph(src,label){return '<div class="ph" data-label="'+label+'"><img src="images/'+src+'" alt="'+label+'" loading="lazy" onerror="this.remove()"></div>'}
function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
var page=location.pathname.split("/").pop()||"index.html";
var links=[["index.html","Home"],["services.html","Services"],["why-trinity.html","Why Trinity"],["about.html","About"],["contact.html","Contact"]];
document.getElementById("hdr").innerHTML='<header><div class="wrap"><a class="brand" href="index.html"><img src="logo.png" alt="Trinity Printers logo"><span>Trinity <em>Printers</em></span></a><nav aria-label="Main">'+links.map(function(l){return '<a href="'+l[0]+'"'+(l[0]==page?' class="on"':'')+'>'+l[1]+'</a>'}).join("")+'</nav></div></header>';
document.getElementById("ftr").innerHTML='<footer><div class="wrap">&copy; '+new Date().getFullYear()+' <b>Trinity Printers</b>. Since 1999. A complete quality printing.<br>D-12B Sitapuri Part 1, New Delhi - 110045</div></footer>';

var g=document.getElementById("grid");
if(g){
g.innerHTML=PRODUCTS.map(function(p,i){return '<button class="card" data-i="'+i+'">'+ph(p.img,p.n)+'<b>'+p.n+'</b><span>'+p.from+'</span></button>'}).join("");
var dlg=document.getElementById("dlg");
g.addEventListener("click",function(e){
var b=e.target.closest(".card");if(!b)return;
var p=PRODUCTS[b.dataset.i];
dlg.innerHTML='<div class="dl"><button class="x" aria-label="Close">&times;</button>'+ph(p.img,p.n)+'<h2>'+p.n+'</h2><p>'+p.d+'</p><table>'+p.o.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>'}).join("")+'</table><p class="note">Approximate prices. Final price depends on design, quantity, size and paper.</p><a class="btn gold" target="_blank" rel="noopener" href="'+wa("Hi Trinity Printers, I'd like to enquire about: "+p.n)+'">Enquire on WhatsApp</a></div>';
dlg.showModal();
});
dlg.addEventListener("click",function(e){if(e.target===dlg||e.target.classList.contains("x"))dlg.close()});
}

var f=document.getElementById("qf");
if(f)f.addEventListener("submit",function(e){
e.preventDefault();
var v=function(i){return document.getElementById(i).value.trim()};
window.open(wa("Hi Trinity Printers, I'd like a quote.\nName: "+v("n")+"\nPhone: "+v("p")+"\nItem: "+v("t")+"\nQuantity: "+(v("q")||"-")+"\nDetails: "+(v("d")||"-")),"_blank");
});
