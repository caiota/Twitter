"use strict";

const BANNED_ITEMS_PADRAO = [
  'link in bio',
  'onlyfans.com/',
  'privacy.com/',
  'crypto',
  'onlyfans/privacy',
  'privacy/onlyfans',
  '░B░I░O',
  'ＬＩＮＫ ＩＮ ＢＩＯ',
  't.me/'
];

const FUNCTION_SETTINGS_PADRAO = {
  ANTI_SPOILER: false,
  CENSURA_TUDO: false,
  VIDEO_AUTO_PAUSE: true,
  KEYBOARD_NAVIGATION: true,
  PREVIEW_IMAGES: true,
  SELF_TWEET: false,
  NO_REMOVE: true,
  AUTOPLAY_YOUTUBE: false,
  HORIZONTAL_MENU: true,
  REMOVE_RIGHT_CONTENT: false,
  REMOVE_NOPIC_USER: false,
  REMOVE_SPONSORED: true,
  FAKE_VIDEO_BAIT: false,
  NOTIFICATION_SEARCH:true,
  Tweet_Scan_Palavras: {
    RemoveAutomated: true,
    NaoRemover_Customizadas: false,
    Block_User: false,
    todo_tweet: false,
    Scan_Cards: true,
    FullWord: false,
    TweetEmotes: false,
    LetrasGrandes: true,
    use_regex: true,
    remove_arabe: true,
    remove_asiatico: true,
    remove_coreano: true,
    remove_hebraico: true,
    remove_amarico: true,
    remove_russo: true,
    remove_hindi: true,
    remove_vietnamita: true,
    remove_tailandes: true,
    remove_grego: true,
    PalavrasCustomizadas: true,
    Trendings: true,
    clearSearch:false
  },
  Remover_Enquetes: false,
  Remover_Links: {
    ativo: false,
    onlyLink: false
  },
  TWEET_SPAM: {
    ativo: false,
    removeLinks: true,
    Parecidagem: 0.8
  },
  SHORTCUTS: {
    fast_block: true,
    report_tweet: false,
    view_less: false,
    mute_user: true,
    view_quotes: true
  }
};

let SCRIPT_READY = false;

chrome.tabs.onCreated.addListener(tab => {
  if (SCRIPT_READY && tab.status === "complete") {
    startScript(tab.id);
  }
});

function startScript(tabId) {
  if (SCRIPT_READY) {
    setTimeout(() => {
      CARREGAR_PALAVRAS_PREDEFINIDAS("popup");
      CARREGAR_FUNCOES("popup");
    }, 200);
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (SCRIPT_READY && changeInfo.status === 'complete' && (tab.url.includes("twitter.com/") || tab.url.includes("x.com/"))) {
    CARREGAR_PALAVRAS_PREDEFINIDAS("popup");
    CARREGAR_FUNCOES("popup");
  }
});

chrome.tabs.onRemoved.addListener(() => {
  // Clean up state if necessary
});

let port = {
  postMessage: () => false
};

chrome.runtime.onConnect.addListener(porte => {
  port = porte;
  console.assert(port.name === "ttextensionframeworkofaverybigwordohmygodman");
  port.onDisconnect.addListener(() => {
    port = { postMessage: () => false };
  });
  port.onMessage.addListener(message => {
    switch (message.action) {
      case "SCRIPT_POPUP_READY":
        port.postMessage({ action: "SCRIPT_POPUP_READY" });
        break;
      case "save_customWords":
        SALVAR_PALAVRAS_PREDEFINIDAS(message.message);
        break;
      case "async_bannedWords":
        CARREGAR_PALAVRAS_PREDEFINIDAS(message.tipo);
        break;
      case "save_functions":
        SALVAR_FUNCOES(message.message);
        break;
      case "async_enabledFunctions":
        CARREGAR_FUNCOES(message.tipo);
        break;
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    switch (message.action) {
      case "SCRIPT_READY":
        SCRIPT_READY = true;
        sendResponse({ success: true });
        break;
      case "save_customWords":
        SALVAR_PALAVRAS_PREDEFINIDAS(message.message);
        break;
      case "async_bannedWords":
        CARREGAR_PALAVRAS_PREDEFINIDAS(message.tipo);
        break;
      case "save_functions":
        SALVAR_FUNCOES(message.message);
        break;
      case "async_enabledFunctions":
        CARREGAR_FUNCOES(message.tipo);
        break;
    }
    return true;
  } catch (e) {
    console.error("ERRO: " + e);
  }
});

function SALVAR_PALAVRAS_PREDEFINIDAS(array_extra) {
  const dadosUnicos = [...new Set(array_extra.filter(value => value.trim() !== ""))];

  chrome.storage.local.get({ palavrasPredefinidas: BANNED_ITEMS_PADRAO }, data => {
    chrome.storage.local.set({ "palavrasPredefinidas": dadosUnicos }, () => {
      setTimeout(() => { CARREGAR_PALAVRAS_PREDEFINIDAS("popup") }, 500);
      return true;
    });
  });
}

function CARREGAR_PALAVRAS_PREDEFINIDAS(tipo) {
  chrome.storage.local.get({ palavrasPredefinidas: BANNED_ITEMS_PADRAO }, data => {
    chrome.tabs.query({ url: "*://twitter.com/*" }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { action: 'Reload_BannedWords', data });
      });
    });
    chrome.tabs.query({ url: "*://x.com/*" }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { action: 'Reload_BannedWords', data });
      });
    });
    port.postMessage({ action: 'Reload_BannedWords', data });
  });
}

function SALVAR_FUNCOES(functions) {
  chrome.storage.local.get({ funcoesConfigs: FUNCTION_SETTINGS_PADRAO }, data => {
    chrome.storage.local.set({ "funcoesConfigs": functions }, () => {
      CARREGAR_FUNCOES("popup");
      return true;
    });
  });
}

function CARREGAR_FUNCOES(tipo) {
  chrome.storage.local.get({ funcoesConfigs: FUNCTION_SETTINGS_PADRAO }, data => {
    chrome.tabs.query({ url: "*://twitter.com/*" }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { action: 'async_enabledFunctions', data });
      });
    });
    chrome.tabs.query({ url: "*://x.com/*" }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { action: 'async_enabledFunctions', data });
      });
    });
    if (tipo === "popup") {
      port.postMessage({ action: 'async_enabledFunctions', data });
    }
    return data;
  });
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "BanirPalavra" && info.selectionText.trim() !== "") {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + 
      '((\\d{1,3}\\.){3}\\d{1,3}))' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' + 
      '(\\#[-a-z\\d_]*)?$', 'i');

    let textoSemEspeciais = urlPattern.test(info.selectionText.trim())
      ? info.selectionText
      : info.selectionText.replace(/[*+?^${}()|[\]\\]/g, "");

    chrome.storage.local.get({ palavrasPredefinidas: BANNED_ITEMS_PADRAO }, data => {
      if (!data.palavrasPredefinidas.includes(textoSemEspeciais)) {
        data.palavrasPredefinidas.push(textoSemEspeciais);
        chrome.storage.local.set({ "palavrasPredefinidas": data.palavrasPredefinidas }, () => {
          CARREGAR_PALAVRAS_PREDEFINIDAS("popup");
        });
      }
    });
  }
});

var contextTitle=chrome.i18n.getMessage("context_title");
chrome.runtime.onInstalled.addListener(details => {
  chrome.contextMenus.create({
    id: "BanirPalavra",
    title: contextTitle,
    contexts: ["selection"]
  });

  if (details.reason === "install") {
    SALVAR_PALAVRAS_PREDEFINIDAS(BANNED_ITEMS_PADRAO);
    SALVAR_FUNCOES(FUNCTION_SETTINGS_PADRAO);
  }

  chrome.tabs.create({ url: "wc/"+chrome.i18n.getMessage("lang")+"/start.html" });
});
