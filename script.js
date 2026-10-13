/* ===== EDIT HERE: all content lives in this CONFIG ===== */
const CONFIG={
 brand:{name:"DIGITAL HOUSE",tag:"SALES & SERVICE"},
 phone:"+919061333743",phoneDisplay:"+91 90613 33743",
 address:"Ram Mohan Arcade, Babuji Building, Temple Road, Maithanam, Varkala, Kerala 695141",
 hours:"Open until 9 PM (per Google listing). Please call to confirm daily timings.",
 rating:"4.6",reviews:166,
 hero:{tag:"Varkala's mobile & gadget shop",title:"Your Tech. Your Style. Our <span>Service.</span>",sub:"Discover mobiles, everyday tech accessories, and dependable phone repair services—all in one place in Varkala."},
 nav:[["Home","#home"],["Mobiles","#products"],["Accessories","#categories"],["Repairs & Services","#repairs"],["About","#about"],["Contact","#contact"]],
 categories:[["Smartphones","phone"],["Phone Cases","case"],["Chargers & Cables","charger"],["Screen Protectors","shield"],["Audio & Earbuds","earbuds"],["Smart Accessories","watch"]],
 /* price: edit freely. Leave as placeholder until real prices are confirmed */
 products:[
  {name:"Smartphone — model name",cat:"Smartphones",icon:"phone",price:"₹ ____"},
  {name:"Phone case — style / model",cat:"Phone Cases",icon:"case",price:"₹ ____"},
  {name:"Wireless charger",cat:"Chargers & Cables",icon:"charger",price:"₹ ____"},
  {name:"Charging cable",cat:"Chargers & Cables",icon:"cable",price:"₹ ____"},
  {name:"Screen protector",cat:"Screen Protectors",icon:"shield",price:"₹ ____"},
  {name:"Wireless earbuds",cat:"Audio & Earbuds",icon:"earbuds",price:"₹ ____"},
  {name:"Power bank",cat:"Smart Accessories",icon:"powerbank",price:"₹ ____"},
  {name:"Smartwatch",cat:"Smart Accessories",icon:"watch",price:"₹ ____"}],
 services:[
  ["Screen Guard Application","shield","Careful fitting of a screen protector for your phone."],
  ["Charging Issue Diagnosis","charger","We check the port, cable and charger to find the cause."],
  ["Phone Troubleshooting","wrench","Slow, hanging or acting up? Tell us the problem."],
  ["Mobile Accessories","case","Cases, chargers, cables, earbuds and more."]],
 trust:[
  ["Customer-friendly service","heart","Reviewers describe the staff as helpful."],
  ["Reasonable pricing","tag","Mentioned by reviewers on Google."],
  ["Convenient parking","car","Parking is noted on the shop's listing."],
  ["Help with phone purchases","phone","Assistance choosing and buying a phone."]],
 reviewThemes:["Helpful staff","Reasonable prices","Screen guard service","Charging issue repairs","Assistance with phone purchases"],
 about:["Digital House Sales & Service is a mobile phone, gadget and accessories shop on Temple Road, Maithanam, Varkala, with repair and troubleshooting help for everyday phone issues.","[Owner: add your story, years in business and brands you stock here.]"],
 mapsLink:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Digital House Sales & Service, Ram Mohan Arcade, Temple Road, Maithanam, Varkala, Kerala 695141"),
 waText:"Hello Digital House, I'd like to enquire about "
};
/* ===== components ===== */
const P={phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18.5h2"/>',case:'<rect x="6" y="2" width="12" height="20" rx="3.5"/><circle cx="10" cy="7" r="1.6"/><circle cx="14" cy="7" r="1.6"/>',charger:'<path d="M9 2v5M15 2v5M7 7h10v4a5 5 0 0 1-10 0zM12 16v6"/>',cable:'<path d="M5 20c0-6 6-4 8-8s-2-6 3-9M4 17v3h3M15 3h4v4"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',earbuds:'<path d="M8 3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3v9M16 3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3v9"/>',watch:'<rect x="7" y="6" width="10" height="12" rx="3"/><path d="M9 6l1-4h4l1 4M9 18l1 4h4l1-4M12 10v3l2 1"/>',powerbank:'<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M12.5 7l-2.5 4h4l-2.5 4"/>',wrench:'<path d="M14.5 6a4.5 4.5 0 0 0 5.5 5.5L12 19.5a2.1 2.1 0 0 1-3-3z"/><path d="M14 6l3-3 3 3"/>',pin:'<path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',heart:'<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',tag:'<path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',car:'<path d="M5 17h14v-5l-2-5H7l-2 5zM5 12h14M7 17v2M17 17v2"/>',wa:'<path d="M3 21l1.6-5A8.5 8.5 0 1 1 8 19.4z"/><path d="M9 9c0 3 3 6 6 6l1.5-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z"/>',phoneCall:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'};
const ico=n=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${P[n]||''}</svg>`;
const $=id=>document.getElementById(id);
const wa=t=>`https://wa.me/${CONFIG.phone.replace(/\D/g,'')}?text=${encodeURIComponent(t)}`;
const C=CONFIG;
const Card=p=>`<article class="card" data-s="${(p.name+' '+p.cat).toLowerCase()}"><div class="img">${ico(p.icon)}<em>Add product photo</em></div><div class="b"><small>${p.cat}</small><h3>${p.name}</h3><div class="price">${p.price}</div><a class="btn sm" target="_blank" rel="noopener" href="${wa(C.waText+p.name+' (price & availability)')}">${ico('wa')} Enquire on WhatsApp</a></div></article>`;
const Cat=([n,i])=>`<a class="cat" href="#products" data-c="${n}"><div class="c">${ico(i)}</div>${n}</a>`;
const Svc=([t,i,d])=>`<div class="s"><div class="c">${ico(i)}</div><h3>${t}</h3><p>${d}</p></div>`;
const Pt=([t,i,d])=>`<div class="pt"><span class="c">${ico(i)}</span><div><h3>${t}</h3><p>${d}</p></div></div>`;
const Rev=t=>`<div class="r"><div class="stars" aria-hidden="true">★★★★★</div>${t}<span>Theme from Google reviews</span></div>`;
/* ===== render ===== */
document.querySelectorAll('[data-brand-html]').forEach(e=>e.innerHTML=`<b>${C.brand.name}</b><small>${C.brand.tag}</small>`);
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=ico(e.dataset.i));
$('navlist').innerHTML=C.nav.map(([n,h])=>`<li><a href="${h}">${n}</a></li>`).join('');
$('fNav').innerHTML=C.nav.map(([n,h])=>`<a href="${h}">${n}</a>`).join('');
$('sbtn').innerHTML=ico('search');$('burger').innerHTML=ico('menu');
$('waTop').innerHTML=ico('wa')+' WhatsApp';$('waTop').href=wa('Hello Digital House, I have an enquiry.');
$('heroTag').textContent=C.hero.tag;$('heroH').innerHTML=C.hero.title;$('heroP').textContent=C.hero.sub;
$('repairCta').href=wa('Hello Digital House, I have a phone repair enquiry. My phone model and issue: ');
$('cats').innerHTML=C.categories.map(Cat).join('');
$('grid').innerHTML=C.products.map(Card).join('');
$('svc').innerHTML=C.services.map(Svc).join('');
$('pts').innerHTML=C.trust.map(Pt).join('');
$('rev').innerHTML=C.reviewThemes.map(Rev).join('');
$('rating').textContent=C.rating+'/5';$('revCount').textContent=`from ${C.reviews} Google reviews`;$('gLink').href=C.mapsLink;
$('aboutP1').textContent=C.about[0];$('aboutP2').textContent=C.about[1];
$('waAbout').innerHTML=ico('wa')+' Chat on WhatsApp';$('waAbout').href=wa('Hello Digital House, I have an enquiry.');
$('addr').textContent=C.address;$('fAddr').textContent=C.address;$('hours').textContent=C.hours;$('phoneTxt').textContent=C.phoneDisplay;
$('call').innerHTML=ico('phoneCall')+' Call Now';$('call').href='tel:'+C.phone;
$('fCall').textContent=C.phoneDisplay;$('fCall').href='tel:'+C.phone;
$('wa2').innerHTML=ico('wa')+' WhatsApp';$('wa2').href=wa('Hello Digital House, I have an enquiry.');
$('dir').href=C.mapsLink;$('fDir').href=C.mapsLink;$('fWa').href=wa('Hello Digital House');
$('fab').innerHTML=ico('wa');$('fab').href=wa('Hello Digital House, I have an enquiry.');
$('yr').textContent=new Date().getFullYear();
/* ===== behaviour ===== */
const nav=$('nav'),burger=$('burger');
burger.onclick=()=>{const o=nav.classList.toggle('on');burger.setAttribute('aria-expanded',o);burger.innerHTML=ico(o?'close':'menu')};
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('on');burger.innerHTML=ico('menu')}});
$('sbtn').onclick=()=>{const s=$('search'),o=s.classList.toggle('on');$('sbtn').setAttribute('aria-expanded',o);if(o)$('q').focus()};
function filter(v){v=v.toLowerCase().trim();let n=0;document.querySelectorAll('.card').forEach(c=>{const m=!v||c.dataset.s.includes(v);c.style.display=m?'':'none';if(m)n++});$('empty').style.display=n?'none':'block'}
$('q').addEventListener('input',e=>{filter(e.target.value);location.hash='#products'});
document.querySelectorAll('.cat').forEach(a=>a.addEventListener('click',()=>{$('q').value='';filter(a.dataset.c.split(' ')[0].replace('&','').toLowerCase()==='chargers'?'Chargers':a.dataset.c)}));