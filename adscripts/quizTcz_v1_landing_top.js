window.googletag = window.googletag || { cmd: [] };
googletag.cmd.push(function () {
  googletag
    .defineSlot(
      "23390517171/quiztonic.online_d2",
      [
        [300, 250], [300, 600], [320, 480], [336, 280]
      ],
      "myw-top-1"
    )
    .addService(googletag.pubads());
  // googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();

  // Add event listener to handle ad loading
  googletag.pubads().addEventListener("slotRenderEnded", function (event) {
    if (event.slot.getSlotElementId() === "myw-top-1") {
      if (!event.isEmpty) {
        // Ad has loaded, remove the default size
        document.getElementById("myw-top-1").style.minHeight =
          "auto";
        document.getElementById("myw-top-1").style.minWidth =
          "auto";
      } else {
        // Ad failed to load, remove the ad container
        document.getElementById("myw-top-1").remove();
      }
    }
  });
});



// Load GPT script dynamically

// (function () {
//   function initAds() {
//     const adDivId = "myw-top-1";

//     if (!document.getElementById(adDivId)) {
//       const adDiv = document.createElement("div");
//       adDiv.id = adDivId;
//       adDiv.style.width = "300px";
//       adDiv.style.height = "250px";
//       document.body.insertBefore(adDiv, document.body.firstChild);
//     }

//     var gads = document.createElement("script");
//     gads.async = true;
//     gads.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";

//     gads.onload = function () {
//       window.googletag = window.googletag || { cmd: [] };
//       googletag.cmd.push(function () {
//         // Define the slot
//         googletag
//           .defineSlot(
//             "/23390517171/quiztonic.online_d1",
//             [[300, 250], [300, 600], [320, 480], [336, 280]],
//             adDivId
//           )
//           .addService(googletag.pubads());

//         googletag.enableServices();

//         // Only now display the slot
//         googletag.display(adDivId);
//       });
//     };
//     document.head.appendChild(gads);
//   }

//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", initAds);
//   } else {
//     initAds();
//   }
// })();
