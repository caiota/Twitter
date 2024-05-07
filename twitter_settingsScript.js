document.querySelectorAll('button.dropbtn').forEach(function (button) {
  button.addEventListener('click', toggleDropdown)
})
document.querySelector('textarea#CustomWord').addEventListener('change', function (item) {
    chrome.runtime.sendMessage(
      { action: 'save_customWords', message: item.target.value.split('\n') },
      function (response) {
        console.log(response.status)
      }
    )
  });
  document.querySelector('input#ParecidagemRange').addEventListener('input', function (item) {
    var valueToFilter=item.target.value / 100;
    var valueToView=item.target.value
    FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem=valueToFilter;
    document.querySelector("span#rangeValue").innerText="Medida de Correspondência para Identificar Tweets: "+valueToView+"%";
    SAVE_FUNCTION_SETTINGS();
  });
  

  document.querySelector('textarea#CustomWord').addEventListener("click",function(item){
    item.target.scrollTop = item.target.scrollHeight;}, { once: true });
var FUNCTION_SETTINGS = {
  ANTI_SPOILER: false,
  CENSURA_TUDO:false,
  NOTIFICATIONS:false,
  VIDEO_AUTO_PAUSE: false,
  PREVIEW_IMAGES:false,
  AUTOPLAY_YOUTUBE:false,
  SELF_TWEET:false,
  NO_REMOVE:true,
  HORIZONTAL_MENU:false,
  REMOVE_NOPIC_USER:false,
  REMOVE_SPONSORED:true,
  FAKE_VIDEO_BAIT:false,
  Tweet_Scan_Palavras: {
    RemoveAutomated:true,
    NaoRemover_Customizadas:false,
    Block_User:true,
    todo_tweet: false,
    Scan_Cards:true,
    FullWord:false,
    TweetEmotes:false,
    Scam_Conhecido: false,
    LetrasGrandes:false,
    use_regex: false,
    remove_arabe: false,
    remove_asiatico: false,
    remove_coreano: false,
    remove_hebraico: false,
    remove_amarico: false,
    remove_russo: false,
    remove_hindi: false,
    remove_vietnamita: false,
    remove_tailandes: false,
    remove_grego: false,
    PalavrasCustomizadas: false,
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
    report_tweet:true,
    view_less:false,
    mute_user:true,
  
  }
}

document
  .querySelectorAll("input[type='checkbox']")
  .forEach(function (inputElement) {
    inputElement.addEventListener('change', function (item) {
      document.querySelector("div#reloadTip").style.display="block";
      valor = item.target.checked;
switch (item.target.getAttribute('valor')) {
  case 'ANTI_SPOILER':
    FUNCTION_SETTINGS.ANTI_SPOILER = valor;
    break;
  case 'VIDEO_AUTO_PAUSE':
    FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE = valor;
    break;
  case 'todo_tweet':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet = valor;
    break;
  case 'Scam_Conhecido':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scam_Conhecido = valor;
    break;
  case 'use_regex':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex = valor;
    break;
  case 'remove_asiatico':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico = valor;
    break;
  case 'remove_russo':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo = valor;
    break;
  case 'remove_arabe':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe = valor;
    break;
  case 'remove_hebraico':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico = valor;
    break;
  case 'remove_hindi':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi = valor;
    break;
  case 'remove_vietnamita':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita = valor;
    break;
  case 'remove_tailandes':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes = valor;
    break;
  case 'remove_grego':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego = valor;
    break;
  case 'remove_coreano':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano = valor;
    break;
  case 'remove_amarico':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico = valor;
    break;
  case 'Remover_Links':
    FUNCTION_SETTINGS.Remover_Links.ativo = valor;
    break;
  case 'onlyLink':
    FUNCTION_SETTINGS.Remover_Links.onlyLink = valor;
    break;
  case 'PalavrasCustomizadas':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas = valor;
    break;
  case 'Remover_Enquetes':
    FUNCTION_SETTINGS.Remover_Enquetes = valor;
    break;
  case 'ANTI_SELF':
    FUNCTION_SETTINGS.SELF_TWEET = valor;
    break;
  case 'scan_trends':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.Trendings = valor;
    break;
  case 'Header_Menu':
    FUNCTION_SETTINGS.HORIZONTAL_MENU = valor;
    break;
  case 'NoPics':
    FUNCTION_SETTINGS.REMOVE_NOPIC_USER = valor;
    break;
  case 'full_word':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord = valor;
    break;
  case 'tweet_urlCards':
    FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scan_Cards = valor;
    break;
  case 'CopyTweets':
    FUNCTION_SETTINGS.TWEET_SPAM.ativo = valor;
    break;
  case 'CopyTweets_RemoveLinks':
    FUNCTION_SETTINGS.TWEET_SPAM.removeLinks = valor;
    break;
    case 'FakeVideos':
      FUNCTION_SETTINGS.FAKE_VIDEO_BAIT = valor;
      break;
      case 'CENSURAR_TUDO':
        FUNCTION_SETTINGS.CENSURA_TUDO = valor;
        break;
        case 'ExtensionAlerts':
          FUNCTION_SETTINGS.NOTIFICATIONS = valor;
          break;
          case 'remove_BigLetter':
            FUNCTION_SETTINGS.Tweet_Scan_Palavras.LetrasGrandes = valor;
            break;
            case 'FadeOut_Tweet':
              FUNCTION_SETTINGS.NO_REMOVE = valor;
              break;
              case 'reportExtension':
                FUNCTION_SETTINGS.SHORTCUTS.report_tweet = valor;
                break;
                case 'fastBlock':
                  FUNCTION_SETTINGS.SHORTCUTS.fast_block = valor;
                  break;
                  case 'verMenos':
                    FUNCTION_SETTINGS.SHORTCUTS.view_less = valor;
                    break;
                    case 'fastMute':
                      FUNCTION_SETTINGS.SHORTCUTS.mute_user = valor;
                      break;
                      
                      case 'ZoomImages':
                        FUNCTION_SETTINGS.PREVIEW_IMAGES = valor;
                        break;
                      
                        case 'RemoveSponsored':
                          FUNCTION_SETTINGS.REMOVE_SPONSORED = valor;
                          break;
                          case 'CensuraPalavra':
                            FUNCTION_SETTINGS.Tweet_Scan_Palavras.NaoRemover_Customizadas = valor;
                            break;
                            case 'Remover_Emotes':
                              FUNCTION_SETTINGS.Tweet_Scan_Palavras.TweetEmotes = valor;
                              break;
                              case 'BloquearOnFind':
                                FUNCTION_SETTINGS.Tweet_Scan_Palavras.Block_User = valor;
                                break;
                                case 'RemoveAutomated':
                                  FUNCTION_SETTINGS.Tweet_Scan_Palavras.RemoveAutomated = valor;
                                  break;
                                  case 'AutoYoutube':
                                    FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE = valor;
                                    break;

                                  
}

      SAVE_FUNCTION_SETTINGS();
    })
  })

chrome.runtime.sendMessage(
  { action: 'async_enabledFunctions' },
  function (response) {}
)

chrome.runtime.sendMessage(
  { action: 'async_bannedWords' },
  function (response) {}
)

function toggleDropdown (e) {
  var dropdown = e.target.parentElement
  dropdown.classList.toggle('open')
}

// Fechar o menu dropdown se o usuário clicar fora dele
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open')
      }
    }
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'async_enabledFunctions') {
    itens = message.data.funcoesConfigs
    FUNCTION_SETTINGS.ANTI_SPOILER = itens.ANTI_SPOILER;
    FUNCTION_SETTINGS.CENSURA_TUDO = itens.CENSURA_TUDO;
    FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE = itens.VIDEO_AUTO_PAUSE;
    FUNCTION_SETTINGS.NOTIFICATIONS = itens.NOTIFICATIONS;
    FUNCTION_SETTINGS.NO_REMOVE = itens.NO_REMOVE;
    FUNCTION_SETTINGS.SHORTCUTS.fast_block = itens.SHORTCUTS.fast_block;
    FUNCTION_SETTINGS.SHORTCUTS.report_tweet = itens.SHORTCUTS.report_tweet;
    FUNCTION_SETTINGS.SHORTCUTS.view_less = itens.SHORTCUTS.view_less;
    FUNCTION_SETTINGS.SHORTCUTS.mute_user = itens.SHORTCUTS.mute_user;
    FUNCTION_SETTINGS.PREVIEW_IMAGES=itens.PREVIEW_IMAGES;
    FUNCTION_SETTINGS.REMOVE_SPONSORED=itens.REMOVE_SPONSORED;
    FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE=itens.AUTOPLAY_YOUTUBE;
    // Configurações de Palavras-Chave para Verificação de Tweets
    var Tweet_Scan_Palavras = FUNCTION_SETTINGS.Tweet_Scan_Palavras;
    var itensTweetScanPalavras = itens.Tweet_Scan_Palavras;
    
    Tweet_Scan_Palavras.todo_tweet = itensTweetScanPalavras.todo_tweet;
    Tweet_Scan_Palavras.Scam_Conhecido = itensTweetScanPalavras.Scam_Conhecido;
    Tweet_Scan_Palavras.use_regex = itensTweetScanPalavras.use_regex;
    Tweet_Scan_Palavras.remove_arabe = itensTweetScanPalavras.remove_arabe;
    Tweet_Scan_Palavras.remove_asiatico = itensTweetScanPalavras.remove_asiatico;
    Tweet_Scan_Palavras.remove_hebraico = itensTweetScanPalavras.remove_hebraico;
    Tweet_Scan_Palavras.remove_russo = itensTweetScanPalavras.remove_russo;
    Tweet_Scan_Palavras.remove_hindi = itensTweetScanPalavras.remove_hindi;
    Tweet_Scan_Palavras.remove_vietnamita = itensTweetScanPalavras.remove_vietnamita;
    Tweet_Scan_Palavras.remove_tailandes = itensTweetScanPalavras.remove_tailandes;
    Tweet_Scan_Palavras.remove_grego = itensTweetScanPalavras.remove_grego;
    Tweet_Scan_Palavras.remove_amarico = itensTweetScanPalavras.remove_amarico;
    Tweet_Scan_Palavras.remove_coreano = itensTweetScanPalavras.remove_coreano;
    Tweet_Scan_Palavras.PalavrasCustomizadas = itensTweetScanPalavras.PalavrasCustomizadas;
    Tweet_Scan_Palavras.Trendings = itensTweetScanPalavras.Trendings;
    Tweet_Scan_Palavras.FullWord = itensTweetScanPalavras.FullWord;
    Tweet_Scan_Palavras.Scan_Cards = itensTweetScanPalavras.Scan_Cards;
    Tweet_Scan_Palavras.LetrasGrandes = itensTweetScanPalavras.LetrasGrandes;
    Tweet_Scan_Palavras.NaoRemover_Customizadas = itensTweetScanPalavras.NaoRemover_Customizadas;
    Tweet_Scan_Palavras.TweetEmotes=itensTweetScanPalavras.TweetEmotes;
    Tweet_Scan_Palavras.Block_User=itensTweetScanPalavras.Block_User;
    Tweet_Scan_Palavras.RemoveAutomated=itensTweetScanPalavras.RemoveAutomated;
    // Outras Configurações
    FUNCTION_SETTINGS.Remover_Enquetes = itens.Remover_Enquetes;
    FUNCTION_SETTINGS.Remover_Links.ativo = itens.Remover_Links.ativo;
    FUNCTION_SETTINGS.Remover_Links.onlyLink = itens.Remover_Links.onlyLink;
    FUNCTION_SETTINGS.SELF_TWEET = itens.SELF_TWEET;
    FUNCTION_SETTINGS.HORIZONTAL_MENU = itens.HORIZONTAL_MENU;
    FUNCTION_SETTINGS.REMOVE_NOPIC_USER = itens.REMOVE_NOPIC_USER;
    FUNCTION_SETTINGS.TWEET_SPAM.ativo = itens.TWEET_SPAM.ativo;
    FUNCTION_SETTINGS.TWEET_SPAM.removeLinks = itens.TWEET_SPAM.removeLinks;
    FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem = itens.TWEET_SPAM.Parecidagem;
    FUNCTION_SETTINGS.FAKE_VIDEO_BAIT=itens.FAKE_VIDEO_BAIT;

    document.querySelector('input#box_PauseVideos').checked = FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE;
document.querySelector('input#box_Uncensure').checked = FUNCTION_SETTINGS.ANTI_SPOILER;
document.querySelector('input#box_NoPools').checked = FUNCTION_SETTINGS.Remover_Enquetes;
document.querySelector('input#box_CustomWord').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas;
document.querySelector('input#box_RemoveLinkOnly').checked = FUNCTION_SETTINGS.Remover_Links.onlyLink;
document.querySelector('input#box_RemoveLink').checked = FUNCTION_SETTINGS.Remover_Links.ativo;
document.querySelector('input#box_RemoveAsian').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico;
document.querySelector('input#box_RemoveRussian').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo;
document.querySelector('input#box_RemoveArabian').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe;
document.querySelector('input#box_RemoveHebraico').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico;
document.querySelector('input#box_RemoveTailandes').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes;
document.querySelector('input#box_RemoveHindi').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi;
document.querySelector('input#box_RemoveVietnamita').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita;
document.querySelector('input#box_RemoveGrego').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego;
document.querySelector('input#box_RemoveKorean').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano;
document.querySelector('input#box_UseRegEx').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex;
document.querySelector('input#box_RemoveComumScam').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scam_Conhecido;
document.querySelector('input#box_ScanAllTweet').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet;
document.querySelector('input#box_RemoveSelfRetweet').checked = FUNCTION_SETTINGS.SELF_TWEET;
document.querySelector('input#box_ScanTrends').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Trendings;
document.querySelector('input#box_RemoveOptionsBox').checked = FUNCTION_SETTINGS.HORIZONTAL_MENU;
document.querySelector('input#box_RemoveAmarico').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico;
document.querySelector('input#box_RemoveNoPics').checked = FUNCTION_SETTINGS.REMOVE_NOPIC_USER;
document.querySelector('input#box_ScanFullWord').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord;
document.querySelector('input#box_ScanUrlCards').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scan_Cards;
document.querySelector('input#box_RemoveCopyTweets').checked = FUNCTION_SETTINGS.TWEET_SPAM.ativo;
document.querySelector('input#box_RemoveCopyTweets_Links').checked = FUNCTION_SETTINGS.TWEET_SPAM.removeLinks;
document.querySelector('input#box_RemoveFakeVideos').checked = FUNCTION_SETTINGS.FAKE_VIDEO_BAIT;
document.querySelector("span#rangeValue").innerText = "Medida de Correspondência para Identificar Tweets: " + (FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem * 100) + "%";
document.querySelector('input#ParecidagemRange').value = FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem * 100;
document.querySelector('input#box_CensureAll').checked = FUNCTION_SETTINGS.CENSURA_TUDO;
document.querySelector('input#box_Notifications').checked = FUNCTION_SETTINGS.NOTIFICATIONS;
document.querySelector('input#box_RemoveBigLetters').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.LetrasGrandes;
document.querySelector('input#box_FadeOutTweet').checked = FUNCTION_SETTINGS.NO_REMOVE;
document.querySelector('input#box_reportExtension').checked = FUNCTION_SETTINGS.SHORTCUTS.report_tweet;
document.querySelector('input#box_fastBlock').checked = FUNCTION_SETTINGS.SHORTCUTS.fast_block;
document.querySelector('input#box_verMenos').checked = FUNCTION_SETTINGS.SHORTCUTS.view_less;
document.querySelector('input#box_fastMute').checked = FUNCTION_SETTINGS.SHORTCUTS.mute_user;


document.querySelector('input#box_ZoomImages').checked = FUNCTION_SETTINGS.PREVIEW_IMAGES;
document.querySelector('input#box_RemoveSponsored').checked = FUNCTION_SETTINGS.REMOVE_SPONSORED;
document.querySelector('input#box_CensuraPalavra').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.NaoRemover_Customizadas;
document.querySelector('input#box_NoEmotes').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.TweetEmotes;
document.querySelector('input#box_BlockPeople').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Block_User;
document.querySelector('input#box_RemoveAutomated').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.RemoveAutomated;
document.querySelector('input#box_AutoYoutube').checked = FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE;

}

  if (message.action == 'Reload_BannedWords') {
    document.querySelector('textarea#CustomWord').value =
      message.data.palavrasPredefinidas.toString().replaceAll(',', '\n')
  }
})

function SAVE_FUNCTION_SETTINGS(){
  try{
  chrome.runtime.sendMessage(
    { action: 'save_functions', message: FUNCTION_SETTINGS },
    function (response) {
      
    }
  )
}catch(e){
  console.error("erro "+e)
}
}