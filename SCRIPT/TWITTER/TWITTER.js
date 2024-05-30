
var BANNED_ITEMS = ['link in bio', 'onlyfans.com/', 'privacy.com/', 'crypto', 'onlyfans/privacy', 'privacy/onlyfans', '░B░I░O', 'ＬＩＮＫ ＩＮ ＢＩＯ', 't.me']
var TEXTS = [];
var arabe = '\\u0600-\\u06FF'
var hebraico = '\\u0590-\\u05FF'
var russo = '\\u0400-\\u04FF'
var chines = '\\u4E00-\\u9FFF\\u3040-\\u30FF';
var hindi = '\\u0900-\\u097F\\u0B80-\\u0BFF';
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
var POST_LINK = "";
var block_path = "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z";
var ver_menos_path = "M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z";
var mute_path = "M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z";
var sponsor_path = "M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z";
var automatico_path = "M.998 15V9h2v6h-2zm22 0V9h-2v6h2zM12 2c-4.418 0-8 3.58-8 8v7c0 2.76 2.239 5 5 5h6c2.761 0 5-2.24 5-5v-7c0-4.42-3.582-8-8-8zM8.998 14c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2zm6 0c-1.104 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.896 2-2 2z";
var is_video = "M22.2275 17.1971V43.6465L43.0304 30.4218L22.2275 17.1971Z";
var retweet_path = "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z";

function ARTICLE_ACTION(element, action) {
	if (action === "remove") {
		const tweetUrlElement = ARTICLE_FIND(element.target).querySelector("div[data-testid='User-Name'] a[href*='/status/']");
		if (tweetUrlElement) {
			const idDoStatus = tweetUrlElement.href.split("/")[5];
			if (/^\d+$/.test(idDoStatus)) {
				console.log(tweetUrlElement.href.split("/")[3] + "/" + idDoStatus);
			}
		}
		element.target.remove();
	} else if (action === "block") {
		element.preventDefault();
		const tweetUrlElement = element.target.closest("article").querySelector("button[aria-haspopup='menu'][role='button']");
		tweetUrlElement.click();
		setTimeout(() => {
			if (document.querySelector("div[data-testid='Dropdown']")) {
				blockBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + block_path + "']").closest("div");
				blockBtn.click();
			} else {
				setTimeout(() => {
					ARTICLE_ACTION('block');
				}, 200);
				return
			}
		}, 100);
		setTimeout(LOCK_USER, 150);
	} else if (action === "decensurar") {
		if (element) {
			element.classList.remove("Blur");
		}
	} else if (action === "censurar") {
		const closestVideo = element.closest("div[data-testid='videoComponent']") || element;
		closestVideo.classList.add("Blur");
	} else if (action === "view_less" || action === "mute_tweet") {
		element.preventDefault();
		const tweetUrlElement = element.target.closest("article").querySelector("button[aria-haspopup='menu'][role='button']");
		tweetUrlElement.click();
		setTimeout(() => {
			const selector = action === "view_less" ? "div[data-testid='Dropdown'] path[d='" + ver_menos_path + "']" : "div[data-testid='Dropdown'] path[d='" + mute_path + "']";
			if (document.querySelector(selector)) {
				setTimeout(action === "view_less" ? VIEW_LESS_THIS : MUTE_TWEET, 50);
			} else {
				tweetUrlElement.click();
				element.target.remove();
			}
		}, 100);
	} else if (action === "check_quotes") {
		element.preventDefault();
		const article = element.target.closest("article");
		const postURL = article.querySelector("a[href*='/status']:not([href*='/photo']):not([href*='/video'])").href;
		if (isOnPost() == true) {
			rtPath = article.querySelector("path[d='" + retweet_path + "']");
			rtPath.closest("button").click();
			setTimeout(() => {
				container_quote = document.querySelector("div[data-testid='Dropdown'] a[href*='/quotes']");
				if (container_quote) {
					container_quote.click();
				} else {
					window.location.href = postURL + "/quotes";
				}
			}, 100);
		} else {
			window.location.href = postURL + "/quotes";
		}
	}
}

function LOCK_USER() {
	try {
		if (document.querySelector("div[data-testid='confirmationSheetDialog']")) {
			blockConfirm = document.querySelector("div[data-testid='confirmationSheetDialog'] button").click();
		} else {
			setTimeout(LOCK_USER, 500);
		}
	} catch (e) {
		setTimeout(LOCK_USER, 500);
	}
}

function VIEW_LESS_THIS() {
	try {
		viewLessBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + ver_menos_path + "']").closest("div");
		viewLessBtn.click();
	} catch (e) {
		setTimeout(VIEW_LESS_THIS, 500);
	}
}

function MUTE_TWEET() {
	try {
		MuteBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + mute_path + "']").closest("div");
		MuteBtn.click();
	} catch (e) {
		setTimeout(MUTE_TWEET, 500);
	}
}
var VIDEO_PLAYING = null;
var ARTICLE_MARCADO = null;
var DOCUMENTO_PRONTO = false;

document.body.addEventListener('click', function(event) {
	if(FUNCTION_SETTINGS){
	DOCUMENTO_PRONTO = true;
	if(FUNCTION_SETTINGS.KEYBOARD_NAVIGATION){

		const elementActive1 = document.querySelector("div[role='textbox'][data-testid='tweetTextarea_0']");
			const elementActive2 = document.querySelector("div[data-testid='dmComposerTextInput']");
            const elementActive3 = document.querySelector("input[data-testid='SearchBox_Search_Input']");
			if (document.activeElement === elementActive1 || document.activeElement == elementActive2 || document.activeElement == elementActive3) {
				return;
			  }


    if (ARTICLE_MARCADO && ARTICLE_MARCADO.contains(event.target)) {
        // Se o clique estiver dentro do ARTICLE_MARCADO, não faça nada para evitar a perda de foco
        return;
    }

    // Se o clique não estiver dentro do ARTICLE_MARCADO, force o foco para ele novamente
    if (ARTICLE_MARCADO) {
        ARTICLE_MARCADO.focus();
    }
}
	}
});

document.body.addEventListener('keydown', function(event) {
	try { 
		if(FUNCTION_SETTINGS){
		if (VIDEO_PLAYING != null) {
			switch (event.key) {
				case 'ArrowUp':
					event.preventDefault();
					VIDEO.VOLUME_UP();
					break;
				case 'ArrowDown':
					event.preventDefault();
					VIDEO.VOLUME_DOWN();
					break;
				case 'ArrowLeft':
					event.preventDefault();
					VIDEO.SEEK_LEFT();
					break;
				case 'ArrowRight':
					event.preventDefault();
					VIDEO.SEEK_RIGHT();
					break;
				case ' ':
					event.preventDefault();
					VIDEO.PLAY_PAUSE(VIDEO_PLAYING.paused);
					break;
				default:
					return;
			}
		}
		if (event.ctrlKey == true && event.key == "s" && fimg.src.indexOf("/media/") != -1) {
			event.preventDefault();
			window.open(fimg.src);
		}
		
		if(FUNCTION_SETTINGS.KEYBOARD_NAVIGATION==true){
			const elementActive1 = document.querySelector("div[role='textbox'][data-testid='tweetTextarea_0']");
			const elementActive2 = document.querySelector("div[data-testid='dmComposerTextInput']");
            const elementActive3 = document.querySelector("input[data-testid='SearchBox_Search_Input']");
			if (document.activeElement === elementActive1 || document.activeElement == elementActive2 || document.activeElement == elementActive3) {
				return;
			  }
		if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			event.preventDefault();
			scrollToArticle(event.key === 'ArrowDown' ? 'next' : 'previous');
		}
		if (event.key === 'w' || event.key === 's') {
			event.preventDefault();
			scrollToArticle(event.key === 's' ? 'next' : 'previous');
		}
		if(event.key==="ArrowLeft"||event.key==="a"&&isOnPost()==true&&!VIDEO_PLAYING){
			history.back();
			ARTICLE_MARCADO.scrollIntoView({ behavior: 'smooth', block: 'center' });
			ARTICLE_MARCADO.focus();
		}
		if(event.key==="ArrowRight"||event.key==="d"&&ARTICLE_MARCADO){
			ARTICLE_MARCADO.querySelector("article").click();
		}
	}
}
	} catch (err) {
		throw err;
	}
});
const scrollToArticle = (direction) => {
	
	const ARTICLES = Array.from(document.querySelectorAll("div[data-testid='cellInnerDiv'][SCROLL_MARKED='true']"))
    .filter(article => article.style.display !== "none");

	
    const focusedElement = document.activeElement;
    const focusedIndex = ARTICLES.indexOf(focusedElement);
    let targetIndex;

    if (direction === 'next') {
        targetIndex = (focusedIndex + 1) < ARTICLES.length ? focusedIndex + 1 : 0;
    } else if (direction === 'previous') {
        targetIndex = (focusedIndex - 1) >= 0 ? focusedIndex - 1 : ARTICLES.length - 1;
    }

    const targetArticle = ARTICLES[targetIndex];
    if (targetArticle) {
		ARTICLE_MARCADO=targetArticle;
        smoothScrollTo(ARTICLE_MARCADO);
        ARTICLE_MARCADO.focus();
    }
};

const smoothScrollTo = (element) => {
    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + startY - (window.innerHeight / 2 - element.clientHeight / 2);
    const duration = 350;
    let startTime = null;

    const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startY, targetY - startY, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
};
var imgPai = null;
var mouseX_Event = 0;
var mouseY_Event = 0;
var mouseX = 0;
var mouseY = 0;
document.addEventListener("mousemove", function(event) {
	try {
		if (FUNCTION_SETTINGS != null) {
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
					}
				}
			}
		}
	} catch (e) {
		throw e;
	}
});
document.addEventListener("wheel", function(event) {
	if (!canMoveImage) {
		return;
	} else {
		if (!ElementoEstaVisivel(imgPai)) {
			previewDiv.style.display = "none";
			zoomLevel = 1.0;
			previewDiv.style.transform = "scale(" + zoomLevel + ")";
			canMoveImage = false;
			imgPai = null;
			fimg.src = "";
		}
		if (event.ctrlKey) {
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
	}
}, {
	passive: false
});

function isOnPost() {
	let PAGE = window.location.href;
if(PAGE.indexOf("/quotes")!=-1){
	return false;
}

	if (PAGE.indexOf("/video/") == -1 && PAGE.indexOf("/photo/") == -1 && PAGE.indexOf("/status/") == -1) {
		return false;
	} else {
		return true;
	}
}

function getPostElements(article) {
	try {
		const linkPreview = article.querySelector("div[data-testid='card.wrapper']");
		const poll = article.querySelector("div[data-testid='cardPoll']")
		const photo = article.querySelector("div[data-testid='tweetPhoto']")
		const video = article.querySelector("div[data-testid='videoComponent']") //elemento photo também aparece quando há vídeos (nas thumbnails) então considerar apenas articles carregados
		if (video || photo || poll || linkPreview) {
			return true;
		}
		return false;
	} catch (e) {
		throw e;
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
		if (ElementoEstaVisivel(element) == true) {
			return true;
		}
		var elementRect = element.getBoundingClientRect();
		var windowHeight = window.innerHeight;
		// Adiciona uma margem extra de 100 pixels fora da tela
		var extraMargin = 100;
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
		if (VIDEO_PLAYING.paused && DOCUMENTO_PRONTO) {
			VIDEO_PLAYING.play();
			CAN_FORCE_PLAY = false;
		}
	} else {
		CAN_FORCE_PLAY = false;
		VIDEO_PLAYING = null;
		clearInterval(playLoop);
		playLoop = null;
	}
}
var playLoop = null;
let VIDEO = {
	PLAY_VIDEO(videoElementh) {
		if (videoElementh instanceof HTMLVideoElement && DOCUMENTO_PRONTO==true) {
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
		if (VIDEO_PLAYING&&DOCUMENTO_PRONTO==true) {
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
							if (DOCUMENTO_PRONTO == true) {
								videoElement.play();
							}
							videoElement.removeAttribute("playsinline")
							if (!videoElement.getAttribute('PAUSED')) {
								videoElement.muted = false;
								videoElement.volume = 0.1;
								videoElement.pause();
								videoElement.addEventListener('play', async (el) => {
									if (ElementoEstaVisivel(videoElement) == false && isOnPost() == false) {
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
											VIDEO.PAUSE_VIDEO(elclosest);
										});
									}
								}
								videoElement.setAttribute('PAUSED', true);
							}
						} else {
							if (DOCUMENTO_PRONTO == true) {
								videoElement.play();
								videoElement.removeAttribute('PAUSED');
							}
						}
					}
				}
			} catch (error) {
				throw error;
			}
		}
	},
	REMOVE_RIGHT_CONTENT: async () => {
		const sidesbar = document.querySelectorAll("div[data-testid='sidebarColumn'] aside[role='complementary']:not([BANNED_WORD])");
		sidesbar.forEach(async function(item) {
			item.setAttribute("BANNED_WORD",true);
			await Push_Tweet(item.parentElement,"Conteúdo Lateral")
		})
	},
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
					previewDiv.addEventListener("mouseout", function(event) {
						
						if (canMoveImage) {
							previewDiv.style.display = "none";
							zoomLevel = 1.0;
							previewDiv.style.transform = "scale(" + zoomLevel + ")";
							canMoveImage = false;
							previewLoading.style.display = "block";
						}
					});
					previewDiv.addEventListener("mousedown", function(event) {
						event.preventDefault();
						previewDiv.style.display = "none";
						zoomLevel = 1.0;
						previewDiv.style.transform = "scale(" + zoomLevel + ")";
						canMoveImage = false;
						previewLoading.style.display = "block";
					});
					previewDiv.appendChild(fimg);
					
					document.body.appendChild(previewDiv);
				}
				var ALL_IMAGES = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetPhoto'] img:not([PREVIEW_SET])"));
ALL_IMAGES = ALL_IMAGES.concat(Array.from(document.querySelectorAll("li[role='listitem'] img:not([PREVIEW_SET])")));
ALL_IMAGES = ALL_IMAGES.concat(Array.from(document.querySelectorAll("article div[data-testid='card.layoutLarge.media'] img")));
ALL_IMAGES = ALL_IMAGES.concat(Array.from(document.querySelectorAll("article div[data-testid='card.wrapper'] img")));
ALL_IMAGES = ALL_IMAGES.filter(img => !img.querySelector("div[data-testid='videoComponent']"));

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
									fimg.src = imgPai.src.replace(/name=\w+/g, "name=medium");
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
				var ALL_TWEETS = document.querySelectorAll("article[ARTICLE_LOADED='true']:not([BUTTON_ADDED])");
				if (ALL_TWEETS.length > 0) {
					for (var article of ALL_TWEETS) {
						//ADICIONA OPÇÃO RÁPIDA DE BLOQUEAR SUJEITO 
						if (IS_SELF_TWEET(article)) {
							article.setAttribute('BUTTON_ADDED', true);
							return;
						}
						if (article.querySelector("div[data-testid='User-Name']") && article.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']")) {
							nickNameDIV = article.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']").parentElement.parentElement.parentElement.parentElement.parentElement;
							if (nickNameDIV) {
								nickNameDIV.style.display = "flex";
								nickNameDIV.style.flexDirection = "row-reverse";
								var items_Div = document.createElement("div");
								items_Div.classList = "ITENS_BUTTONS_DIV";
								nickNameDIV.appendChild(items_Div);
								nickNameDIV.setAttribute('BUTTON_ADDED', true);
								if (FUNCTION_SETTINGS.SHORTCUTS.report_tweet == true) {
									var i_Report = document.createElement("i");
									i_Report.classList = "report";
									i_Report.id = "ICON_DIV";
									i_Report.title = chrome.i18n.getMessage("fastReport_tip");
									i_Report.setAttribute("aria-hidden", true);
									i_Report.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'remove')
									});
									items_Div.appendChild(i_Report)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.fast_block == true) {
									var i_block = document.createElement("i");
									i_block.classList = "lock";
									i_block.id = "ICON_DIV";
									i_block.title = chrome.i18n.getMessage("fastBlock_tip");
									i_block.setAttribute("aria-hidden", true);
									i_block.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'block')
									});
									items_Div.appendChild(i_block)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.view_quotes == true) {
									var i_quotes = document.createElement("i");
									i_quotes.classList = "chat";
									i_quotes.id = "ICON_DIV";
									i_quotes.title = chrome.i18n.getMessage("fastQuotes_tip");
									i_quotes.setAttribute("aria-hidden", true);
									i_quotes.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'check_quotes')
									});
									items_Div.appendChild(i_quotes)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.view_less == true) {
									var i_view_less = document.createElement("i");
									i_view_less.classList = "viewLess";
									i_view_less.id = "ICON_DIV";
									i_view_less.title = chrome.i18n.getMessage("fastseeLess_tip");
									i_view_less.setAttribute("aria-hidden", true);
									i_view_less.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'view_less')
									});
									items_Div.appendChild(i_view_less)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.mute_user == true) {
									var i_mute = document.createElement("i");
									i_mute.classList = "mute";
									i_mute.id = "ICON_DIV";
									i_mute.title = chrome.i18n.getMessage("fastMute_tip");
									i_mute.setAttribute("aria-hidden", true);
									i_mute.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'mute_tweet')
									});
									items_Div.appendChild(i_mute)
								}
								article.setAttribute('BUTTON_ADDED', true);
							}
						}
					}
				}
			} catch (e) {
				throw e;
			}
		},
		REPLACE_WORD_ASTERISCS: async (elemento) => {
			try {
				if (elemento.nodeType === Node.TEXT_NODE) {
					var texto = elemento.textContent;
					// Cria um contêiner de fragmento de documento para substituir o texto
					var fragment = document.createDocumentFragment();
					// Função auxiliar para criar um nó de texto ou um nó de span blurWord
					const createNode = (text, isBlurred) => {
						if (isBlurred) {
							var span = document.createElement('span');
							span.textContent = text;
							span.classList.add('blurWord');
							span.setAttribute('BLURED_WORD', true);
							span.addEventListener('mouseover', (e) => {
								span.classList.remove('blurWord');
							});
							span.addEventListener('mouseout', (e) => {
								span.classList.add('blurWord');
							});
							return span;
						} else {
							return document.createTextNode(text);
						}
					};
					// Dividir o texto em partes e criar nós de acordo
					let lastIndex = 0;
					BANNED_ITEMS.forEach(function(palavra) {
						var regex = new RegExp("\\b" + palavra + "\\b", "gi");
						let match;
						while ((match = regex.exec(texto)) !== null) {
							if (match.index > lastIndex) {
								fragment.appendChild(createNode(texto.slice(lastIndex, match.index), false));
							}
							fragment.appendChild(createNode(match[0], true));
							lastIndex = regex.lastIndex;
						}
					});
					if (lastIndex < texto.length) {
						fragment.appendChild(createNode(texto.slice(lastIndex), false));
					}
					elemento.parentNode.replaceChild(fragment, elemento);
				} else if (elemento.nodeType === Node.ELEMENT_NODE) {
					for (var i = 0; i < elemento.childNodes.length; i++) {
						await TWEET.TWEET_ACTION.REPLACE_WORD_ASTERISCS(elemento.childNodes[i]);
					}
				}
			} catch (e) {
				throw e;
			}
		},
		UPDATE_TWEET_MAIN: async () => {
			try {
				if (!isOnPost() == true) {
					MAIN_TWEET.arroba = "";
					MAIN_TWEET.nome = "";
					MAIN_TWEET.id = "";
					return;
				}
				const spans = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='User-Name'] span:not([NAME_CATCH])"));
				if (spans.length > 0) {
					const spansComArroba = spans.filter(span => {
						span.setAttribute("NAME_CATCH", true);
						return span.textContent.startsWith('@');
					});
					if (window.location.href.indexOf(spansComArroba[0].innerText.replace("@", "")) != -1) {
						MAIN_TWEET.arroba = spansComArroba[0].innerText;
						spansComArroba[0].setAttribute("NAME_CATCH", true);
						MAIN_TWEET.nome = document.querySelector("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='User-Name'] span").innerText;
						const closest_ahref = document.querySelector("article[data-testid='tweet'][ARTICLE_LOADED='true'] a time").closest("a").href.split("/")[5];
						MAIN_TWEET.id = closest_ahref;
					}
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
							let article_sponsor = ARTICLE_FIND(element);
							if (article_sponsor) {
								element.setAttribute("TWEET_SPONSORED", true);
								await Push_Tweet(article_sponsor,"Anúncio (Tweet Patrocinado)")
							}
						}
					}
				}
				if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.Trendings == true) {
					var TRENDING_TWEETS = document.querySelectorAll("section div[data-testid='trend']:not([BANNED_WORD])")
				} else {
					var TRENDING_TWEETS = [];
				}
				if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false) {
					
					 var TWEETS =Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true']:not([BANNED_WORD])"));
					
				} else {
					tweetsTextArray = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'][data-testid='tweetText']:not([BANNED_WORD])"))
					tweetsUsernameArray = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='User-Name']:not([BANNED_WORD])"))
				 var TWEETS = tweetsTextArray.concat(tweetsUsernameArray);
					TWEETS.reverse();
				}
				if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scan_Cards == true) {
					let CardsArray = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='card.layoutSmall.detail']:not([BANNED_WORD])"));
					TWEETS = TWEETS.concat([], CardsArray)
				}
				let TWEETS_LENGTH = TWEETS.length;
				if (TWEETS_LENGTH > 0) {
					for (var i = 0; i < TWEETS_LENGTH; i++) {
						var element = TWEETS[i];
						var article = ARTICLE_FIND(element);

						const TempElement=element.querySelector("div[data-testid='tweetText']");
						if(!TempElement&&FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false){
							element.setAttribute("BANNED_WORD", true);
							article.setAttribute("BANNED_WORD", true);
							return;
						}
						if(FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false&&TempElement){
							element=TempElement;
						}
						if(MAIN_TWEET.arroba==""&&isOnPost()==true){
							break;
						}
						if (IS_SELF_TWEET(article)) {
							element.setAttribute("BANNED_WORD", true);
							article.setAttribute("BANNED_WORD", true);
							return;
						}
						let text = element.innerText
						//REMOVE ITENS DA VARIAVEL BANNED_LIST (PALAVRAS PREDEFINIDAS E ADICIONADAS PELO USUARIO, COMO "LINK IN BIO")
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas == true && BANNED_ITEMS.length > 0) {
							if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex == false) {
								for (var i = 0; i < BANNED_ITEMS.length; i++) {
									if (text.includes(BANNED_ITEMS[i])) {
										if (article) {
											BLOCK = true;
											await Push_Tweet(article,"Encontrado na Lista BANNED_ITENS "+BANNED_ITEMS[i])
										}
										break
									}
								}
							} else {
								let match = text.match(regex);
								if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.NaoRemover_Customizadas == false) {
									if (regex.test(text)) {
										if (article) {
											BLOCK = true;
											await Push_Tweet(article,"Encontrado na Lista BANNED_ITENS: '"+match[0]+"'")
										}
									}
								} else {
									await TWEET.TWEET_ACTION.REPLACE_WORD_ASTERISCS(element);
								}
							}
						}
						if (FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE == true) {
							var videos = document.querySelectorAll("div[data-testid='card.wrapper'][VISIVEL]:not([VIDEO_TOCANTE])");
							if (videos.length > 0) {
								videos.forEach(function(video) {
									const videoEl = video;
									if (video.querySelector("path[d='" + is_video + "'")) {
										video = video.querySelector("div[data-testid='card.layoutSmall.detail']");
										if (video.querySelector("div").innerText.indexOf("youtu") != -1) {
											video.click();
											videoEl.setAttribute("VIDEO_TOCANTE", true);
										}
									}
								});
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.TweetEmotes == true) {
							//var tweetClosest = ARTICLE_FIND(element)
							if (element.innerText.trim() === '' && !article.querySelector("div[data-testid='tweetPhoto']") && !article.querySelector("div[data-testid='videoComponent']") && !article.querySelector("div[role='link'][tabindex='0']")) {
								await Push_Tweet(article,"Tweet somente com Emote")
								element.setAttribute("BANNED_WORD", true);
							}
						}
						
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.RemoveAutomated == true) {
							if (isOnPost() == true && article.querySelector("div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
								article.setAttribute('BANNED_WORD', true);
								element.setAttribute('BANNED_WORD', true);
								return;
							}
							AUTOMATICOS = article.querySelector("path[d='" + automatico_path + "']");
							
							if(AUTOMATICOS){
								BLOCK = true;
								await Push_Tweet(article,"Tweet Automátizado")
								element.setAttribute("BANNED_WORD", true);
								article.setAttribute("BANNED_WORD", true);
							}
						}
						if(FUNCTION_SETTINGS.Tweet_Scan_Palavras.clearSearch == true){
							const url = new URL(window.location.href);
							if(url.search){
							const params = new URLSearchParams(url.search);
							const q = params.get('q').toLowerCase();
							if(params.get('f')){
						var f = params.get('f').toLowerCase();
							}else{
								
							   var f="live";
							}
							if(q&&(f=="live"||f=="top")){
							if(article.querySelector("div[data-testid='tweetText']")){
								element=article.querySelector("div[data-testid='tweetText']");
							}else{	
								element.setAttribute("BANNED_WORD",true);
								article.setAttribute("BANNED_WORD",true);
								await Push_Tweet(article,"Tweet sem Texto da Pesquisa");
								return;
							}
							const spans = element.querySelectorAll('span');
						
						const filteredSpans = Array.from(spans).filter(span => {
							return getComputedStyle(span).fontWeight === '700';
						});
							if(filteredSpans.length==0){
								await Push_Tweet(article,"Tweet sem Conteúdo da Pesquisa");
							}
							
							}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.LetrasGrandes == true) {
							if (regex_BigLetter.test(text)) {
								if (article) {
									BLOCK = true;
									await Push_Tweet(article,"Tweet com Letras Grandes")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe == true) {
							if (regex_arabe.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Arabe")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico == true) {
							if (regex_amarico.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Amárico")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi == true) {
							if (regex_hindi.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Hindí")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico == true) {
							if (regex_chines.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Asiático "+text)
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo == true) {
							if (regex_russo.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Russo")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico == true) {
							if (regex_hebraico.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Hebraico")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita == true) {
							if (regex_vietnamita.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Vietnamita")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes == true) {
							if (regex_tailandes.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Tailândes")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego == true) {
							if (regex_grego.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Grego")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano == true) {
							if (regex_coreano.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Coreano")
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
										await Push_Tweet(element,"Trending contendo Palavra Banida: "+BANNED_ITEMS[i])
										break
									}
								}
							} else {
								let match = text.match(regex);
								if (regex.test(text)) {
									await Push_Tweet(element,"Trending contendo Palavra Banida: '"+match[0]+"'")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe == true) {
							if (regex_arabe.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Arabe")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico == true) {
							if (regex_amarico.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Amárico")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi == true) {
							if (regex_hindi.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Hindí")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico == true) {
							if (regex_chines.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Asiático")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo == true) {
							if (regex_russo.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Russo")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico == true) {
							if (regex_hebraico.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Hebraico")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita == true) {
							if (regex_vietnamita.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Vietnamita")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes == true) {
							if (regex_tailandes.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Tailândes")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego == true) {
							if (regex_grego.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Grego")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano == true) {
							if (regex_coreano.test(text)) {
									await Push_Tweet(element,"Trending com Idioma Banido: Coreano")
								
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
		REMOVER_SELF_TWEETS: () => {
			try {
				if (isOnPost() == true) {
					var TWEETS_SELF = Array.from(document.querySelectorAll("article:not([SELF_TWEET])"));
					let TWEETS_SELF_LENGTH = TWEETS_SELF.length;
					if (TWEETS_SELF_LENGTH > 1) {
						for (var i = 0; i < TWEETS_SELF_LENGTH; i++) {
							let element = TWEETS_SELF[i];
							if (IS_SELF_TWEET(element) == true) {
								element.setAttribute('SELF_TWEET', true);
								return;
							}
							if (element.querySelector("article[data-testid='tweet'] div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
								element.setAttribute('SELF_TWEET', true);
								return;
							}
							if (element.querySelectorAll("div[data-testid='User-Name']").length == 2) {
								const arrF = Array.from(element.querySelectorAll("div[data-testid='User-Name'] span")).filter(span => {
									return span.textContent.startsWith('@');
								})
								if (!arrF[1]) {
									return;
								}
								const arr0InnerText = arrF[0].innerText;
								const arr1InnerText = arrF[1].innerText;
								if (arr0InnerText != MAIN_TWEET.arroba && arr0InnerText == arr1InnerText) {
									Push_Tweet(element,"Retweet Próprio Detectado")
								}
							}
							element.setAttribute('SELF_TWEET', true)
						};
					}
				}
			} catch (error) {
				throw error;
			}
		}
	},
	//SISTEMA DE ANTI-CENSURA QUE REMOVE O SPOILER DE IMAGENS E VÍDEOS AUTOMÁTICAMENTE
	Remove_Spoilers: async () => {
		try {
			var TWEETS_SPOILERS = document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true']:not([SPOILER])")
			let TWEETS_SPOILERS_LENGTH = TWEETS_SPOILERS.length;
			if (TWEETS_SPOILERS_LENGTH > 0) {
				for (var i = 0; i < TWEETS_SPOILERS_LENGTH; i++) {
					let element = TWEETS_SPOILERS[i];
					element.querySelectorAll("path[d='M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'").forEach(function(elementSvg) {
						elementSvg.parentElement.parentElement.parentElement.parentElement.querySelector("div[role='button']").click()
					})
					if (element) {
						element.setAttribute('SPOILER', true)
					}
				}
			} else {
				//ANTI-SPOILER FOR MEDIA VIEW
				var MEDIAS = document.querySelectorAll("div li div[role='button']:not([SPOILER])")
				let TWEETS_MEDIAS_LENGTH = MEDIAS.length;
				if (TWEETS_MEDIAS_LENGTH > 0 && isOnPost() == false) {
					for (var i = 0; i < TWEETS_MEDIAS_LENGTH; i++) {
						let element = MEDIAS[i];
						element.click()
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
			var TWEETS_ALL = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='tweetPhoto']:not([CENSURADO])"));
			TWEETS_ALL = TWEETS_ALL.concat(Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='card.wrapper'] div[data-testid='card.layoutSmall.media']:not([CENSURADO])")), Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='card.wrapper'] div[data-testid='card.layoutLarge.media']:not([CENSURADO])")))
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
					if (!element.querySelector("path[d='M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'")) {
						SPOILER_ARRAY.push(element);
						element.setAttribute('CENSURADO', true);
						element.addEventListener("mouseover", function(e) {
							ARTICLE_ACTION(element, "decensurar")
						});
						element.addEventListener("mouseout", function(e) {
							ARTICLE_ACTION(element, "censurar")
						});
					}
				}
			} else {
				//ANTI-SPOILER FOR MEDIA VIEW
				let MEDIAS = document.querySelectorAll("div li[role='listitem'] img:not([CENSURADO])")
				let MEDIAS_LENGTH = MEDIAS.length;
				if (MEDIAS_LENGTH > 0) {
					for (var i = 0; i < MEDIAS_LENGTH; i++) {
						let element = MEDIAS[i];
						if (!element.querySelector("div[role='button']")) {
							closestDiv = element.closest("div");
							SPOILER_ARRAY.push(closestDiv);
							element.setAttribute('CENSURADO', true)
							element.addEventListener("mouseover", function(e) {
								ARTICLE_ACTION(e.target.closest("div.Blur"), "decensurar")
							});
							element.addEventListener("mouseout", function(e) {
								ARTICLE_ACTION(e.target.closest("div"), "censurar")
							});
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
							await Push_Tweet(article,"Usuário sem Foto")
						}
					}
					element.setAttribute('DEFAULT_PIC', true);
				};
			}
		} catch (error) {
			throw error;
		}
	},
	Smooth_Scroll: async () => {
			const ARTICLES = document.querySelectorAll("div[data-testid='cellInnerDiv']:not([SCROLL_MARKED])");
			for (var i = 0; i < ARTICLES.length; i++) {
				let tweet = ARTICLES[i];
				if(tweet.querySelector("article")){
				tweet.setAttribute("tabindex", "-1");
			 tweet.setAttribute("SCROLL_MARKED",true);
			}
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
						await Push_Tweet(article,"Tweet com Enquete")
					}
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
				var TWEETS_LINKS = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetText'] a[target='_blank']:not([LINK_TWEET])"))
			} else {
				var TWEETS_LINKS_DEF = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([LINK_TWEET])"))
				var TWEETS_LINKS = []
				let TWEETS_LINKS_DEF_LENGTH = TWEETS_LINKS_DEF.length;
				for (var i = 0; i < TWEETS_LINKS_DEF_LENGTH; i++) {
					let tweet = TWEETS_LINKS_DEF[i];
					const article = tweet.closest("article")
					if (tweet.children.length == 1 && tweet.children[0].nodeName == 'A' && getPostElements(article) == false) {
						TWEETS_LINKS.push(tweet)
					} else {
						article.setAttribute('LINK_TWEET', true);
						tweet.setAttribute('LINK_TWEET', true);
					}
				}
			}
			let TWEETS_LINKS_LENGTH = TWEETS_LINKS.length;
			if (TWEETS_LINKS_LENGTH > 0) {
				for (var i = 0; i < TWEETS_LINKS_LENGTH; i++) {
					let element = TWEETS_LINKS[i];
					var article = ARTICLE_FIND(element);
					if (isOnPost() == true && article.querySelector("div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
						article.setAttribute('LINK_TWEET', true);
						element.setAttribute('LINK_TWEET', true);
						return;
					}
					if (IS_SELF_TWEET(article)) {
						article.setAttribute('LINK_TWEET', true);
						element.setAttribute('LINK_TWEET', true);
						return;
					}
					if (article) {
						await Push_Tweet(article,"Tweet com Link")
					}
					element.setAttribute('LINK_TWEET', true)
					article.setAttribute('LINK_TWEET', true)
				}
			}
		} catch (error) {
			throw error;
		}
	},
	Remover_FakeVideos: async () => {
		try {
			var TWEET_FAKE_VIDEOS = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='card.wrapper'] a img:not([FAKE_VIDEO])"));
			for (var element of TWEET_FAKE_VIDEOS) {
				var article = ARTICLE_FIND(element);
				if (IS_SELF_TWEET(article)) {
					article.setAttribute('FAKE_VIDEO', true);
					element.setAttribute('FAKE_VIDEO', true);
					return;
				}
				if (article.querySelector("article[data-testid='tweet'] div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
					element.setAttribute('FAKE_VIDEO', true);
					article.setAttribute('FAKE_VIDEO', true);
					return;
				}
				const A = element.closest("A");
				const contain_preview_mini = element.closest("div[data-testid='card.layoutSmall.media']");
				if (A.target == "_blank" && A.rel == "noopener noreferrer nofollow" && A.childElementCount == 2 && !contain_preview_mini) {
					if (article) {
						element.setAttribute('FAKE_VIDEO', true)
						await Push_Tweet(article,"Tweet com Vídeo Falso")
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
		},
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
								await Push_Tweet(ARTICLE_FIND(texts[i].elemento))
								await Push_Tweet(ARTICLE_FIND(texts[j].elemento))
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
	try {
		if (element.nodeName !== "ARTICLE") {
			return element.closest('article');
		} else {
			return element;
		}
	} catch (e) {
		throw e;
	}
}
var BLOCK_POT = [];
async function BLOCK_ARRAY() {
	try {
		BLOCK = false;
		BLOCK_POT = document.querySelectorAll("article[BLOCK_USER]");
		let blockLeng = BLOCK_POT.length;
		if (blockLeng > 0) {
			for (let i = 0; i < blockLeng; i++) {
				const tweet = BLOCK_POT[i];
				if (document.body.contains(tweet)) {
					let tempArticleMenu = tweet.querySelector("button[aria-haspopup='menu'][role='button']");
					tempArticleMenu.click();
					await new Promise(resolve => setTimeout(resolve, 100));
					setTimeout(LOCK_USER, 50);
					await new Promise(resolve => setTimeout(resolve, 500));
					if (tweet.nodeName === "ARTICLE") {
						setTimeout(BLOCK_ARRAY, 500);
					}
				}
			}
			BLOCK_POT = [];
		}
	} catch (e) {
		throw e;
	}
}
function Get_Self_User() {
	try {
		if(document.body.querySelector("header")&&SELF_USER.arroba==""&&SELF_USER.nome==""){
		var container = document.querySelectorAll("header div button")[1];
		if (container&&document.querySelector("header img")) {
			var spansComArroba = container.querySelector("div[data-testid*='UserAvatar-Container-']").getAttribute("data-testid").split("-")[2];
			var spanNickName = document.querySelector("header img").alt
			if (spansComArroba.length === 1 && spanNickName.innerText !== "") {
				SELF_USER.arroba = spansComArroba[0].innerText;
				SELF_USER.nome = spanNickName.innerText;
				
			} 
			else if(spansComArroba.length==0){
				spansComArroba=document.querySelector("header img").alt
				SELF_USER.arroba = spansComArroba;
				SELF_USER.nome = spanNickName.innerText;
			}
			else {
				var profileLink = document.querySelector("nav[role='navigation'] a[data-testid='AppTabBar_Profile_Link']");
				var profileImage = document.querySelector("header div img[alt]");
				if (profileLink && profileImage) {
					SELF_USER.arroba = "@" + profileLink.href.replace("https://twitter.com/", "").replace("https://x.com/", "").replace("/", "");
					SELF_USER.nome = profileImage.closest("div").getAttribute("aria-label");
				}
			}
			console.log(SELF_USER);
			setTimeout(CLEAR_TWEETS, 200);
		} else {
			setTimeout(Get_Self_User, 200);
		}
	}else {
		setTimeout(Get_Self_User, 50);
	}
	} catch (e) {
		setTimeout(Get_Self_User, 50);
		throw e
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
async function Push_Tweet(tweetID,motivo) {
	if (!REMOVE_ITENS.includes(tweetID)) {
		REMOVE_ITENS.push(tweetID);
		console.log(motivo+"\n\n")
	}
}
async function RemoveTweet() {
	let REMOVE_ITENS_LENGTH = REMOVE_ITENS.length;
	for (var i = 0; i < REMOVE_ITENS_LENGTH; i++) {
		let tweetID = REMOVE_ITENS[i];
		if(!tweetID){
			return;
		}
		if (FUNCTION_SETTINGS.NO_REMOVE == true) {
			tweetID.style.opacity = "0.4";
			tweetID.classList.add("BANNED_TWEET");
			tweetID.style.backgroundColor = "orange";
		} else {
			tweetID.style.display = "none";
		}
	}
	REMOVE_ITENS = [];
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
	arroba: "",
	colorScheme:"Dark",
}
var MAIN_TWEET = {
	nome: "",
	arroba: "",
	id: 0
}
async function HORIZONTAL_PANEL() {
	var ALL_NAVS = Array.from(document.querySelectorAll("header nav a:not([HORIZONTAL])"));
	ALL_NAVS = ALL_NAVS.concat(Array.from(document.querySelectorAll("header nav button:not([HORIZONTAL])")));
	if (ALL_NAVS.length > 0) {
		var HEADER_NAV = document.querySelector("header nav");
		document.querySelector("header").style.width = "0";
		document.querySelector("header button[data-testid='SideNav_AccountSwitcher_Button']").parentElement.parentElement.parentElement.style.justifyContent = "flex-start"
		for (var link of ALL_NAVS) {
			link.querySelector("div span").remove();
			link.style.width = "auto";
			link.style.alignItems = "flex-end";
			link.querySelector('div').classList.add("flexItemView");
			link.setAttribute("HORIZONTAL", true);
		}
		HEADER_NAV.classList.add("NavHorizontal");
		HEADER_NAV.style.backgroundColor = document.body.style.backgroundColor;
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
			SELF_USER.colorScheme=getBackground();
			Get_Self_User();
		} else {
			setTimeout(START, 200);
		}
	} catch (e) {
		setTimeout(START, 200);
		throw e;
	}
}
function getBackground(){
	switch(document.body.style.backgroundColor){
		case 'rgb(255, 255, 255)':
		return "Light";
		case 'rgb(21, 32, 43)':
		return "SemiDark";
		case 'rgb(0, 0, 0)':
		return "Dark";
	
	}
	}


let REMOVE_ITENS = [];
let SPOILER_ARRAY = [];
async function CLEAR_TWEETS() {
	try {
		if (FUNCTION_SETTINGS != null) {
			TWEET.TWEET_ACTION.UPDATE_TWEET_MAIN();
			const articles_offs = document.querySelectorAll('article:not([ARTICLE_LOADED])');
			let artLen = articles_offs.length;
			for (var i = 0; i < artLen; i++) {
				const item = articles_offs[i];
				if (ElementoEstaElegivel(item) == true) {
					item.setAttribute("ARTICLE_LOADED", true);
				}
			}
      
			await TWEET.TWEET_ACTION.REMOVE_WORDS();


			
			if (FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE) {
				if(DOCUMENTO_PRONTO){
				await TWEET.VIDEO_ACTION.VIDEO_AUTOPAUSE();
				}
				const videos = Array.from(document.querySelectorAll("video")).filter(video => {
					const parentElement = video.closest("li");
					if (!parentElement) {
						return video;
					}
				});
				if(window.location.href.indexOf("/video")!=-1){
					videos.shift();
				}
				const videoLen = videos.length;
				for (var i = 0; i < videoLen; i++) {
					const video = videos[i];
					
					if (video.currentTime > 0 && !video.paused && !video.ended) {
						if (video != VIDEO_PLAYING) {
							video.pause();
						}
					}
				};
			}
			if(FUNCTION_SETTINGS.KEYBOARD_NAVIGATION){
				TWEET.Smooth_Scroll();
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
			if (FUNCTION_SETTINGS.REMOVE_RIGHT_CONTENT == true) {
				TWEET.REMOVE_RIGHT_CONTENT();
			}
			TWEET.TWEET_ACTION.ADD_REPORT_BUTTON()
			await Do_Censura();
			await RemoveTweet();
			
			if (FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE == true) {
				const youtubes = document.querySelectorAll("div[data-testid='card.wrapper']:not([VISIVEL])");
				youtubes.forEach(function(ytvideo) {
					if (ElementoEstaVisivel(ytvideo) == true) {
						ytvideo.setAttribute("VISIVEL", true)
					}
				});
			}
			requestAnimationFrame(CLEAR_TWEETS);
		} else {
			setTimeout(CLEAR_TWEETS, 500);
		}
	} catch (e) {
		setTimeout(CLEAR_TWEETS, 500);
		throw e;
	}
}
function START_SCRIPTOVERVIEW() {
	chrome.runtime.sendMessage({
		action: 'SCRIPT_READY'
	}, function(response) {
		if (response.success == true) {
			requestAnimationFrame(START);
		} else {
			setTimeout(START_SCRIPTOVERVIEW, 50);
		}
	})
}
requestAnimationFrame(START_SCRIPTOVERVIEW);
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	 
	if (message.action === 'async_enabledFunctions') {
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
	try {
		
		Array.from(document.querySelectorAll("*[MARKED]")).forEach(function(tweet) {
			tweet.removeAttribute("MARKED");
		});
		Array.from(document.querySelectorAll("*[BANNED_WORD]")).forEach(function(tweet) {
			tweet.removeAttribute("BANNED_WORD");
		});
		Array.from(document.querySelectorAll("*[FAKE_VIDEO]")).forEach(function(tweet) {
			tweet.removeAttribute("FAKE_VIDEO");
		});
		Array.from(document.querySelectorAll("*[LINK_TWEET]")).forEach(function(tweet) {
			tweet.removeAttribute("LINK_TWEET");
		});
		Array.from(document.querySelectorAll("*[POLL]")).forEach(function(tweet) {
			tweet.removeAttribute("POLL");
		});
		Array.from(document.querySelectorAll("*[DEFAULT_PIC]")).forEach(function(tweet) {
			tweet.removeAttribute("DEFAULT_PIC");
		});
		Array.from(document.querySelectorAll("*[SELF_TWEET]")).forEach(function(tweet) {
			tweet.removeAttribute("SELF_TWEET");
		});

		Array.from(document.querySelectorAll("*[BANNED_TWEET]")).forEach(function(tweet) {
			tweet.removeAttribute("BANNED_TWEET");
		});
		Array.from(document.querySelectorAll("*[COMUM_SCAM_SCANNED]")).forEach(function(tweet) {
			tweet.removeAttribute("COMUM_SCAM_SCANNED");
		});
		
	} catch (e) {}
}