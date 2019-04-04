// Main module
(function($, tarteAuCitron) {
  // Hide toggler menu on item click
  $(function() {
    $(".navbar-nav>li>.collapse-link").click(function() {
      $(".navbar-collapse").collapse("hide");
    });
  });

  // Configure cookie consent popup
  {{ if not .Site.IsServer }}
  tarteAuCitron.user.googletagmanagerId = "{{ .Site.Params.googleTagManagerID }}";
  (tarteAuCitron.job = tarteAuCitron.job || []).push("googletagmanager");
  {{ end }}

  (tarteaucitron.job = tarteaucitron.job || []).push('googlemapssearch');

  tarteAuCitron.init({
    privacyUrl: "" /* Privacy policy url */,
    hashtag: "#tarteaucitron" /* Open the panel with this hashtag */,
    cookieName: "tartaucitron" /* Cookie name */,
    orientation: "bottom" /* Banner position (top - bottom) */,
    showAlertSmall: false /* Show the small banner on bottom right */,
    cookieslist: true /* Show the cookie list */,
    adblocker: false /* Show a Warning if an adblocker is detected */,
    AcceptAllCta: true /* Show the accept all button when highPrivacy on */,
    highPrivacy: true /* Disable auto consent */,
    handleBrowserDNTRequest: false /* If Do Not Track == 1, disallow all */,
    removeCredit: false /* Remove credit link */,
    moreInfoLink: true /* Show more info link */,
    useExternalCss: true /* If false, the tarteaucitron.css file will be loaded */
    //"cookieDomain": ".my-multisite-domaine.fr" /* Shared cookie for subdomain website */
  });
})(jQuery, tarteaucitron);
