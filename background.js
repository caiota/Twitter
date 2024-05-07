var BANNED_ITEMS_PADRAO = [
  'link in bio',
  'onlyfans.com/',
  'privacy.com/',
  'crypto',
  'onlyfans/privacy',
  'privacy/onlyfans',
  '░B░I░O',
  'ＬＩＮＫ ＩＮ ＢＩＯ',
  't.me/'
]
var FUNCTION_SETTINGS_PADRAO = {
  ANTI_SPOILER: false,
  CENSURA_TUDO:false,
  NOTIFICATIONS:false,
  VIDEO_AUTO_PAUSE: true,
  PREVIEW_IMAGES:true,
  SELF_TWEET:false,
  NO_REMOVE:true,
  AUTOPLAY_YOUTUBE:false,
  HORIZONTAL_MENU:true,
  REMOVE_NOPIC_USER:false,
  REMOVE_SPONSORED:true,
  FAKE_VIDEO_BAIT:false,
  Tweet_Scan_Palavras: {
    RemoveAutomated:true,
    NaoRemover_Customizadas:false,
    Block_User:false,
    todo_tweet: false,
    Scan_Cards:true,
    FullWord:false,
    TweetEmotes:false,
    Scam_Conhecido: true,
    LetrasGrandes:true,
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
    Trendings:true
  },
  Remover_Enquetes: false,
  Remover_Links: {
    ativo: false,
    onlyLink: false
  },
  TWEET_SPAM:{
    ativo:false,
    removeLinks:true,
    Parecidagem:0.8,
  },
  SHORTCUTS:{
    fast_block:true,
    report_tweet:false,
    view_less:false,
    mute_user:true,
  
  }
}

chrome.tabs.onCreated.addListener((tab) => {
 if(tab.status==="complete"){
  startScript(tab.id) 
 }
});



chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
 
});

function startScript(tab){
      
  
  setTimeout(()=>{CARREGAR_PALAVRAS_PREDEFINIDAS();CARREGAR_FUNCOES();},100);
  
}
let currentTabId;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
if (changeInfo.status === 'complete' && tab.url.includes("twitter.com/")) {
  

  setTimeout(()=>{CARREGAR_PALAVRAS_PREDEFINIDAS();CARREGAR_FUNCOES();},100);
}
});
function onDomLoaded(details) {
  setTimeout(function(){

    startScript(details.tabId);
  },1000)
  
}

chrome.webNavigation.onDOMContentLoaded.addListener(onDomLoaded);



chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Verifica se a mensagem é para abrir a nova aba da extensão
  if (message.action === 'save_customWords') {
    SALVAR_PALAVRAS_PREDEFINIDAS(message.message);
    sendResponse({ status: "Filtros Salvos"});
    
    CARREGAR_PALAVRAS_PREDEFINIDAS();
  
  }
  else if(message.action=="async_bannedWords"){
    CARREGAR_PALAVRAS_PREDEFINIDAS();
  }
  else if (message.action === 'save_functions') {
    SALVAR_FUNCOES(message.message);
    sendResponse({ status: "Funções Salvas"});
  
  }
  else if(message.action=="async_enabledFunctions"){
    CARREGAR_FUNCOES();
  }
  
});


function SALVAR_PALAVRAS_PREDEFINIDAS(array_extra) {
  chrome.storage.local.get({ palavrasPredefinidas: BANNED_ITEMS_PADRAO }, function(data) {

      if (chrome.runtime.lastError) {
          console.error("Erro ao recuperar os dados:", chrome.runtime.lastError);
          return false;
      }
    var dados = array_extra.filter(function(value) {
      return value !== ""; 
  });
      chrome.storage.local.set({ "palavrasPredefinidas": dados }, function() {
          console.log("Novo item adicionado com sucesso:", dados);
          CARREGAR_PALAVRAS_PREDEFINIDAS();
          return true;
      });
  });
}

function CARREGAR_PALAVRAS_PREDEFINIDAS(){
  chrome.storage.local.get({ palavrasPredefinidas: BANNED_ITEMS_PADRAO }, function(data) {

    chrome.tabs.query({ url: "*://twitter.com/*" }, function(tabs) {
    tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, { action: 'Reload_BannedWords',  data });
    });
});

chrome.runtime.sendMessage({ action: "Reload_BannedWords",  data });

return data;
  });
}

function SALVAR_FUNCOES(functions) {
  chrome.storage.local.get({ funcoesConfigs: FUNCTION_SETTINGS_PADRAO }, function(data) {

      if (chrome.runtime.lastError) {
          console.error("Erro ao recuperar os dados:", chrome.runtime.lastError);
          return false;
      }
    var dados = functions;

      chrome.storage.local.set({ "funcoesConfigs": dados }, function() {
          console.log("Novo item adicionado com sucesso:", dados);
          CARREGAR_FUNCOES();
          return true;
      });
  });
}
function CARREGAR_FUNCOES(){
  chrome.storage.local.get({ funcoesConfigs: FUNCTION_SETTINGS_PADRAO }, function(data) {

    chrome.tabs.query({ url: "*://twitter.com/*" }, function(tabs) {
    tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, { action: 'async_enabledFunctions',  data });
    });
});

chrome.runtime.sendMessage({ action: "async_enabledFunctions",  data });

return data;
  });
}

    
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "BanirPalavra") {
      

      if (info.selectionText.trim() !== "") {
        const textoSemEspeciais = info.selectionText.replace(/[.*+?^${}()|[\]\\]/g, "");
        chrome.storage.local.get({ palavrasPredefinidas: BANNED_ITEMS_PADRAO }, function(data) {
          console.log(data.palavrasPredefinidas);
          if (!data.palavrasPredefinidas.includes(textoSemEspeciais)) {
            data.palavrasPredefinidas.push(textoSemEspeciais);
  
            chrome.storage.local.set({ "palavrasPredefinidas": data.palavrasPredefinidas }, function() {
              console.log("Novo item adicionado com sucesso:", data.palavrasPredefinidas);
              CARREGAR_PALAVRAS_PREDEFINIDAS();
            });
          }
        });
      }
    }
  });
  

  chrome.runtime.onInstalled.addListener(function(details) {

    chrome.contextMenus.create({
      id: "BanirPalavra",
      title: "Adicionar ao Filtro de Palavras Customizadas",
      contexts: ["selection"] 
    });

//SALVAR_PALAVRAS_PREDEFINIDAS
    if(details.reason=="install"){
      SALVAR_PALAVRAS_PREDEFINIDAS(BANNED_ITEMS_PADRAO);
      SALVAR_FUNCOES(FUNCTION_SETTINGS_PADRAO);

      chrome.tabs.query({ url: "*://twitter.com/*" }, function(tabs) {
        tabs.forEach(function(tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['SCRIPT/TWITTER/TWITTER.js']
    });
    chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ['SCRIPT/TWITTER/TWITTER.css']
    });
    

      
      setTimeout(()=>{CARREGAR_PALAVRAS_PREDEFINIDAS();CARREGAR_FUNCOES();},500);
        })
  });
    }

    chrome.tabs.create({ url: "start.html" });
  });
   
     