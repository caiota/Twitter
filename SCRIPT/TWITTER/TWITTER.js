var BANNED_ITEMS = [
    'link in bio',
    'onlyfans.com/',
    'privacy.com/',
    'crypto',
    'onlyfans/privacy',
    'privacy/onlyfans',
    '░B░I░O',
    'ＬＩＮＫ ＩＮ ＢＩＯ',
    't.me'
 ]
 var TEXTS = [];
 var arabe = '\\u0600-\\u06FF'
 var hebraico = '\\u0590-\\u05FF'
 var russo = '\\u0400-\\u04FF'
 var chines = '\\u4E00-\\u9FFF\\u3040-\\u30FF';
 var hindi = '\\u0900-\\u097F'
 var vietnamita = '\\u0102-\\u01B0\\u1EA0-\\u1EF9'
 var tailandes = '\\u0E00-\\u0E7F'
 var grego = '\\u0370-\\u03FF'
 var coreano = '\\uAC00-\\uD7AF\\u1100-\\u11FF\\u3130-\\u318F'
 var amarico = '\\u1200-\\u137F';
 var LetrasGrandes = '\\uFF00-\\uFFEF'; 
 
 
 var regex_arabe = new RegExp('[' + arabe + ']', 'i')
 var regex_hebraico = new RegExp('[' + hebraico + ']', 'i')
 var regex_russo = new RegExp('[' + russo + ']', 'i')
 var regex_chines = new RegExp('[' + chines + ']', 'i')
 var regex_hindi = new RegExp('[' + hindi + ']', 'i')
 var regex_vietnamita = new RegExp('[' + vietnamita + ']', 'i')
 var regex_tailandes = new RegExp('[' + tailandes + ']', 'i')
 var regex_grego = new RegExp('[' + grego + ']', 'i')
 var regex_coreano = new RegExp('[' + coreano + ']', 'i')
 var regex_amarico = new RegExp('[' + amarico + ']', 'i')
 var regex_BigLetter = new RegExp('[' + LetrasGrandes + ']', 'i')
 
 var NO_DOLLAR_BS = /\$[a-zA-Z]+/g
 
 var FUNCTION_SETTINGS = null;
 
 var regex = new RegExp(BANNED_ITEMS.join('|'), 'i')
 
 var SIDEMENU_ADDED = false;
 
 var block_path = "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z";
 var ver_menos_path = "M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z";
 var mute_path = "M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z";
 var sponsor_path = "M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z";
 var automatico_path = "M.998 15V9h2v6h-2zm22 0V9h-2v6h2zM12 2c-4.418 0-8 3.58-8 8v7c0 2.76 2.239 5 5 5h6c2.761 0 5-2.24 5-5v-7c0-4.42-3.582-8-8-8zM8.998 14c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2zm6 0c-1.104 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.896 2-2 2z";
 var is_video="M22.2275 17.1971V43.6465L43.0304 30.4218L22.2275 17.1971Z";
 
 function log(txt, txt2, txt3) {
    console.log(txt, txt2, txt3);
 }
 
 function ARTICLE_ACTION(element, action) {
 
    if (action === "remove") {
       const tweetUrlElement = ARTICLE_FIND(element.target).querySelector("div[data-testid='User-Name'] a[href*='/status/']");
       if (tweetUrlElement) {
          const idDoStatus = tweetUrlElement.href.split("/")[5];
          if (/^\d+$/.test(idDoStatus)) {
             log(tweetUrlElement.href.split("/")[3] + "/" + idDoStatus);
          }
       }
       element.target.remove();
    } else if (action === "block") {
       element.preventDefault();
       const tweetUrlElement = element.target.closest("article").querySelector("div[aria-haspopup='menu'][role='button']");
       tweetUrlElement.click();
       setTimeout(LOCK_USER, 150);
    } else if (action === "decensurar") {
       if (element) {
          element.classList.remove("Blur");
          log("Removendo censura da mídia")
       }
    } else if (action === "censurar") {
       const closestVideo = element.closest("div[data-testid='videoComponent']") || element;
       closestVideo.classList.add("Blur");
       log("recensurando mídia")
    } else if (action === "view_less" || action === "mute_tweet") {
       element.preventDefault();
       const tweetUrlElement = element.target.closest("article").querySelector("div[aria-haspopup='menu'][role='button']");
       tweetUrlElement.click();
       setTimeout(() => {
          const selector = action === "view_less" ? "div[data-testid='Dropdown'] path[d='" + ver_menos_path + "']" : "div[data-testid='Dropdown'] path[d='" + mute_path + "']";
          if (document.querySelector(selector)) {
             setTimeout(action === "view_less" ? VIEW_LESS_THIS : MUTE_TWEET, 50);
          } else {
             tweetUrlElement.click();
             element.target.remove();
          }
       }, 20);
    }
 }
 
 
 function LOCK_USER() {
    try {
       if (document.querySelector("div[data-testid='Dropdown']")) {
          log("Bloqueando Usuário Rápidamente");
          blockBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + block_path + "']").closest("div");
          blockBtn.click();
 
          if (document.querySelector("div[data-testid='confirmationSheetDialog']")) {
             blockConfirm = document.querySelector("div[data-testid='confirmationSheetDialog'] div[data-testid='confirmationSheetConfirm']").click();
          }
 
       }
    } catch (e) {
 
       log("Tentando Bloqueando Usuário Rápidamente novamente!");
       setTimeout(LOCK_USER, 500);
    }
 }
 
 function VIEW_LESS_THIS() {
    try {
 
       log("Vendo Menos do Usuário Rápidamente");
       viewLessBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + ver_menos_path + "']").closest("div");
       viewLessBtn.click();
 
    } catch (e) {
 
       log("Vendo Menos do Usuário Rápidamente novamente!");
       setTimeout(VIEW_LESS_THIS, 500);
    }
 }
 
 function MUTE_TWEET() {
    try {
 
       log("Mutando Usuário Rápidamente");
       MuteBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + mute_path + "']").closest("div");
       MuteBtn.click();
 
    } catch (e) {
 
       log("Mutando Usuário Rápidamente novamente");
       setTimeout(MUTE_TWEET, 500);
    }
 }
 var VIDEO_PLAYING = null;
 var ARTICLE_MARCADO = null;
 document.body.addEventListener('keydown', function (event) {
    try {
       if (VIDEO_PLAYING != null) {
 
          switch (event.key) {
             case 'ArrowUp':
                event.preventDefault();
                log("Aumentando Volume da Mídia");
                VIDEO.VOLUME_UP();
                break;
             case 'ArrowDown':
                event.preventDefault();
                log("Abaixando Volume da Mídia");
                VIDEO.VOLUME_DOWN();
                break;
             case 'ArrowLeft':
                event.preventDefault();
                log("Progredindo na Mídia");
                VIDEO.SEEK_LEFT();
                break;
             case 'ArrowRight':
                event.preventDefault();
                log("Regredindo na Mídia");
                VIDEO.SEEK_RIGHT();
                break;
             case ' ':
                event.preventDefault();
                log("Pausando/Tocando Mídia");
                VIDEO.PLAY_PAUSE(VIDEO_PLAYING.paused);
                break;
             default:
                return;
          }
       }
       if (event.ctrlKey == true && event.key == "s" && fimg.src !== "" && fimg.src.indexOf("/media/") != -1) {
          window.open(fimg.src);
          event.preventDefault();
       }
 
    } catch (err) {
       throw err;
    }
 });
 
 var imgPai = null;
 var mouseX_Event = 0;
 var mouseY_Event = 0;
 var mouseX=0;
 var mouseY=0;
 document.addEventListener("mousemove", function (event) {
    try{
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (FUNCTION_SETTINGS.PREVIEW_IMAGES == true) {
       if (canMoveImage) {
          if (document.body.contains(imgPai)) {
             var windowWidth = window.innerWidth;
             var windowHeight = window.innerHeight;
             var imgWidth = fimg.width;
             var imgHeight = fimg.height;
 
             // Verificar se a imagem deve ser exibida no lado direito ou esquerdo
             var imgLeft = mouseX + 20; // Adicionando um offset para evitar que a imagem fique exatamente abaixo do cursor
             if (mouseX + imgWidth + 5 > windowWidth) {
                imgLeft = windowWidth - imgWidth - 5; // Posição ajustada para a direita
                mouseX_Event = imgLeft;
             }
 
             // Verificar se a imagem deve ser exibida acima ou abaixo
             var imgTop = mouseY + 20;
             if (mouseY + imgHeight + 5 > windowHeight) {
                imgTop = windowHeight - imgHeight - 5; // Posição ajustada para cima
                mouseY_Event = imgTop;
             }
 
             // Atualizar a posição da imagem
             previewDiv.style.left = imgLeft + "px";
             previewDiv.style.top = imgTop + "px";
 
 
          } else {
             previewDiv.style.display = "none";
             zoomLevel = 1.0;
             previewDiv.style.transform = "scale(" + zoomLevel + ")";
             canMoveImage = false;
             imgPai = null;
             fimg.src = "";
          }
       }
    }
    



    
    }catch(e){
throw e;
   }

 });
 
 
 function isOnPost() {
    let PAGE = window.location.href;
    if (PAGE.indexOf("/video/") == -1 && PAGE.indexOf("/photo/") == -1) {
       return false;
    } else {
       return true;
    }
 
 }
 
 function ElementoEstaVisivel(element) {
    if (element != null) {
       var elementRect = element.getBoundingClientRect();
       var windowHeight = window.innerHeight;
 
       // Verifica se o elemento está totalmente visível na tela
       if (elementRect.top >= 0 && elementRect.bottom <= windowHeight) {
          return true;
       }
 
       // Verifica se pelo menos parte do elemento está visível na tela
       if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
          return true;
       }
    }
    return false;
 }
 
 function ElementoEstaElegivel(element) {
    if (element != null) {
       var elementRect = element.getBoundingClientRect();
       var windowHeight = window.innerHeight;
 
       // Adiciona uma margem extra de 100 pixels fora da tela
       var extraMargin = 250;
 
       // Verifica se o elemento está totalmente visível na tela ou se está quase visível
       if ((elementRect.top + extraMargin) >= 0 && (elementRect.bottom - extraMargin) <= windowHeight) {
          return true;
       }
 
       // Verifica se pelo menos parte do elemento está visível na tela
       if (elementRect.top < (windowHeight + extraMargin) && elementRect.bottom > -extraMargin) {
          return true;
       }
    }
    return false;
 }
 var CAN_FORCE_PLAY = false;
 
 function CheckIfPlaying() {
    if (VIDEO_PLAYING != null && ElementoEstaVisivel(VIDEO_PLAYING) == true && CAN_FORCE_PLAY == true) {
       if (VIDEO_PLAYING.paused) {
          VIDEO_PLAYING.play();
          CAN_FORCE_PLAY = false;
          log("Forcando Reprodução da Mídia");
       }
    } else {
       CAN_FORCE_PLAY = false;
       log("Parando Reprodução da Mídia");
       VIDEO_PLAYING = null;
       clearInterval(playLoop);
       playLoop = null;
    }
 }
 var playLoop = null;
 let VIDEO = {
    PLAY_VIDEO(videoElementh) {
       if (videoElementh instanceof HTMLVideoElement) {
          videoElementh.play();
          VIDEO_PLAYING = videoElementh;
          CAN_FORCE_PLAY = true;
          if (!playLoop) {
             playLoop = setInterval(CheckIfPlaying, 500);
          }
       }
    },
    PAUSE_VIDEO(videoElementh) {
       if (videoElementh instanceof HTMLVideoElement && !videoElementh.paused) {
          videoElementh.pause();
          VIDEO_PLAYING = null;
          clearInterval(playLoop);
          playLoop = null;
       }
    },
    VOLUME_UP() {
       if (VIDEO_PLAYING) {
          VIDEO_PLAYING.volume = Math.min(1, VIDEO_PLAYING.volume + 0.1);
       }
    },
    VOLUME_DOWN() {
       if (VIDEO_PLAYING) {
          VIDEO_PLAYING.volume = Math.max(0, VIDEO_PLAYING.volume - 0.1);
       }
    },
    SEEK_LEFT() {
       try {
          if (VIDEO_PLAYING) {
             VIDEO_PLAYING.currentTime = Math.max(0, VIDEO_PLAYING.currentTime - 3);
          }
       } catch (e) {
          VIDEO_PLAYING = null;
       }
    },
    SEEK_RIGHT() {
       try {
          if (VIDEO_PLAYING) {
             VIDEO_PLAYING.currentTime = Math.min(VIDEO_PLAYING.duration, VIDEO_PLAYING.currentTime + 3);
          }
       } catch (e) {
          VIDEO_PLAYING = null;
       }
    },
    PLAY_PAUSE(status) {
       if (VIDEO_PLAYING) {
          if (status) {
             VIDEO_PLAYING.play();
          } else {
             VIDEO_PLAYING.pause();
          }
       }
    }
 };
 
 
 var fimg = null;
 var previewDiv = null;
 var previewLoading = null;
 var BLOCK = false;
 let TWEET = {
    VIDEO_ACTION: {
       VIDEO_AUTOPAUSE: async () => {
          try {
             const tweets_videos = document.querySelectorAll("article[ARTICLE_LOADED='true'] video:not([PAUSED])");
             var tempArr = [];
             let atweets_videos_LENGTH = tweets_videos.length;
             if (atweets_videos_LENGTH > 0) {
                for (var i = 0; i < atweets_videos_LENGTH; i++) {
                   let videoElement = tweets_videos[i];
                   if (videoElement.readyState == 4) {
 
                      var article = ARTICLE_FIND(videoElement);
 
                      videoElement.play();
                      videoElement.removeAttribute("playsinline")
                      if (!videoElement.getAttribute('PAUSED')) {
                         videoElement.muted = false;
                         videoElement.volume = 0.1;
                         videoElement.pause();
 
                         videoElement.addEventListener('play', async (el) => {
                            if (ElementoEstaVisivel(videoElement) == false) {
                               videoElement.pause();
                            }
                         });
                         if (article) {
                            const elaT = article.querySelectorAll("div[data-testid='videoComponent']");
                            for (var videoItem of elaT) {
                               videoItem.addEventListener('mouseover', async (el) => {
                                  let elclosest = el.target.closest("div[data-testid='videoComponent']");
                                  elclosest = elclosest.querySelector("video")
                                  imgPai = elclosest;
                                  VIDEO.PLAY_VIDEO(elclosest);
 
 
                               });
                               videoItem.addEventListener('click', async (el) => {
                                  let elclosest = el.target.closest("div[data-testid='videoComponent']");
                                  elclosest = elclosest.querySelector("video")
                                  imgPai = null;
                                  VIDEO.PAUSE_VIDEO(elclosest);
 
 
                               });
                               videoItem.addEventListener('mouseout', async (el) => {
                                  let elclosest = el.target.closest("div[data-testid='videoComponent']");
                                  elclosest = elclosest.querySelector("video");
                                  imgPai = null;
                                  VIDEO.PAUSE_VIDEO(elclosest)
                               });
                            }
                         }
                         videoElement.setAttribute('PAUSED', true);
                      }
 
 
                   } else {
                      videoElement.play();
                      videoElement.removeAttribute('PAUSED');
                   }
                }
             }
          } catch (error) {
             throw error;
          }
       },
 
       VIDEO_CHECK_IFPAUSED: async (videosArr) => {
          try {
 
             for (var i = 0; i < videosArr.length; i++) {
                var video = videosArr[i];
 
                video.pause();
                console.log("Pausando")
 
             }
 
             tempArr = [];
          } catch (E) {
             log(E);
          }
       }
    },
    //VERIFICA PALAVRAS PROIBIDAS POR REGEX DE UMA ARRAY
    TWEET_ACTION: {
 
       IMAGE_PREVIEW: async () => {
          try {
             if (fimg == null) {
                previewDiv = document.createElement("div");
                previewDiv.id = "previewDiv";
                previewLoading = document.createElement("div");
                previewLoading.classList.add("loader");
                previewDiv.appendChild(previewLoading);
 
                fimg = document.createElement("img");
                fimg.id = "ImgPreview";
                fimg.addEventListener("load", () => {
                   previewLoading.style.display = "none";
                })
                previewDiv.addEventListener("mouseout", function (event) {
                   if (canMoveImage) {
                      previewDiv.style.display = "none";
                      zoomLevel = 1.0;
                      previewDiv.style.transform = "scale(" + zoomLevel + ")";
                      canMoveImage = false;
                      previewLoading.style.display = "block";
                      fimg.src = "";
                   }
                });
 
                previewDiv.addEventListener("mousedown", function (event) {
                   event.preventDefault();
                   previewDiv.style.display = "none";
                   zoomLevel = 1.0;
                   previewDiv.style.transform = "scale(" + zoomLevel + ")";
                   canMoveImage = false;
                   previewLoading.style.display = "block";
                });
 
                previewDiv.appendChild(fimg);
                document.body.appendChild(previewDiv);
 
 
                document.addEventListener("wheel", function (event) {
                   if (!ElementoEstaVisivel(imgPai) && canMoveImage == true) {
                      previewDiv.style.display = "none";
                      zoomLevel = 1.0;
                      previewDiv.style.transform = "scale(" + zoomLevel + ")";
                      canMoveImage = false;
                      imgPai = null;
                      fimg.src = "";
                   }
                   if (event.ctrlKey && canMoveImage == true) {
                      // Detectar a direção do scroll (para zoom in e zoom out)
                      var delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
 
                      // Definir a quantidade de zoom
                      var zoomAmount = 0.1; // Valor arbitrário de zoom
 
                      // Inverter a direção do scroll
                      delta = -delta;
 
                      // Atualizar o nível de zoom
                      zoomLevel += delta * zoomAmount;
 
                      // Limitar o nível de zoom mínimo e máximo
                      zoomLevel = Math.max(0.1, Math.min(3.0, zoomLevel)); // Zoom mínimo de 10% e máximo de 300%
 
                      // Aplicar o zoom na imagem
                      previewDiv.style.transform = "scale(" + zoomLevel + ")";
                       mouseX = event.clientX;
                       mouseY = event.clientY;
 
                      // Definir as propriedades left e top do estilo do previewDiv
                      previewDiv.style.left = mouseX + "px";
                      previewDiv.style.top = mouseY + "px";
                      // Impedir o comportamento padrão da rolagem da página
                      event.preventDefault();
                   }
                }, {
                   passive: false
                });
             }
             var ALL_IMAGES = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetPhoto'] img:not([PREVIEW_SET])"));
             ALL_IMAGES = ALL_IMAGES.concat(Array.from(document.querySelectorAll("li[role='listitem'] img:not([PREVIEW_SET])")))
             let ALL_IMAGES_LENGTH = ALL_IMAGES.length;
             if (ALL_IMAGES_LENGTH > 0) {
                for (var i = 0; i < ALL_IMAGES_LENGTH; i++) {
                   let image = ALL_IMAGES[i];
                   if (!image.closest("div[data-testid='videoComponent']")) {
                      image.addEventListener("mouseover", (i) => {
                         if (FUNCTION_SETTINGS.PREVIEW_IMAGES == true) {
                            if (!previewDiv.style.display || previewDiv.style.display === "none") {
                               previewDiv.style.left = mouseX + "px";
                               previewDiv.style.top = mouseY + "px";
                               canMoveImage = true;
                               imgPai = i.target;
                               fimg.src = i.target.src.replace(/name=\w+/g, "name=medium");
                               previewLoading.style.display = "block";
                               previewDiv.style.display = "block";
                            }
                         } else {
                            ALL_IMAGES = [];
                         }
                      });
                      image.addEventListener("mouseout", (event) => {
                         // Verificar se o evento de mouseout foi acionado a partir de fora da imagem
                         if (event.relatedTarget !== fimg && previewDiv.style.display === "block" && canMoveImage) {
                            previewDiv.style.display = "none";
                            zoomLevel = 1.0;
                            previewDiv.style.transform = "scale(" + zoomLevel + ")";
                            canMoveImage = false;
                            imgPai = null;
                            fimg.src = "";
                         }
                      });
                   }
 
                   image.setAttribute("PREVIEW_SET", true);
                }
             }
          } catch (e) {
             throw e;
          }
 
       },
       ADD_REPORT_BUTTON: async () => {
          try {
             if (FONT_AWESOME_LOADED == true) {
                var ALL_TWEETS = document.querySelectorAll("article[ARTICLE_LOADED='true']:not([BUTTON_ADDED])");
                if (ALL_TWEETS.length > 0) {
 
 
                   for (var article of ALL_TWEETS) {
                      //ADICIONA OPÇÃO RÁPIDA DE BLOQUEAR SUJEITO 
 
                      if (IS_SELF_TWEET(article)) {
                         article.setAttribute('BUTTON_ADDED', true);
                         return;
                      }
                      if (article.querySelector("div[data-testid='User-Name']") && article.querySelector("div[aria-haspopup='menu'][role='button'][data-testid='caret']")) {
                         nickNameDIV = article.querySelector("div[aria-haspopup='menu'][role='button'][data-testid='caret']").parentElement.parentElement.parentElement.parentElement.parentElement;
 
                         if (nickNameDIV) {
                            nickNameDIV.style.display = "flex";
                            nickNameDIV.style.flexDirection = "row-reverse";
 
 
                            var items_Div = document.createElement("div");
                            items_Div.classList = "ITENS_BUTTONS_DIV";
 
 
                            nickNameDIV.appendChild(items_Div);
                            nickNameDIV.setAttribute('BUTTON_ADDED', true);
 
 
                            if (FUNCTION_SETTINGS.SHORTCUTS.report_tweet == true) {
                               var i_Report = document.createElement("i");
                               i_Report.classList = "fa fa-exclamation-triangle";
                               i_Report.id = "ICON_DIV";
                               i_Report.title = "Reportar Tweet para a Extensão (Ainda indisponível)";
                               i_Report.setAttribute("aria-hidden", true);
                               i_Report.addEventListener("click", function (e) {
                                  ARTICLE_ACTION(e, 'remove')
                               });
 
                               items_Div.appendChild(i_Report)
 
 
                            }
 
                            if (FUNCTION_SETTINGS.SHORTCUTS.fast_block == true) {
                               var i_block = document.createElement("i");
                               i_block.classList = "fa fa-ban";
                               i_block.id = "ICON_DIV";
                               i_block.title = "Bloquear Usuário Rapidamente";
                               i_block.setAttribute("aria-hidden", true);
 
                               i_block.addEventListener("click", function (e) {
                                  ARTICLE_ACTION(e, 'block')
                               });
 
 
                               items_Div.appendChild(i_block)
 
                            }
 
                            if (FUNCTION_SETTINGS.SHORTCUTS.view_less == true) {
                               var i_view_less = document.createElement("i");
                               i_view_less.classList = "fa fa-eye-slash";
                               i_view_less.id = "ICON_DIV";
                               i_view_less.title = "Este post não me interessa";
                               i_view_less.setAttribute("aria-hidden", true);
 
                               i_view_less.addEventListener("click", function (e) {
                                  ARTICLE_ACTION(e, 'view_less')
                               });
 
                               items_Div.appendChild(i_view_less)
 
                            }
 
                            if (FUNCTION_SETTINGS.SHORTCUTS.mute_user == true) {
                               var i_mute = document.createElement("i");
                               i_mute.classList = "fa fa-bell-slash-o";
                               i_mute.id = "ICON_DIV";
                               i_mute.title = "Silenciar Usuário Rapidamente";
                               i_mute.setAttribute("aria-hidden", true);
 
                               i_mute.addEventListener("click", function (e) {
                                  ARTICLE_ACTION(e, 'mute_tweet')
                               });
 
                               items_Div.appendChild(i_mute)
 
                            }
                            article.setAttribute('BUTTON_ADDED', true);
 
                         }
                      }
                   }
                }
             }
          } catch (e) {
             throw e;
          }
       },
       ComumScam: async () => {
          try {
 
 
             if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false) {
                var DOLLAR_TWEETS = document.querySelectorAll(
                   "article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([COMUM_SCAM_SCANNED])"
                );
             } else {
                var DOLLAR_TWEETS = document.querySelectorAll(
                   "article[data-testid='tweet'][ARTICLE_LOADED='true']:not([COMUM_SCAM_SCANNED])"
                );
             }
             if (DOLLAR_TWEETS.length > 0) {
                for (var element of DOLLAR_TWEETS) {
                   var text = element.innerText;
 
                   var article = ARTICLE_FIND(element);
 
                   if (IS_SELF_TWEET(article)) {
                      article.setAttribute('COMUM_SCAM_SCANNED', true);
                      return;
                   }
                   if (text.match(NO_DOLLAR_BS)) {
                      log('Scam comum detectada: Palavra com $ Antes');
                      if (article) {
                         await Push_Tweet(article)
                         CreateNotification("Tweet com Scam Comum Removido")
                      }
                   }
 
                   element.setAttribute('COMUM_SCAM_SCANNED', true);
                }
 
             }
          } catch (error) {
             throw error;
          }
       },
       REPLACE_WORD_ASTERISCS: async (elemento) => {
          try {
             if (elemento.nodeType === Node.TEXT_NODE) {
                var texto = elemento.textContent;
 
                BANNED_ITEMS.forEach(function (palavra) {
                   var regex = new RegExp("\\b" + palavra + "\\b", "gi");
                   texto = texto.replace(regex, "<span class='blurWord'>$&</span>");
 
 
                });
 
                var temp = document.createElement('span');
                temp.innerHTML = texto;
 
                elemento.parentNode.replaceChild(temp, elemento);
             } else if (elemento.nodeType === Node.ELEMENT_NODE) {
                for (var i = 0; i < elemento.childNodes.length; i++) {
                   await TWEET.TWEET_ACTION.REPLACE_WORD_ASTERISCS(elemento.childNodes[i]);
                }
             }
             const blurDocument = document.querySelector("span.blurWord:not([BLURED_WORD])");
             if (blurDocument) {
                blurDocument.setAttribute("BLURED_WORD", true);
                blurDocument.addEventListener("mouseover", (e) => {
                   e.target.classList.remove("blurWord")
                });
                blurDocument.addEventListener("mouseout", (e) => {
                   e.target.classList.add("blurWord")
                });
             }
          } catch (e) {
             throw e;
          }
       },
       REMOVE_WORDS: async () => {
 
 
          try {
 
             if (FUNCTION_SETTINGS.REMOVE_SPONSORED == true) {
                var TWEETS_SPOSNORED = document.querySelectorAll("article[ARTICLE_LOADED='true'] path[d='" + sponsor_path + "']:not([TWEET_SPONSORED])");
 
                if (TWEETS_SPOSNORED.length > 0) {
                   for (var element of TWEETS_SPOSNORED) {
 
                      var article = ARTICLE_FIND(element);
                      if (article) {
 
                         element.setAttribute("TWEET_SPONSORED", true);
 
                         await Push_Tweet(article)
                         CreateNotification("Tweet com Anúncio Removido");
                      }
                   }
                }
             }
 
 
             if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.Trendings == true) {
                var TRENDING_TWEETS = document.querySelectorAll(
                   "section div[data-testid='trend']:not([BANNED_WORD])"
                )
             } else {
                var TRENDING_TWEETS = [];
             }
             if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false) {
                var TWEETS = Array.from(document.querySelectorAll(
                   "article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([BANNED_WORD])"
                ))
 
             } else {
                tweetsTextArray = Array.from(
                   document.querySelectorAll(
                      "article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([BANNED_WORD])"
                   )
                )
                tweetsUsernameArray = Array.from(
                   document.querySelectorAll(
                      "article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='User-Name']:not([BANNED_WORD])"
                   )
                )
 
 
                TWEETS = tweetsTextArray.concat(tweetsUsernameArray)
 
 
             }
             if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scan_Cards == true) {
                var CardsArray = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='card.layoutSmall.detail']:not([BANNED_WORD])"));
                TWEETS = TWEETS.concat([], CardsArray)
             }
             let TWEETS_LENGTH = TWEETS.length;
             if (TWEETS_LENGTH > 0) {
 
                for (var i = 0; i < TWEETS_LENGTH; i++) {
                   let element = TWEETS[i];
 
                   var article = ARTICLE_FIND(element);
 
                   if (IS_SELF_TWEET(article)) {
                      element.setAttribute("BANNED_WORD", true);
                      article.setAttribute("BANNED_WORD", true);
                      return;
                   }
                   var text = element.innerText
                   //REMOVE ITENS DA VARIAVEL BANNED_LIST (PALAVRAS PREDEFINIDAS E ADICIONADAS PELO USUARIO, COMO "LINK IN BIO")
 
 
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas == true && BANNED_ITEMS.length > 0) {
 
                      if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex == false) {
                         for (var i = 0; i < BANNED_ITEMS.length; i++) {
                            if (text.includes(BANNED_ITEMS[i])) {
                               log('Palavra Predefinida detectada: ', BANNED_ITEMS[i])
                               if (article) {
                                  BLOCK = true;
                                  await Push_Tweet(article)
                                  CreateNotification("Tweet Removido");
                               }
                               break
                            }
                         }
                      } else {
                         if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.NaoRemover_Customizadas == false) {
                            var result = text.match(regex)
                            if (regex.test(text)) {
                               log('Palavra Predefinida detectada via RegEx: ' + result[0]);
 
                               if (article) {
                                  BLOCK = true;
                                  await Push_Tweet(article)
                                  CreateNotification("Tweet Removido");
                               }
                            }
                         } else {
                            CreateNotification("Censurando Palavras definidas...");
                            await TWEET.TWEET_ACTION.REPLACE_WORD_ASTERISCS(element);
                         }
 
                      }
 
                   }
                   
                   if (FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE == true) {
                     var videos = document.querySelectorAll("div[data-testid='card.wrapper'][VISIVEL]:not([VIDEO_TOCANTE])");
                   
                    if(videos.length>0){
                     videos.forEach(function(video){
                     const videoEl=video;
                     if(video.querySelector("path[d='"+is_video+"'")){
                       video=video.querySelector("div[data-testid='card.layoutSmall.detail']");
                     if(video.querySelector("div").innerText.indexOf("youtu")!=-1){
                       video.click();
                       videoEl.setAttribute("VIDEO_TOCANTE",true);
                     }
                   }
                    });
                  }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.TweetEmotes == true) {
                      var tweetClosest = ARTICLE_FIND(element)
                      if (element.innerText.trim() === '' && !tweetClosest.querySelector("div[data-testid='tweetPhoto']") && !tweetClosest.querySelector("div[data-testid='videoComponent']") && !tweetClosest.querySelector("div[role='link'][tabindex='0']")) {
                         await Push_Tweet(tweetClosest)
                         element.setAttribute("BANNED_WORD", true);
                         log("tweet com emoji detectado ");
                         CreateNotification("Tweet Apenas com Emojis Removido");
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.RemoveAutomated == true) {
 
                      AUTOMATICOS = article.querySelectorAll("path[d='" + automatico_path + "']");
                      AUTOMATICOS.forEach(async function (item) {
                         BLOCK = true;
 
                         CreateNotification("Tweet Automático Removido");
                         await Push_Tweet(article)
                         element.setAttribute("BANNED_WORD", true);
                      })
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.LetrasGrandes == true) {
                      var result = text.match(regex_BigLetter)
                      if (regex_BigLetter.test(text)) {
                         log('Tweet com Letras Grandes detectada: ' + result[0])
 
                         if (article) {
                            BLOCK = true;
 
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe == true) {
                      var result = text.match(regex_arabe)
                      if (regex_arabe.test(text)) {
                         log('Letra Árabe detectada: ' + result[0])
                         if (article) {
 
                            CreateNotification("Tweet Removido");
 
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico == true) {
                      var result = text.match(regex_amarico)
                      if (regex_amarico.test(text)) {
                         log('Letra Amárico detectada: ' + result[0])
                         if (article) {
 
 
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi == true) {
                      var result = text.match(regex_hindi)
 
                      if (regex_hindi.test(text)) {
                         log('Letra Hindi detectada: ' + result[0])
                         if (article) {
 
 
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico == true) {
                      var result = text.match(regex_chines)
 
                      if (regex_chines.test(text)) {
                         log('Letra Asiatica detectada: ' + result[0])
 
                         if (article) {
 
 
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo == true) {
                      var result = text.match(regex_russo)
 
                      if (regex_russo.test(text)) {
                         log('Letra Russa detectada: ' + result[0])
                         if (article) {
 
 
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico == true) {
                      var result = text.match(regex_hebraico)
                      if (regex_hebraico.test(text)) {
                         log('Letra Hebraica detectada: ' + result[0])
                         if (article) {
 
                            CreateNotification("Tweet Removido");
 
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (
                      FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita == true
                   ) {
                      var result = text.match(regex_vietnamita)
                      if (regex_vietnamita.test(text)) {
                         log('Letra Vietnamita detectada: ' + result[0])
                         if (article) {
 
 
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
                         }
                      }
                   }
                   if (
                      FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes == true
                   ) {
                      var result = text.match(regex_tailandes)
                      if (regex_tailandes.test(text)) {
                         log('Letra Tailândesa detectada: ' + result[0])
                         if (article) {
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
 
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego == true) {
                      var result = text.match(regex_grego)
                      if (regex_grego.test(text)) {
                         log('Letra Grega detectada: ' + result[0])
 
                         if (article) {
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
 
                         }
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano == true) {
                      var result = text.match(regex_coreano)
                      if (regex_coreano.test(text)) {
                         log('Letra Coreana detectada: ' + result[0])
                         if (article) {
 
                            CreateNotification("Tweet Removido");
                            await Push_Tweet(article)
                         }
                      }
                   }
 
                   article.setAttribute('BANNED_WORD', true)
                   element.setAttribute('BANNED_WORD', true)
                   if (BLOCK == true && FUNCTION_SETTINGS.Tweet_Scan_Palavras.Block_User == true) {
                      article.setAttribute("BLOCK_USER", true);
                      await BLOCK_ARRAY();
                   }
                };
             }
 
             const TRENDINGS_LENGTH = TRENDING_TWEETS.length;
             if (TRENDINGS_LENGTH > 0) {
                for (var i = 0; i < TRENDINGS_LENGTH; i++) {
                   let element = TRENDING_TWEETS[i];
                   var text = element.innerText
                   //REMOVE ITENS DA VARIAVEL BANNED_LIST (PALAVRAS PREDEFINIDAS E ADICIONADAS PELO USUARIO, COMO "LINK IN BIO")
 
 
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas == true && BANNED_ITEMS.length > 0) {
                      if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex == false) {
                         for (var i = 0; i < BANNED_ITEMS.length; i++) {
                            if (text.includes(BANNED_ITEMS[i])) {
                               log('Letra Predefinida detectada em uma Trend: ', BANNED_ITEMS[i])
 
                               CreateNotification("Trend Removida");
                               Push_Tweet(element)
 
                               break
                            }
                         }
                      } else {
                         var result = text.match(regex)
                         if (regex.test(text)) {
                            log('Letra Predefinida detectada via RegEx em uma Trend: ' + result[0]);
 
                            CreateNotification("Trend Removida");
                            Push_Tweet(element)
 
                         }
                      }
 
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe == true) {
                      var result = text.match(regex_arabe)
                      if (regex_arabe.test(text)) {
                         log('Letra Árabe detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico == true) {
                      var result = text.match(regex_amarico)
                      if (regex_amarico.test(text)) {
                         log('Letra Amárico detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
 
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi == true) {
                      var result = text.match(regex_hindi)
 
                      if (regex_hindi.test(text)) {
                         log('Letra Hindi detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
 
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico == true) {
                      var result = text.match(regex_chines)
 
                      if (regex_chines.test(text)) {
                         log('Letra Asiatica detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
 
                         Push_Tweet(element)
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo == true) {
                      var result = text.match(regex_russo)
 
                      if (regex_russo.test(text)) {
                         log('Letra Russa detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico == true) {
                      var result = text.match(regex_hebraico)
                      if (regex_hebraico.test(text)) {
                         log('Letra Hebraica detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
                      }
                   }
                   if (
                      FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita == true
                   ) {
                      var result = text.match(regex_vietnamita)
                      if (regex_vietnamita.test(text)) {
                         log('Letra Vietnamita detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
                      }
                   }
                   if (
                      FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes == true
                   ) {
                      var result = text.match(regex_tailandes)
                      if (regex_tailandes.test(text)) {
                         log('Letra Tailândesa detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego == true) {
                      var result = text.match(regex_grego)
                      if (regex_grego.test(text)) {
                         log('Letra Grega detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
                      }
                   }
                   if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano == true) {
                      var result = text.match(regex_coreano)
                      if (regex_coreano.test(text)) {
                         log('Letra Coreana detectada em uma Trend: ' + result[0])
 
                         CreateNotification("Trend Removida");
                         Push_Tweet(element)
                      }
                   }
                   if (element) {
                      element.setAttribute('BANNED_WORD', true)
                   }
                }
 
             }
          } catch (error) {
 
             throw error;
          }
 
       },
       //REMOVE TWEETS QUE CONTENHAM APENAS UM TWEET DE SÍ PRÓPRIO
       REMOVER_SELF_TWEETS: async () => {
          try {
 
 
             var TWEETS_SELF = document.querySelectorAll("article[ARTICLE_LOADED='true']:not([SELF_TWEET])");
 
             let TWEETS_SELF_LENGTH = TWEETS_SELF.length;
             if (TWEETS_SELF_LENGTH > 0) {
 
                for (var i = 0; i < TWEETS_SELF_LENGTH; i++) {
                   let element = TWEETS_SELF[i];
                   var article = ARTICLE_FIND(element);
                   if (IS_SELF_TWEET(article)) {
                      article.setAttribute('SELF_TWEET', true);
                      return;
                   }
                   if (element.querySelectorAll("div[data-testid='User-Name']").length == 2) {
                      var classL = element.querySelectorAll("div[data-testid='User-Name'] div span")[0].classList;
                      if (element.querySelectorAll("div[data-testid='User-Name'] div span")[0].innerText == element.querySelectorAll("div[data-testid='User-Name'] div span[class='" + classL.toString() + "'")[1].innerText) {
                         log("Retweet próprio detectado")
                         await Push_Tweet(article)
                         CreateNotification("Retweet Próprio Removido")
 
                      }
                   }
 
                   element.setAttribute('SELF_TWEET', true)
                };
 
             }
          } catch (error) {
             throw error;
          }
 
       }
    },
    //SISTEMA DE ANTI-CENSURA QUE REMOVE O SPOILER DE IMAGENS E VÍDEOS AUTOMÁTICAMENTE
    Remove_Spoilers: async () => {
       try {
 
 
          var TWEETS_SPOILERS = document.querySelectorAll(
             "article[data-testid='tweet'][ARTICLE_LOADED='true']:not([SPOILER])"
          )
          let TWEETS_SPOILERS_LENGTH = TWEETS_SPOILERS.length;
          if (TWEETS_SPOILERS_LENGTH > 0) {
 
             for (var i = 0; i < TWEETS_SPOILERS_LENGTH; i++) {
                let element = TWEETS_SPOILERS[i];
                element
                   .querySelectorAll(
                      "path[d='M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'"
                   )
                   .forEach(function (elementSvg) {
                      elementSvg.parentElement.parentElement.parentElement.parentElement
                         .querySelector("div[role='button']")
                         .click()
                      CreateNotification("Removendo Censura de Mídia")
                   })
                if (element) {
                   element.setAttribute('SPOILER', true)
                }
             }
          } else {
             //ANTI-SPOILER FOR MEDIA VIEW
             var MEDIAS = document.querySelectorAll(
                "div li div[role='button']:not([SPOILER])"
             )
             let TWEETS_MEDIAS_LENGTH = MEDIAS.length;
             if (TWEETS_MEDIAS_LENGTH > 0 && isOnPost() == false) {
 
                for (var i = 0; i < TWEETS_MEDIAS_LENGTH; i++) {
                   let element = MEDIAS[i];
                   log(element);
                   element.click()
                   CreateNotification("Removendo Censura de Mídia")
                   if (element) {
                      element.setAttribute('SPOILER', true)
                   }
                }
             }
          }
 
       } catch (error) {
          throw error;
       }
 
    },
    Spoiler_Tudo: async () => {
       try {
 
 
          var TWEETS_ALL = document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='tweetPhoto']:not([CENSURADO])");
          let TWEETS_ALL_LENGTH = TWEETS_ALL.length;
          if (TWEETS_ALL_LENGTH > 0) {
 
             for (var i = 0; i < TWEETS_ALL_LENGTH; i++) {
                let element = TWEETS_ALL[i];
 
                var article = ARTICLE_FIND(element);
                if (IS_SELF_TWEET(article)) {
                   article.setAttribute('CENSURADO', true);
                   element.setAttribute('CENSURADO', true);
                   return;
                }
                if (!element.querySelector(
                      "path[d='M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'"
                   )) {
                   log("Elemento de Mídia Censurado");
                   SPOILER_ARRAY.push(element);
                   element.setAttribute('CENSURADO', true);
                   element.addEventListener("mouseover", function (e) {
                      ARTICLE_ACTION(e.target.closest("div.Blur"), "decensurar")
                   });
                   element.addEventListener("mouseout", function (e) {
                      ARTICLE_ACTION(e.target.closest("div"), "censurar")
                   });
                   CreateNotification("Elemento de Mídia Censurado");
                } else {
                   log("Elemento Já Censurado");
                }
             }
          } else {
             //ANTI-SPOILER FOR MEDIA VIEW
             let MEDIAS = document.querySelectorAll(
                "div li[role='listitem'] img:not([CENSURADO])"
             )
             let MEDIAS_LENGTH = MEDIAS.length;
             if (MEDIAS_LENGTH > 0) {
 
                for (var i = 0; i < MEDIAS_LENGTH; i++) {
                   let element = MEDIAS[i];
                   if (!element.querySelector("div[role='button']")) {
                      closestDiv = element.closest("div");
                      //closestDiv.classList.add("Blur");
                      log("Elemento de Mídia Censurado");
                      SPOILER_ARRAY.push(closestDiv);
                      element.setAttribute('CENSURADO', true)
                      element.addEventListener("mouseover", function (e) {
                         ARTICLE_ACTION(e.target.closest("div.Blur"), "decensurar")
                      });
                      element.addEventListener("mouseout", function (e) {
                         ARTICLE_ACTION(e.target.closest("div"), "censurar")
                      });
 
                      CreateNotification("Elemento de Mídia Censurado");
                   } else {
                      log("Elemento Já Censurado");
                   }
 
                }
             }
          }
       } catch (error) {
          throw error;
       }
 
    },
    NoPic_Profile: async () => {
       try {
 
 
          const NO_PICS = document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='Tweet-User-Avatar'] img:not([DEFAULT_PIC])");
          if (NO_PICS.length > 0) {
             for (var element of NO_PICS) {
                var article = ARTICLE_FIND(element);
                if (IS_SELF_TWEET(article)) {
                   article.setAttribute('DEFAULT_PIC', true);
                   element.setAttribute('DEFAULT_PIC', true);
                   return;
                }
                if (element.src == "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") {
                   if (article) {
 
                      CreateNotification("Tweet de Usuário sem Foto Removido")
                      await Push_Tweet(article)
 
                   }
                }
 
                element.setAttribute('DEFAULT_PIC', true);
             };
 
          }
       } catch (error) {
          throw error;
       }
    },
 
    Remover_Enquetes: async () => {
       try {
 
 
          var POLLS = document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='cardPoll']:not([POLL])");
          if (POLLS.length > 0) {
             for (var element of POLLS) {
                var article = ARTICLE_FIND(element);
 
                if (IS_SELF_TWEET(article)) {
                   article.setAttribute('POLL', true);
                   element.setAttribute('POLL', true);
                   return;
                }
                if (article) {
 
                   await Push_Tweet(article)
 
                }
                CreateNotification("Tweet com Enquete Removido")
                element.setAttribute('POLL', true);
             };
          }
       } catch (error) {
          throw error;
       }
    },
 
    Remover_Links: async () => {
       try {
 
          if (FUNCTION_SETTINGS.Remover_Links.onlyLink == false) {
             var TWEETS_LINKS = document.querySelectorAll(
                "article[ARTICLE_LOADED='true'] div[data-testid='tweetText'] a[target='_blank']:not([LINK_TWEET])"
             )
          } else {
             var TWEETS_LINKS_DEF = document.querySelectorAll(
                "article[ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([LINK_TWEET])"
             )
             var TWEETS_LINKS = []
 
             let TWEETS_LINKS_DEF_LENGTH = TWEETS_LINKS_DEF.length;
 
             for (var i = 0; i < TWEETS_LINKS_DEF_LENGTH; i++) {
                let tweet = TWEETS_LINKS_DEF[i];
                if (
                   tweet.children.length == 1 &&
                   tweet.children[0].nodeName == 'A'
                ) {
                   TWEETS_LINKS.push(tweet)
                }
             }
          }
 
 
          let TWEETS_LINKS_LENGTH = TWEETS_LINKS.length;
          if (TWEETS_LINKS_LENGTH > 0) {
             for (var i = 0; i < TWEETS_LINKS_LENGTH; i++) {
                let element = TWEETS_LINKS[i];
                var article = ARTICLE_FIND(element);
 
                if (IS_SELF_TWEET(article)) {
                   article.setAttribute('LINK_TWEET', true);
                   element.setAttribute('LINK_TWEET', true);
                   return;
                }
                if (article) {
                   element.setAttribute('LINK_TWEET', true)
                   await Push_Tweet(article)
 
                   CreateNotification("Tweet com Link Removido")
                }
             }
 
          }
       } catch (error) {
          throw error;
       }
    },
 
    Remover_FakeVideos: async () => {
       try {
          var TWEET_FAKE_VIDEOS = document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='card.wrapper'] a img:not([FAKE_VIDEO])");
 
 
          for (var element of TWEET_FAKE_VIDEOS) {
 
             var article = ARTICLE_FIND(element);
 
             if (IS_SELF_TWEET(article)) {
                article.setAttribute('FAKE_VIDEO', true);
                element.setAttribute('FAKE_VIDEO', true);
                return;
             }
             const A = element.closest("A");
             if (A.target == "_blank" && A.rel == "noopener noreferrer nofollow" && A.childElementCount == 2) {
                if (article) {
                   element.setAttribute('FAKE_VIDEO', true)
                   await Push_Tweet(article)
 
                   CreateNotification("Tweet com Imagem Remota Removido (Video Fake)")
                }
             }
          }
 
       } catch (error) {
          throw error;
       }
    },
    CHECK_TWEET_TEXT: {
       COEFICIENTE_JACCARD: async (text1, text2) => {
             const words1 = text1.split(" ");
             const words2 = text2.split(" ");
 
             const wordCount1 = new Map();
             const wordCount2 = new Map();
 
             // Contar o número de ocorrências de cada palavra no texto 1
             words1.forEach(word => {
                const count = wordCount1.get(word) || 0;
                wordCount1.set(word, count + 1);
             });
 
             // Contar o número de ocorrências de cada palavra no texto 2
             words2.forEach(word => {
                const count = wordCount2.get(word) || 0;
                wordCount2.set(word, count + 1);
             });
 
             let intersection = 0;
             let union = 0;
 
             // Calcular a interseção e união dos conjuntos de palavras
             wordCount1.forEach((count, word) => {
                if (wordCount2.has(word)) {
                   intersection += Math.min(count, wordCount2.get(word));
                }
             });
 
             union = words1.length + words2.length - intersection;
 
             // Calcular a similaridade de Jaccard
             const jaccardSimilarity = intersection / union;
 
             // Levar em consideração a diferença na quantidade total de palavras
             const wordCountDifference = Math.abs(words1.length - words2.length);
             const wordCountPenalty = 1 - (wordCountDifference / Math.max(words1.length, words2.length));
 
             // Combinação da similaridade de Jaccard e da penalidade pela diferença na quantidade de palavras
             const combinedScore = jaccardSimilarity * wordCountPenalty;
 
             return combinedScore;
          }
 
          ,
       CHECK_SIMILARITY_JACCARD: async (texts) => {
          try {
             for (let i = 0; i < texts.length; i++) {
                for (let j = i + 1; j < texts.length; j++) {
                   // Verifica se os elementos são diferentes antes de calcular a similaridade
                   if (texts[i].elemento !== texts[j].elemento) {
                      var coeficiente = await TWEET.CHECK_TWEET_TEXT.COEFICIENTE_JACCARD(texts[i].texto.toLowerCase().trim(), texts[j].texto.toLowerCase().trim());
 
                      if (coeficiente.toFixed(2) >= FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem && texts[i] && texts[j]) {
 
                         texts[i].elemento.setAttribute("MARKED", true);
                         texts[j].elemento.setAttribute("MARKED", true);
                         Push_Tweet(ARTICLE_FIND(texts[i].elemento))
                         Push_Tweet(ARTICLE_FIND(texts[j].elemento))
                         log("Tweets Semelhantes Removidos");
                         CreateNotification("Tweets Semelhantes Removidos");
 
                      }
                   }
 
                }
             }
          } catch (e) {
             throw e;
          }
       },
       ARTICLE_ELEMENT_PROCESSOR: async () => {
          var articles = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([MARKED])"));
 
          TEXTS = [];
 
          let articles_LENGTH = articles.length;
          if (articles_LENGTH > 0) {
             for (var i = 0; i < articles_LENGTH; i++) {
                let item = articles[i];
                var article = ARTICLE_FIND(item);
 
                if (IS_SELF_TWEET(article)) {
                   article.setAttribute('MARKED', true);
                   item.setAttribute('MARKED', true);
                   return;
                }
                if (!item.id) {
                   //EVITA FILHOS DOS ELEMENTOS DE SEREM COMPARADOS COM OS PAIS 
                   item.setAttribute("MARKED", true);
                   return;
                }
 
                if (item.innerText.trim() !== "") {
                   if (FUNCTION_SETTINGS.TWEET_SPAM.removeLinks == true) {
                      var textoSemURLs = item.innerText.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '').replace(/@[^ ]+/g, '').replace(/\s+/g, ' ').replace(/[!?$]/gi, '');
                   } else {
                      var textoSemURLs = item.innerText;
                   }
                   const textoSemQuebrasDeLinha = textoSemURLs.replace(/\n/g, " ");
 
                   // Verifica se o texto contém apenas uma palavra
                   const palavras = textoSemQuebrasDeLinha.split(/\s+/);
                   if (palavras.length <= 2) {
                      return;
                   }
 
                   TEXTS.push({
                      "elemento": item,
                      "texto": textoSemQuebrasDeLinha
                   });
 
                }
             };
             TWEET.CHECK_TWEET_TEXT.CHECK_SIMILARITY_JACCARD(TEXTS);
          }
 
       }
    }
 }
 
 function IS_SELF_TWEET(tweetElement) {
    if (tweetElement.nodeName === "ARTICLE") {
       var userNameElement = tweetElement.querySelector("div[data-testid='User-Name']");
       var selfTweetNick = selecionarElementosComTexto(userNameElement, SELF_USER.nome);
       var selfTweetArroba = selecionarElementosComTexto(userNameElement, SELF_USER.arroba);
 
       return (selfTweetArroba.length !== 0 || selfTweetNick.length !== 0);
    }
 
    return false;
 }
 
 function ARTICLE_FIND(element) {
    if (element.nodeName !== "ARTICLE") {
       return element.closest('article');
    } else {
       return element;
    }
 }
 var FONT_AWESOME_LOADED = false;
 
 function GenerateFontAwesome() {
    try {
       const link = document.createElement('link');
       link.rel = 'stylesheet';
       link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
       document.head.appendChild(link);
 
       link.onload = () => {
          log('Font Awesome carregado com sucesso!');
          FONT_AWESOME_LOADED = true;
       };
 
       link.onerror = () => {
          throw 'Erro ao carregar Font Awesome!';
          // Tratar erros de carregamento, se necessário
       };
    } catch (e) {
       throw e;
       // Tratar erros, se ocorrerem
    }
 }
 var BLOCK_POT = [];
 async function BLOCK_ARRAY() {
    try {
       BLOCK = false;
       const BLOCK_POT = document.querySelectorAll("article[BLOCK_USER]");
       let blockLeng = BLOCK_POT.length;
       if (blockLeng > 0) {
          log("Tweets Pendentes: " + BLOCK_POT.length);
          for (let i = 0; i < blockLeng; i++) {
             const tweet = BLOCK_POT[i];
             if (document.body.contains(tweet)) {
                let tempArticleMenu = tweet.querySelector("div[aria-haspopup='menu'][role='button']");
                tempArticleMenu.click();
                await new Promise(resolve => setTimeout(resolve, 100));
                setTimeout(LOCK_USER, 50);
                await new Promise(resolve => setTimeout(resolve, 500));
                if (tweet.nodeName === "ARTICLE") {
                   setTimeout(BLOCK_ARRAY, 500);
                }
             } else {
                log("Elemento não encontrado, removendo da array BLOCK_POT")
                BLOCK_POT.splice(i, 1);
                blockLeng = BLOCK_POT.length;
                i--;
             }
          }
       }
    } catch (e) {
       throw e;
    }
 }
 
 
 function Get_Self_User() {
    try {
       var container = document.querySelector("header div[data-testid='SideNav_AccountSwitcher_Button']");
       var spanNickName = container.querySelector("span");
       var spansComArroba = selecionarElementosComTexto(container, "@");
 
       if (spansComArroba.length === 1 && spanNickName.innerText !== "") {
          SELF_USER.arroba = spansComArroba[0].innerText;
          SELF_USER.nome = spanNickName.innerText;
       } else {
          var profileLink = document.querySelector("nav[role='navigation'] a[data-testid='AppTabBar_Profile_Link']");
          var profileImage = document.querySelector("header div img[alt]");
 
          if (profileLink && profileImage) {
             SELF_USER.arroba = "@" + profileLink.href.replace("https://twitter.com/", "").replace("/", "");
             SELF_USER.nome = profileImage.closest("div").getAttribute("aria-label");
          }
       }
 
       log(SELF_USER);
       GenerateFontAwesome();
       Generate_Action_Notifications();
       setTimeout(CLEAR_TWEETS, 1000);
    } catch (e) {
       setTimeout(Get_Self_User, 200);
    }
 }
 async function Do_Censura() {
    let SPOILER_ARRAY_LENGTH = SPOILER_ARRAY.length;
    for (var i = 0; i < SPOILER_ARRAY_LENGTH; i++) {
       const image = SPOILER_ARRAY[i];
       image.classList.add("Blur");
    }
    SPOILER_ARRAY = [];
 }
 
 async function Push_Tweet(tweetID) {
    if (!REMOVE_ITENS.includes(tweetID)) {
       REMOVE_ITENS.push(tweetID);
    }
 }
 async function RemoveTweet() {
    let REMOVE_ITENS_LENGTH = REMOVE_ITENS.length;
 
    for (var i = 0; i < REMOVE_ITENS_LENGTH; i++) {
       const tweetID = REMOVE_ITENS[i];
 
       if (FUNCTION_SETTINGS.NO_REMOVE == true) {
          tweetID.classList.add("BANNED_TWEET");
          tweetID.style.opacity = "0.4";
          tweetID.style.backgroundColor = "orange";
       } else {
          tweetID.style.display = "none";
       }
    }
    REMOVE_ITENS = [];
 }
 var div_notification;
 async function Generate_Action_Notifications() {
    try {
       if (FUNCTION_SETTINGS.NOTIFICATIONS == true) {
          div_notification = document.createElement("div");
          div_notification.classList = "notifications";
          document.body.appendChild(div_notification);
          CreateNotification("Notificações Habilitadas");
       }
    } catch (e) {
 
    }
 }
 var ClearTimer = null;
 async function CreateNotification(message) {
    if (FUNCTION_SETTINGS.NOTIFICATIONS == true) {
       var alert_notification = document.createElement("div");
       alert_notification.classList = "ALERT";
       alert_notification.innerText = message
 
       var primeiroFilho = div_notification.firstChild;
 
       div_notification.insertBefore(alert_notification, primeiroFilho);
       if (ClearTimer) {
          clearTimeout(ClearTimer);
          ClearTimer = null;
       }
       ClearTimer = setTimeout(ClearNotifications, 5000);
    }
 }
 
 function ClearNotifications() {
    div_notification.innerHTML = "";
    ClearTimer = null;
 }
 
 function selecionarElementosComTexto(container, texto) {
    if (container) {
       // Seleciona todos os spans dentro do container especificado
       var spans = container.querySelectorAll("span");
       var elementos = [];
 
 
       for (var span of spans) {
          // Verifica se o texto do span contém o texto desejado
          if (span.textContent.includes(texto)) {
             elementos.push(span);
          }
       };
 
       return elementos;
    } else {
       return false;
    }
 }
 
 var canMoveImage = false;
 var zoomLevel = 1.0;
 var VIDEO_PAUSE;
 var SELF_USER = {
    nome: "",
    arroba: ""
 }
 async function HORIZONTAL_PANEL() {
    var ALL_NAVS = document.querySelectorAll("header nav a:not([HORIZONTAL])");
    if (ALL_NAVS.length > 0) {
       var HEADER_NAV = document.querySelector("header nav");
       document.querySelector("header").style.width = "0";
       document.querySelector("header div[data-testid='SideNav_AccountSwitcher_Button']").parentElement.parentElement.parentElement.style.justifyContent = "flex-start"
       for (var link of ALL_NAVS) {
          //link.querySelector("span").innerText="";
          link.style.width = "auto";
          link.setAttribute("HORIZONTAL", true);
       }
 
       HEADER_NAV.classList.add("NavHorizontal")
       //HEADER_NAV.childNodes[HEADER_NAV.childElementCount-1].querySelector("span").innerText=""
       document.querySelector("main[role='main']").style.marginTop = "5%";
 
    }
    var FORM_DIVS = document.querySelector("div[data-testid='sidebarColumn'] div div div div div form");
    if (FORM_DIVS) {
       if (FORM_DIVS.parentElement.parentElement.parentElement.parentElement.style.position != "absolute") {
          FORM_DIVS.parentElement.parentElement.parentElement.parentElement.style.position = "absolute";
 
       }
    }
 }
 
 function START() {
    try {
       if (FUNCTION_SETTINGS != null) {
          log('Twitter Comunity Control Script Started')
          log('Iniciando Itens');
 
 
          Get_Self_User();
       } else {
          GenerateFontAwesome();
          setTimeout(START, 200);
       }
    } catch (e) {
 
       setTimeout(START, 200);
       throw e;
    }
 }
 let REMOVE_ITENS = [];
 let SPOILER_ARRAY = [];
 async function CLEAR_TWEETS() {
    try {
       if (FUNCTION_SETTINGS != null) {
         if (FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE) {


            await TWEET.VIDEO_ACTION.VIDEO_AUTOPAUSE();
            const videos = document.querySelectorAll("video");
            let videoLen = videos.length;
            for (var i = 0; i < videoLen; i++) {
              const video=videos[i];
              if (video.currentTime > 0 && !video.paused && !video.ended) {
                 if(video!=VIDEO_PLAYING){
                    video.pause();
                    log(video);
                 }
              }
            };
         }
          if (FUNCTION_SETTINGS.CENSURA_TUDO) {
 
 
             TWEET.Spoiler_Tudo()
          }
          if (FUNCTION_SETTINGS.PREVIEW_IMAGES) {
 
             TWEET.TWEET_ACTION.IMAGE_PREVIEW()
          }
 
          if (FUNCTION_SETTINGS.HORIZONTAL_MENU) {
 
             HORIZONTAL_PANEL()
          }
 
 
          if (FUNCTION_SETTINGS.ANTI_SPOILER) {
 
 
             TWEET.Remove_Spoilers()
          }
 
 
          if (FUNCTION_SETTINGS.Remover_Enquetes) {
 
 
             TWEET.Remover_Enquetes()
          }
          if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scam_Conhecido) {
 
 
             TWEET.TWEET_ACTION.ComumScam()
          }
          if (FUNCTION_SETTINGS.Remover_Links.ativo) {
 
 
             TWEET.Remover_Links()
          }
          if (FUNCTION_SETTINGS.SELF_TWEET) {
 
 
             TWEET.TWEET_ACTION.REMOVER_SELF_TWEETS()
          }
 
          if (FUNCTION_SETTINGS.REMOVE_NOPIC_USER) {
 
 
             TWEET.NoPic_Profile()
          }
          if (FUNCTION_SETTINGS.FAKE_VIDEO_BAIT) {
 
 
             TWEET.Remover_FakeVideos()
          }
          if (FUNCTION_SETTINGS.TWEET_SPAM.ativo) {
 
 
             TWEET.CHECK_TWEET_TEXT.ARTICLE_ELEMENT_PROCESSOR()
          }
 
 
          TWEET.TWEET_ACTION.REMOVE_WORDS()
 
          TWEET.TWEET_ACTION.ADD_REPORT_BUTTON()
 
          Do_Censura();
          RemoveTweet();
 
       
          var articles = document.querySelectorAll('div[data-testid="primaryColumn"] article:not([ARTICLE_LOADED])');
          let artLen = articles.length;
          for (var i = 0; i < artLen; i++) {
             const item = articles[i];
             if (ElementoEstaElegivel(item) == true) {
                item.setAttribute("ARTICLE_LOADED", true);
             }
 
          }
 


         
          if (FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE == true) {
        const youtubes= document.querySelectorAll("div[data-testid='card.wrapper']:not([VISIVEL])");
         youtubes.forEach(function(ytvideo){
            if(ElementoEstaVisivel(ytvideo)==true){
               ytvideo.setAttribute("VISIVEL",true)
            }
         });
      }
          requestAnimationFrame(CLEAR_TWEETS);
       }
    } catch (e) {
       setTimeout(CLEAR_TWEETS, 500);
       throw e;
    }
 }
 GenerateFontAwesome();
 
 
 requestAnimationFrame(START);
 
 
 chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'async_enabledFunctions') {
       FUNCTION_SETTINGS = null
       FUNCTION_SETTINGS = message.data.funcoesConfigs
       if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord == true) {
          regex = new RegExp(BANNED_ITEMS.map(word => `\\b${word}\\b`).join('|'), 'i')
       } else {
          regex = new RegExp(BANNED_ITEMS.join('|'), 'i')
       }
       Reset_Tweets()
 
    }
 
    if (message.action == 'Reload_BannedWords') {
       BANNED_ITEMS = message.data.palavrasPredefinidas
       if (FUNCTION_SETTINGS) {
          if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord == true) {
             regex = new RegExp(BANNED_ITEMS.map(word => `\\b${word}\\b`).join('|'), 'i')
 
          } else {
             regex = new RegExp(BANNED_ITEMS.join('|'), 'i')
          }
       }
       Reset_Tweets()
 
    }
 })
 
 function Reset_Tweets() {
 
    Array.from(document.querySelectorAll("article[data-testid='tweet'] div[data-testid='tweetText'][MARKED]")).forEach(function (tweet) {
       tweet.removeAttribute("MARKED");
       ARTICLE_FIND(tweet).removeAttribute("MARKED");
    });
 
    Array.from(document.querySelectorAll("article[data-testid='tweet'] div[data-testid='tweetText'][BANNED_WORD]")).forEach(function (tweet) {
       tweet.removeAttribute("BANNED_WORD");
       ARTICLE_FIND(tweet).removeAttribute("BANNED_WORD");
    });
 
    Array.from(document.querySelectorAll("section div[data-testid='trend'][BANNED_WORD]")).forEach(function (tweet) {
       tweet.removeAttribute("BANNED_WORD");
    });
 
    Array.from(document.querySelectorAll("article div[data-testid='card.layoutSmall.detail'][BANNED_WORD]")).forEach(function (tweet) {
       tweet.removeAttribute("BANNED_WORD");
    });
 }
 
 //https://twitter.com/PaulinhaCasada1/status/1783611764950565174