import React, { forwardRef, useEffect, useRef } from 'react';

declare global {
    interface Window {
        handleIFrameMessage: (e: any) => void;
        isPermitted: (origin: string, allowedOrigins: string[]) => boolean;
    }
}

export default function JotFormEmbed({id, title, src} : {id: string, title: string, src: string}){
    useEffect(() => {
        window.isPermitted = function(originUrl, whitelisted_domains) {
          var url = document.createElement('a');
          url.href = originUrl;
          var hostname = url.hostname;
          if( typeof hostname !== 'undefined' ) {
            whitelisted_domains.forEach(function(element) {
                if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
                    return true;
                }
            });
        }
        return false;
        };
        let iframe: HTMLIFrameElement | null;
        var ifr = document.getElementById(id) as HTMLIFrameElement;
        if (ifr) {
          var src = ifr.src;
          var iframeParams: any[] = [];
          if (window.location.href && window.location.href.indexOf("?") > -1) {
            iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
          }
          if (src && src.indexOf("?") > -1) {
            iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
            src = src.substr(0, src.indexOf("?"))
          }
          iframeParams.push("isIframeEmbed=1");
          ifr.src = src + "?" + iframeParams.join('&');
        }
        window.handleIFrameMessage = function(e) {
          if (typeof e.data === 'object') { return; }
          var args = e.data.split(":");
          if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]) as HTMLIFrameElement; } else { iframe = document.getElementById("JotFormIFrame") as HTMLIFrameElement; }
          if (!iframe) { return; }
          switch (args[0]) {
            case "scrollIntoView":
              iframe.scrollIntoView();
              break;
            case "setHeight":
              iframe.style.height = args[1] + "px";
              if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
                iframe.style.minHeight = args[1] + "px";
              }
              break;
            case "collapseErrorPage":
              if (iframe.clientHeight > window.innerHeight) {
                iframe.style.height = window.innerHeight + "px";
              }
              break;
            case "reloadPage":
              window.location.reload();
              break;
            case "loadScript":
              if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
              var src = args[1];
              if (args.length > 3) {
                  src = args[1] + ':' + args[2];
              }
              var script = document.createElement('script');
              script.src = src;
              script.type = 'text/javascript';
              document.body.appendChild(script);
              break;
            case "exitFullscreen":
              if      (window.document.exitFullscreen)        window.document.exitFullscreen();
            //   else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
            //   else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
            //   else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
            //   else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
              break;
          }
          var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
          if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow!) {
            var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
            iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
          }
        };
        if (window.addEventListener) {
          window.addEventListener("message", window.handleIFrameMessage, false);
        }        
    }, [])
    return(
        <div className='overflow-hidden rounded-lg my-10'>
            <div className='h-screen overflow-y-scroll'>
                <iframe
                id={id}
                title={title}
                onLoad={() => { window.parent.scrollTo(0,0); }}
                // @ts-ignore
                allowtransparency="true"
                allowFullScreen={true}
                allow="geolocation; microphone; camera"
                src={src}
                frameBorder={0}
                style = {{
                    minWidth: "100%",
                    maxWidth: "100%",
                    border: "none"
                }}
                scrolling="no"
                >
                </iframe>
            </div>
        </div>
    )
}