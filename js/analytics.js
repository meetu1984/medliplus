
  (function() {
    try {
      const config = {
        scriptId: "681a70da558227a80c6057cb",
        siteId: "111",
        apiUrl: "https://script-dashboard.vercel.app"
      };

      // Create and configure the script element
      var script = document.createElement('script');
      script.async = true;
      script.src = `${config.apiUrl}/trigger.js?script=${config.scriptId}&site=${config.siteId}`;
      
      // Add data attributes for tracking
      script.setAttribute('data-script-id', config.scriptId);
      script.setAttribute('data-site-id', config.siteId);
      
      // Error handling
      script.onerror = function() {
        console.error('Failed to load analytics script');
      };
      
      // Success callback
      script.onload = function() {
        console.log('Analytics script loaded successfully');
      };
      
      // Insert the script into the page
      var firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      // Global error handling
      window.addEventListener('error', function(e) {
        if (e.target === script) {
          console.error('Analytics script failed to load:', e);
        }
      });
    } catch (e) {
      console.error('Error initializing analytics script:', e);
    }
  })();
