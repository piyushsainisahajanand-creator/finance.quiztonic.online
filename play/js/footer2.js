class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<style>

footer{
    background:#120022;
    color:white;
    padding:45px 40px 20px;
    font-family:Arial,sans-serif;
}

.footer_text{
    list-style:none;
    padding:0;
    margin:0;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:28px;
    align-items:center;
}

.footer_text li{
    margin:0;
}

.footer_text li h3{
    font-size:24px;
    color:#fff;
    margin-right:15px;
}

.footer_text li a{
    color:#d7d7d7;
    text-decoration:none;
    font-size:15px;
    transition:0.3s;
}

.footer_text li a:hover{
    color:#fff;
}

#game_logo img{
    width:140px;
    object-fit:contain;
}

#footer_content{
    line-height:1.9;
    color:#d8d8d8;
    font-size:15px;
}

#footer_content b{
    font-size:24px;
    color:#fff;
}

#footer_line{
    padding-top:20px;
    text-align:center;
    color:#cfcfcf;
    font-size:14px;
}

#footer_line a{
    color:#fff;
    text-decoration:none;
}

/* MOBILE */

@media(max-width:768px){

    footer{
        padding:35px 20px 20px;
    }

    .footer_text{
        flex-direction:column;
        gap:16px;
    }
    

    #game_logo{
        width:100% !important;
        justify-content:center;
        margin-bottom:20px;
    }

    #footer_content{
        width:100% !important;
        text-align:center !important;
    }

}

</style>

<hr/>

<footer>

<!-- FIRST ROW -->

<div style="
width:100%;
padding-bottom:30px;
border-bottom:1px solid rgba(255,255,255,0.1);
">

<ul class="footer_text">

<img   src="/assets/images/logo.png">

<li><a href="/play">Home</a></li>

<li><a href="/play/about_us.html">About Us</a></li>

<li><a href="/play/adsense_disclaimer.html">Adsense Disclaimer</a></li>

<li><a href="/play/privacy_policy.html">Privacy Policy</a></li>

<li><a href="/play/terms_of_use.html">Terms and Condition</a></li>

<li><a href="/play/contact_us.html">Contact Us</a></li>

</ul>

</div>



<div id="footer_line">
Copyright © 2026
<a href="/play">Quiztonic</a>
</div>

</footer>

`
    }
}

customElements.define('footer-component', footer);

/* Shared UTM/Direct ad-flow for all /play pages that include this footer. */
(function loadPlayAdFlowBoot() {
  if (window.__adFlowBootLoader) return;
  window.__adFlowBootLoader = true;
  var s = document.createElement('script');
  // Absolute from site root; fallback relative to this script for local folders.
  var base = '/play/js/';
  try {
    var cur = document.currentScript && document.currentScript.src;
    if (cur) base = cur.replace(/[^/]+$/, '');
  } catch (e) {
    /* ignore */
  }
  s.src = base + 'ad-flow-boot.js';
  s.async = false;
  (document.head || document.documentElement).appendChild(s);
})();


// class footer extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//      <hr/>
//      <div  style="width: 100%;display:none;" id="footer_mobile">
          
//      <ul class="footer_text">
//      <li ><h3>About</h3></li>
//          <li ><a href="https://quiztonic.online">Home</a></li>
//          <li ><a href="https://quiztonic.online/about_us.html" >About Us</a></li> 
//          <li ><a href="https://quiztonic.online/adsense_disclaimer.html" >Adsense Disclaimer</a></li>  
//          <li ><a href="https://quiztonic.online/privacy_policy.html" >Privacy Policy </a></li> 
//          <li ><a href="https://quiztonic.online/terms_of_use.html" >Tearms and Condition</a></li>  
//          <li ><a href="https://quiztonic.online/contact_us.html" >Contact US</a></li> 
//          </ul> 
//          </div>
//       <footer>
        
//       <div style="width: 100%; display: flex;
//       flex-direction: row;
//       flex-wrap: wrap; ">
          
//           <div id="game_logo"  style="width: 30%;align-items: center;display:block;" >
//         <img src="/assets/images/logo.png" >
//       </div>
//         <div  style="width: 30%;text-align:justify;" id="footer_content"><br/>
//           <b>Quiztonic</b>
//           <br/>
//           Quiztonic is a completely new platform for the online games lovers. 
//           The best part is that all games available on our website are
//                free and can be enjoyable on multiple devices, including desktop, mobile phones, tablets, and iPhones or iPads.s    
//       </div>
//        <div  style="width: 10%;"></div>
//         <div  style="width: 25%;">
          
//           <ul class="footer_text">
//           <li ><h3>About</h3></li>
//               <li ><a href="https://quiztonic.online">Home</a></li>
//               <li ><a href="https://quiztonic.online/about_us.html" >About Us</a></li> 
//               <li ><a href="https://quiztonic.online/adsense_disclaimer.html" >Adsense Disclaimer</a></li>  
//               <li ><a href="https://quiztonic.online/privacy_policy.html" >Privacy Policy </a></li> 
//               <li ><a href="https://quiztonic.online/terms_of_use.html" >Tearms and Condition</a></li>  
//               <li ><a href="https://quiztonic.online/contact_us.html" >Contact US</a></li> 
//               </ul> </div>
//         <div  style="width: 5%;"></div>
//         </div>  
//         <div id="footer_line" style="width: 100%;">
//           Copyright- 2023 <a href="https://quiztonic.online"  bis_skin_checked="1">quiztonic.online</a> &nbsp;&nbsp;&nbsp;&nbsp;
//   </footer> `

//     }
// }

// customElements.define('footer-component', footer);


